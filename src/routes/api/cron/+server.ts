import { json, type RequestEvent } from '@sveltejs/kit';

// Cron job defined in vercel.json (call this route every 10minutes)
export async function GET({ request }: RequestEvent) {
	// Authenticate api call
	if (request.headers.get('Authorization') !== `Bearer ${process.env.CRON_SECRET}`) {
		return json({ error: 'Unauthorized' }, { status: 401 });
	}
	// Set response timeout
	const controller = new AbortController();
	const timeout = setTimeout(() => controller.abort(), 2000);
	// Call e-book-api
	try {
		const response = await fetch('https://e-book-api-fppg.onrender.com', {
			signal: controller.signal
		});
		clearTimeout(timeout);

		if (!response.ok) {
			throw new Error('Failed to call e-book-api');
		}

		return new Response('✅ E-book-api service is alive! ');
	} catch (error) {
		clearTimeout(timeout);
		console.error('Error calling e-book-api:', error);
		return json({ error: '📛 Failed to call e-book-api, service probably is down! 📛' }, { status: 500 });
	} finally {
		controller.abort();
	}
}
