<script>
	/** @type {string}*/
	export let description;
	/** @type {string}*/
	export let title;
	/** @type {string}*/
	export let imgSrc;
	/** @type {string}*/
	export let link;
</script>

<div class="w-full flex flex-col gap-3">
	{#if imgSrc}
		<div id="post-image" class="w-full h-48 rounded-lg overflow-hidden">
			<img src={imgSrc} alt={title} class="object-cover w-full h-full" />
		</div>
	{/if}
	<div id="post-title" class="text-white">
		{title || 'no item'}
	</div>
	<div id="post-desc" class="text-neutral-400 text-sm line-clamp-4">
		{description || 'no item'}
	</div>
	<a
		id={`works-${title}`}
		href={`/journal/${link}`}
		class="text-white text-sm flex items-center gap-2 hover:gap-3 hover:text-neutral-400 transition-all duration-300"
	>
		<div>Read More</div>
		<div><i class="bi bi-arrow-right" /></div>
	</a>
</div>
