import { writable } from 'svelte/store';

// Function to calculate time until midnight
function getTimeUntilMidnight() {
	const now = new Date();
	const midnight = new Date(now);
	midnight.setHours(24, 0, 0, 0); // Set to midnight of the current day
	return midnight.getTime() - now.getTime();
}

// Create a writable store to hold the countdown string
export const countdownStore = writable('');

// Update countdown every second
const interval = setInterval(() => {
	const timeRemaining = getTimeUntilMidnight();
	const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
	const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
	countdownStore.set(
		`${hours.toString().padStart(2, '0')}h : ${minutes.toString().padStart(2, '0')}min : ${seconds.toString().padStart(2, '0')}s`
	);
}, 1000);

// Clear interval on component destroy
export function stopInterval() {
	clearInterval(interval);
}
