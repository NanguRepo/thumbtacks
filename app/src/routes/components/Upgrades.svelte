<script lang="ts">
	import { upgrades, tugrik } from './stores';
</script>

<h2>Upgrades</h2>
<div class="flex flex-col gap-1 mt-2">
	{#if $upgrades.available.length}
		{#each $upgrades.available.slice(0, 5) as upgrade}
			<button
				class="rounded p-2 outline outline-1 enabled:hover:bg-black enabled:hover:text-white  enabled:active:bg-neutral-800 dark:enabled:hover:bg-white dark:enabled:hover:text-black dark:enabled:active:bg-neutral-300 disabled:opacity-25 max-w-[40ch]"
				disabled={upgrade.price > $tugrik}
			>
				<p class="font-bold">{upgrade.title}</p>
				<p class="break-words">{upgrade.description}</p>
				<p class="text-xs font-bold">₮{upgrade.price}</p>
			</button>
		{/each}
	{:else}
		<p class="text-neutral-500 -mt-2">No upgrades available.</p>
	{/if}
</div>
