<script lang="ts">
	import { thumbtackCount, money, tackPrice } from './stores';
	const sell = () => {
		if ($thumbtackCount != 0) {
            $thumbtackCount--;
            $money += $tackPrice;
		}
        setTimeout(sell, 10000*$tackPrice)
	};
    sell();
</script>

<h1 class="underline">Business</h1>
<p>Available funds: ₱{$money.toFixed(2)}</p>
<p>Unsold thumbtacks: {$thumbtackCount}</p>
<div class="flex flex-row gap-1 items-center">
	<button
		class="button"
		on:click={() => ($tackPrice < 0.015 ? console.log('haha') : ($tackPrice -= 0.01))}>lower</button
	>
	<button class="button" on:click={() => ($tackPrice += 0.01)}>raise</button>
	<p>Price per tack: ₱{$tackPrice.toFixed(2)}</p>
</div>
<p>Demand: {(8 / $tackPrice).toFixed(1)}%</p>