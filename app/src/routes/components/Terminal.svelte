<script lang="ts">
    import { terminalLines } from "./stores"
</script>
<div class="bg-black p-4 mb-2 rounded">
    {#each $terminalLines.slice(-5) as line, i}
        <p 
            class="font-mono {i==$terminalLines.slice(-5).length-1?"text-white":"text-slate-400"}"
        >{line}</p>
    {/each}
</div>