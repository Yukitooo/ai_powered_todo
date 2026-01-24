<script lang="ts">
	import { cardStore } from '$lib/states/states.cardStore.svelte';
</script>

<section class="grid gap-4">
	{#each cardStore.cards as card (card.id)}
		<article
			class="cursor-pointer rounded-none border-2 border-zinc-400/80 bg-zinc-900 px-6 py-5 transition-colors hover:border-zinc-300 hover:bg-zinc-700"
		>
			<h3 class="text-base font-semibold text-zinc-100">{card.title}</h3>
			<p class="mt-1 text-sm text-zinc-400">{card.description}</p>
		</article>
	{/each}
</section>
