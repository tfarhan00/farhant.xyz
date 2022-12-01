<script>
	import WorksCard from '$lib/components/WorksCard.svelte';
	/** @type {any}*/
	export let payload;
</script>

<div class="w-full flex flex-col">
	<div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
		{#each payload as item}
			<WorksCard
				title={item.title}
				description={item.desc}
				link={item.linkSrc}
				imgSrc={item.imgSrc}
				linkName={item.linkName}
			/>
		{/each}
	</div>
</div>
