<script lang="ts">
	import {
		terminalLines,
		thumbtackCount,
		lifetimeThumbtacks,
		money,
		tackPrice,
		cheatsEnabled
	} from './stores';
	import { print } from './functions';
	let commandInput: any;
	$: command = '';
	const enterCommand = () => {
		switch (command.split(' ')[0]) {
			case 'echo':
				print(command.split(' ').slice(1).join(' '));
				break;
			case 'clear':
				$terminalLines = ['·', '·', '·', '·', '·'];
				break;
            case 'cheat':
                $cheatsEnabled = true;
                print('Cheats are now enabled. Shame on you.')
                break;
			case 'add':
                if ($cheatsEnabled) {
                    $thumbtackCount += parseInt(command.split(' ')[1]);
                    $lifetimeThumbtacks += parseInt(command.split(' ')[1]);
                    print(`Added ${command.split(' ')[1]} thumbtacks, you cheater!`);
                } else {
                    print('You need to enable cheats to use this command.')
                }
				break;
			case 'sell':
                if ($cheatsEnabled) {
                    $money += parseInt(command.split(' ')[1]) * $tackPrice;
                    $thumbtackCount -= parseInt(command.split(' ')[1]);
                    print(`Sold ${command.split(' ')[1]} thumbtacks, you cheater!`);
                } else {
                    print('You need to enable cheats to use this command.')
                }
				break;
			default:
				print(`Command '${command.split(' ')[0]}' does not exist.`);
				break;
		}
		command = '';
	};
</script>

<div class="bg-black p-4 mb-2 rounded text-xs">
	{#each $terminalLines.slice(-5) as line, i}
		<p class="font-mono {i == 4 ? 'text-white' : 'text-slate-400'}">{line}</p>
	{/each}
	<form>
		<input
			bind:this={commandInput}
			bind:value={command}
			class="bg-black text-white font-mono w-full"
			style="outline: none"
			autofocus
		/>
		<button class="hidden" on:click={enterCommand} />
	</form>
</div>
