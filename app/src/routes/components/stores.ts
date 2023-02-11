import { writable, get } from 'svelte/store';
import { print, unlock } from './functions';

export interface upgrade {
	title: string;
	description: string;
	price: number;
	id: string;
}
export interface stock {
	all: upgrade[];
	available: upgrade[];
}

export const cheatsEnabled = writable(false);
export const lifetimeThumbtacks = writable(0);
export const thumbtackCount = writable(0);
export const childLaborCount = writable(0);
export const money = writable(0);
export const tugrik = writable(0);
export const mongolians = writable(0);
export const bucketSize = writable(1);
export const mongolianFunding = writable(0);
export const lifetimeFunding = writable(0);
export const tackPrice = writable(0.5);
export const terminalLines = writable(['·', '·', '·', '·', 'Welcome to Mongolian Thumbtacks']);
const upgradeObject: stock = {
	all: [
		{
			title: 'Feed the child workers',
			description: 'Increases child labor efficiency by 50%',
			price: 500,
			id: 'childLaborUpgrade1'
		},
		{
			title: 'Even better child workers',
			description: 'Increases child labor efficiency by another 50%',
			price: 1500,
			id: 'childLaborUpgrade2'
		}
	],
	available: []
};
export const upgrades = writable(upgradeObject);

lifetimeThumbtacks.subscribe((value) => {
	if (value == 1) {
		print('Congratulations on making your first thumbtack');
	} else if (Math.log10(value) % 1 == 0) {
		print(`${value} thumbtacks reached`);
	} else if (Math.log2(value) % 1 == 0 && Math.log2(value) > 6) {
		mongolianFunding.set(get(mongolianFunding) + 1);
		lifetimeFunding.set(get(lifetimeFunding) + 1);
		print('You have recieved funding for your mongolian ventures');
	}
});

tugrik.subscribe((value) => {
	switch (value) {
		case 50:
			unlock('childLaborUpgrade1');
			break;
		default:
			return;
	}
});
