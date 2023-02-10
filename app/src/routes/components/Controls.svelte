<script lang="ts">
	import {
		lifetimeThumbtacks,
		thumbtackCount,
		childLaborCount,
		money,
		terminalLines
	} from './stores';
	import Business from './Business.svelte';
	import Factory from './Factory.svelte';
	const makeThumbtack = () => {
		$thumbtackCount++;
		$lifetimeThumbtacks++;
	};
	const doChildLabor = () => {
		if ($childLaborCount != 0) {
			$thumbtackCount++;
			$lifetimeThumbtacks++;
		}
		setTimeout(doChildLabor, (1 / $childLaborCount) * 1000);
	};
	doChildLabor();
</script>

<h1>Thumbtacks: {$lifetimeThumbtacks}</h1>

<button class="button" on:click={makeThumbtack}>Make thumbtack</button>
<button
	class="button"
	on:click={() => {
		for (const _ of Array(10000)) {
			makeThumbtack();
		}
	}}>x10000</button
>
<div class="p-2 rounded bg-neutral-100 dark:bg-neutral-800 mt-2 shadow w-fit outline outline-1 outline-neutral-700">
	<Business />
	<Factory />
</div>
