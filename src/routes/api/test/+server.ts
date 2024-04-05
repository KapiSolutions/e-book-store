import { json } from '@sveltejs/kit';
import {read} from '$app/server';
import watermark from '$lib/assets/watermark-1.pdf'

export async function GET() {
    // return json({ message: 'Works!'});
	try {
		const fontData = read(watermark).arrayBuffer();
		return json({ message: 'Works!'});
	} catch (error) {
		return json({ error: error }, { status: 500 });
	}
}
