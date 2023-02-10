<script lang="ts">
	import Controls from './components/Controls.svelte';
	import Terminal from './components/Terminal.svelte';
</script>

<body
	class="dark:bg-[#151515] dark:text-neutral-300 selection:bg-black selection:text-white dark:selection:bg-yellow-300 dark:selection:text-black scroll-smooth"
>
	<div class="m-2">
		<Terminal />
		<Controls />
	</div>
</body>
