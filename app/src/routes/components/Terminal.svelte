<script lang="ts">
	import { terminalLines } from './stores';
    import { print } from './functions';
	let commandInput: any;
	$: command = '';
	const enterCommand = () => {
        print(command)
		command = '';
		commandInput.focus();
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
			class="bg-black text-white font-mono w-full focus:!ring-black focus:!ring-offset-0"
		/>
		<button class="hidden" on:click={enterCommand} />
	</form>
</div>
