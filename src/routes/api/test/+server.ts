import { json } from '@sveltejs/kit';
import * as fs from 'fs';

export async function GET() {
	try {
		const filepath = `${process.cwd()}/watermarks/watermark-1.pdf`;
		fs.readFileSync(filepath);
		return json({ message: 'Works!' });
	} catch (error) {
		return json({ error: error }, { status: 500 });
	}
}
