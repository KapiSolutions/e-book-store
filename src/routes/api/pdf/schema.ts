import * as yup from 'yup';

const required = 'Missing parameter';

export const pdfSchema = yup.object({
	coverPages: yup.string().required(required),
	docName: yup.string().required(required).max(250, 'Document name cannot exceed 250 characters'),
	finalDocName: yup
		.string()
		.required(required)
		.max(250, 'Final document name cannot exceed 250 characters'),
	clientName: yup.string().required(required).max(250, 'Client name cannot exceed 250 characters'),
	clientEmail: yup.string().email('Invalid email format').required(required)
});