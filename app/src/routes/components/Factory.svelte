<script lang="ts">
	import {
		lifetimeThumbtacks,
		thumbtackCount,
		childLaborCount,
		money,
		terminalLines
	} from './stores';
	const purchaseAutoTacker = () => {
		if ($money >= 50 + $childLaborCount ** 2 * 0.25) {
			$money -= 50 + $childLaborCount ** 2 * 0.25;
			$childLaborCount++;
		}
	};
</script>

<h1 class="underline">Factory</h1>
<div class="flex flex-row items-center gap-2">
	<button
		class="button"
		on:click={purchaseAutoTacker}
		disabled={$money <= 50 + $childLaborCount ** 2 * 0.25}>Child workers</button
	>
	<p>{$childLaborCount}</p>
</div>
<p>Price: ₱{50 + $childLaborCount ** 2 * 0.25}</p>
