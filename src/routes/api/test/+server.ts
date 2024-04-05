import { json } from '@sveltejs/kit';
import * as fs from 'fs';
import path from 'path';

export async function GET() {
	try {
		const filepath = path.join(process.cwd(), '../../../static/watermarks/watermark-1.pdf');
        console.log(filepath);
		fs.readFileSync(filepath);
		return json({ message: 'Works!' });
	} catch (error) {
		return json({ error: error }, { status: 500 });
	}
}
