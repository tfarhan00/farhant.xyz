<script>
	import PostCard from '$lib/components/journal/PostCard.svelte';

	/** @type {Array<{
	 * id: number,
	 * slug: string,
	 * content: {
	 * 	journal_title: string,
	 * journal_hero: {
	 * 	filename: string
	 * },
	 * journal_desc: string
	 * }}>}*/

	export let payload;
</script>

<div class="w-full flex flex-col">
	<div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
		{#each payload as item (item.id)}
			<PostCard
				title={item.content.journal_title}
				imgSrc={item.content.journal_hero.filename}
				description={item.content.journal_desc}
				link={item.slug}
			/>
		{/each}
	</div>
</div>
