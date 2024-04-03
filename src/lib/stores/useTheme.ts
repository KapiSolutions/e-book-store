import { readable, type Readable } from 'svelte/store';

interface Theme {
	theme: 'dark' | 'light';
}

const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');

export const theme: Readable<Theme> = readable<Theme>(
	{ theme: mediaQueryList.matches ? 'dark' : 'light' },
	(set) => {
		function listener(query: MediaQueryListEvent): void {
			set({ theme: query.matches ? 'dark' : 'light' });
		}
		if (typeof window !== 'undefined') {
			mediaQueryList.addEventListener('change', listener);

			return () => {
				mediaQueryList.removeEventListener('change', listener);
			};
		}
		return;
	}
);
