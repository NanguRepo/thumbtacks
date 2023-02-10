import { terminalLines } from "./stores";
import { get } from 'svelte/store';

export const print = (text: string) => {
    terminalLines.set([...get(terminalLines), text])
}