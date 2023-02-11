<script lang="ts">
	import { thumbtackCount, money, tackPrice } from './stores';
	const sell = () => {
		if ($thumbtackCount > 0) {
			$thumbtackCount--;
			$money += $tackPrice;
		}
		setTimeout(sell, 10000000 ** $tackPrice);
	};
	sell();
</script>

<h2>Business</h2>
<div class="flex flex-col divide-y divide-neutral-400">
	<div class="flex flex-row justify-between items-center gap-12 py-2">
		<p>Available funds</p>
		<p>₱{$money.toFixed(2)}</p>
	</div>
	<div class="flex flex-row justify-between items-center gap-12 py-2">
		<p>Unsold thumbtacks</p>
		<p>{$thumbtackCount}</p>
	</div>
	<div class="flex flex-row justify-between items-center gap-12 py-2">
		<div>
			<button
				class="button"
				on:click={() => ($tackPrice < 0.015 ? console.log('haha') : ($tackPrice -= 0.01))}
				>lower</button
			>
			<button class="button" on:click={() => ($tackPrice += 0.01)}>raise</button>
		</div>
		<p>₱{$tackPrice.toFixed(2)}/tack</p>
	</div>
	<div class="flex flex-row justify-between items-center gap-12 py-2">
		<p>Demand</p>
		<p>{(8 / $tackPrice).toFixed(1)}%</p>
	</div>
</div>
<div class="flex flex-row gap-1 items-center" />
