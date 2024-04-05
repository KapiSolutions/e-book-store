import { json, type RequestEvent } from '@sveltejs/kit';
import * as yup from 'yup';
import { pdfSchema } from './schema';
import { API_KEY, GOOGLE_EMAIL } from '$env/static/private';
import { CloudStorage } from '$lib/utils/cloudStorage';
import { ModifyPDF } from '$lib/utils/modifyPDF';
import type { Order } from '$lib/types';
import type { SendMailOptions } from 'nodemailer';
import { EmailSender } from '$lib/utils/emailSender';

interface PdfData {
	coverPages: number[];
	docName: string;
	finalDocName: string;
	clientName: string;
	clientEmail: string;
}

export async function GET({ request }: RequestEvent) {
	// Validate API key
	const apiKey = request.headers.get('x-api-key');
	if (!apiKey || apiKey !== API_KEY) {
		return json({ error: 'Unauthorized' }, { status: 401 }); // Unauthorized response
	}
	// Get all query parameters
	const { searchParams } = new URL(request.url);
	const allParams: Record<string, string> = {};
	searchParams.forEach((value, key) => (allParams[key] = value));

	try {
		// Validate query parameters
		const validParams: Record<string, string> = await pdfSchema.validate(allParams, {
			abortEarly: false
		});
		// Convert string to array
		const coverPages = validParams.coverPages?.split(',').map((str) => parseInt(str.trim(), 10));

		const pdfData: PdfData = {
			coverPages: coverPages,
			docName: validParams.docName,
			finalDocName: validParams.finalDocName,
			clientName: validParams.clientName,
			clientEmail: validParams.clientEmail
		};
        console.log('⌚ Processing started..');
		console.log('⭐ E-book details:', pdfData);

		// Get and modify specific ebook PDF
		const finalPDF = await getEbook(pdfData);
		// Send e-book on the admin email address
		await sendEmailToAdmin(pdfData, finalPDF);

		console.log('✅ Processing complete!');
		return json({ message: 'Processing e-book completed!', pdfData });
	} catch (error) {
		const validationErrors: { [key: string]: string } = {};
		if (error instanceof yup.ValidationError) {
			error.inner.forEach((err) => (validationErrors[err.path as string] = err.message));
			return json({ error: 'Request validation error!', validationErrors }, { status: 400 });
		}
		return json({ error: error }, { status: 500 });
	}
}

// Get and process E-book PDF
async function getEbook(data: PdfData): Promise<Buffer> {
	try {
		const storage = new CloudStorage();
		const basePDF = await storage.downloadFile('ebookoid', `${data.docName}/${data.docName}.pdf`);
		const client = { name: data.clientName, email: data.clientEmail };

		const modifyPDF = new ModifyPDF();
		const readyPDF = await modifyPDF.start(
			basePDF,
			data.coverPages || [0],
			client as Order['client']
		);

		return readyPDF;
	} catch (error) {
		console.error('Error processing PDF:', error);
		throw new Error('Error processing PDF');
	}
}

// Send email with costumized E-book PDF
async function sendEmailToAdmin(data: PdfData, file: Buffer): Promise<void> {
	const emailAdmin = GOOGLE_EMAIL;
	const message = `E-book jest gotowy(wersja dla: ${data.clientName} email: ${data.clientEmail}), możesz go znaleźć w załączniku.🧡`;
	const subject = `Wygenerowany E-book dla ${data.clientName}!`;
	const emailOptions: SendMailOptions = {
		from: {
			name: 'Twój E-book',
			address: emailAdmin
		},
		to: emailAdmin,
		subject: subject,
		text: message,
		attachments: [
			{
				filename: data.finalDocName || 'E-book.pdf',
				content: file,
				encoding: 'base64'
			}
		]
	};
	const emailSender = new EmailSender();
	await emailSender.sendEmail(emailOptions);
}
