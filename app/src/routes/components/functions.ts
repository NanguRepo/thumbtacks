import { terminalLines, upgrades, lifetimeThumbtacks } from './stores';
import { get } from 'svelte/store';

export const print = (text: string) => {
	terminalLines.set([...get(terminalLines), text]);
};
export const unlock = (id: string) => {
	upgrades.set({
		all: get(upgrades).all,
		available:
            get(upgrades).available.concat(
                get(upgrades).all.filter((obj) => obj.id == id)
            )
	});
};