import type { Product } from '$lib/types';
import { writable, type Writable } from 'svelte/store';

export const productStore: Writable<Product | null> = writable(null);
