<script lang="ts">
    import { terminalLines } from "./stores";
	$: thumbtackCount = 0;
	const makeThumbtack = () => {
		thumbtackCount++;
		if (thumbtackCount % 100 == 0) {
            $terminalLines = [...$terminalLines, `${thumbtackCount} thumbtacks reached`]
		}
	};
</script>

<h1>Thumbtack Factory</h1>
<p>Thumbtacks: {thumbtackCount}</p>
<button
	class="bg-slate-200 rounded p-2 active:bg-slate-400 hover:bg-slate-300"
	on:click={makeThumbtack}
>
	Make thumbtack
</button>
