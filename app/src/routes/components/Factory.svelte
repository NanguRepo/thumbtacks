<script lang="ts">
	import {
		lifetimeThumbtacks,
		thumbtackCount,
		childLaborCount,
		money,
		terminalLines
	} from './stores';
	const purchaseAutoTacker = () => {
		if ($money >= 25 + $childLaborCount ** 2 * 0.50) {
			$money -= 25 + $childLaborCount ** 2 * 0.50;
			$childLaborCount++;
		}
	};
</script>

<h2>Factory</h2>
<div class="flex flex-row items-center gap-2">
	<button
		class="button"
		on:click={purchaseAutoTacker}
		disabled={$money <= 25 + $childLaborCount ** 2 * 0.50}>Child workers</button
	>
	<p>{$childLaborCount}</p>
</div>
<p>Price: ₱{25 + $childLaborCount ** 2 * 0.50}</p>
