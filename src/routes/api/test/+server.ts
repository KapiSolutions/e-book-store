import { json } from '@sveltejs/kit';

export async function GET() {

    const moduleURL = new URL(import.meta.url);
	return json({ message: moduleURL });
}