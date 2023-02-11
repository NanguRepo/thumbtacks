<script lang="ts">
	import { lifetimeThumbtacks, thumbtackCount, childLaborCount, cheatsEnabled } from './stores';
	import Business from './Business.svelte';
	import Factory from './Factory.svelte';
	import Upgrades from './Upgrades.svelte';
	import Mongolia from './Mongolia.svelte';
	const makeThumbtack = () => {
		$thumbtackCount++;
		$lifetimeThumbtacks++;
	};
	const doChildLabor = () => {
		if ($childLaborCount != 0) {
			$thumbtackCount++;
			$lifetimeThumbtacks++;
			setTimeout(doChildLabor, (1 / $childLaborCount) * 1000);
			return;
		}
		setTimeout(doChildLabor, 1000);
	};
	doChildLabor();
</script>

{#if $cheatsEnabled}
	<div class="rounded px-2 py-1 w-fit bg-red-400 text-white">
		<p>⚠️CHEATS ENABLED⚠️</p>
	</div>
{/if}
<h1>Thumbtacks: {$lifetimeThumbtacks}</h1>
<button class="button" on:click={makeThumbtack}>Make thumbtack</button>

<div class="flex flex-row gap-2 mt-2">
	<div class="flex flex-col gap-2">
		<div
			class="p-2 rounded bg-neutral-100 dark:bg-neutral-800 shadow w-fit outline outline-1 outline-neutral-700"
		>
			<Business />
		</div>
		<div
			class="p-2 rounded bg-neutral-100 dark:bg-neutral-800 shadow outline outline-1 outline-neutral-700 w-auto"
		>
			<Factory />
		</div>
	</div>
	<div class="flex flex-col gap-2">
		<div
			class="p-2 rounded bg-neutral-100 dark:bg-neutral-800 shadow outline outline-1 outline-neutral-700 w-auto"
		>
			<Upgrades />
		</div>
		<div
			class="p-2 rounded bg-neutral-100 dark:bg-neutral-800 shadow outline outline-1 outline-neutral-700 w-auto"
		>
			<Mongolia />
		</div>
	</div>
</div>
