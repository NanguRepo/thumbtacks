<script lang="ts">
	import { tugrik, mongolians, bucketSize, mongolianFunding, lifetimeFunding } from './stores';
	const generateTugrik = () => {
		if ($tugrik < $bucketSize * 1000 && $mongolians) {
			$tugrik++;
		}
		setTimeout(generateTugrik, 125 / ($mongolians ? $mongolians : 1));
	};
	generateTugrik();
</script>

<h2>Mongolia 🇲🇳</h2>
<div class="flex flex-col divide-y divide-neutral-400">
	<div class="flex flex-row items-center justify-between gap-4 py-2">
		<p>Funding</p>
		<p>{$lifetimeFunding}</p>
	</div>
	<div class="flex flex-row items-center justify-between gap-4 py-2">
		<p>Available</p>
		<p>{$mongolianFunding}</p>
	</div>
	<div class="flex flex-row items-center justify-between gap-4 py-2">
		<button
			class="button"
			on:click={() => {
				$mongolianFunding--;
				$mongolians++;
			}}
			disabled={$mongolianFunding < 1}>Fish farmers</button
		>
		<p>{$mongolians}</p>
	</div>
	<div class="flex flex-row items-center justify-between gap-4 py-2">
		<button
			class="button"
			on:click={() => {
				$mongolianFunding--;
				$bucketSize++;
			}}
			disabled={$mongolianFunding < 1}>Fish bucket size</button
		>
		<p>{$bucketSize}m³</p>
	</div>
	<div class="flex flex-row items-center justify-between gap-4 py-2">
		<p>Fish</p>
		<p>₮{$tugrik} / {$bucketSize * 1000}</p>
	</div>
	<div class="flex flex-row items-center justify-between gap-4 py-2">
		<p>Next government funding at</p>
		<p>{2 ** ($lifetimeFunding + 7)}</p>
	</div>
</div>
