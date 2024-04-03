import { readable, type Readable } from 'svelte/store';

type Device = 'sm' | 'md' | 'lg' | 'xl';

export const useDevice = (device: Device): Readable<boolean> => {
	let deviceQuery: string = '';
	switch (device) {
		case 'sm':
			deviceQuery = '(max-width: 600px)';
			break;
		case 'md':
			deviceQuery = '(max-width: 900px)';
			break;
		case 'lg':
			deviceQuery = '(max-width: 1200px)';
			break;
		case 'xl':
			deviceQuery = '(max-width: 1536px)';
			break;
		default:
			deviceQuery = '(max-width: 600px)';
			break;
	}
	const store = readable<boolean>(false, (set) => {
		if (typeof window !== 'undefined') {
			const m = window.matchMedia(deviceQuery);
			set(m.matches);

			const listener = () => {
				const mq = window.matchMedia(deviceQuery);
				set(mq.matches);
			};
			window.addEventListener('resize', listener);

			return () => window.removeEventListener('resize', listener);
		}

		return;
	});
	return store;
};

// Example of usage in the component:
// import { useDevice } from '$lib/stores/useDevice';
// 	import { onDestroy } from 'svelte';

// 	let isMobile = false;
// 	const unsubscribe = useDevice('sm').subscribe((value) => {
// 		isMobile = value;
// 	});

// 	onDestroy(() => {
// 		unsubscribe();
// 	});
