import { writable } from 'svelte/store';
import { print } from './functions';

export const lifetimeThumbtacks = writable(0);
export const thumbtackCount = writable(0);
export const childLaborCount = writable(0);
export const money = writable(0);
export const tackPrice = writable(0.5);
export const terminalLines = writable(['.', '.', '.', '.', 'Welcome to Thumbtacks']);

lifetimeThumbtacks.subscribe((value) => {
	if (value == 1) {
		print("Congratulations on making your first thumbtack");
	} else if (Math.log10(value) % 1 == 0) {
		print(`${value} thumbtacks reached`);
	}
});
