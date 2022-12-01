<script>
	/** @type {string}*/
	export let description;
	/** @type {string}*/
	export let title;
	/** @type {string}*/
	export let imgSrc;
	/** @type {string}*/
	export let link;
	/** @type {string}*/
	export let linkName;
</script>

<div class="w-full flex flex-col gap-3">
	<div id="works-image" class="w-full h-48 rounded-lg overflow-hidden">
		<img src={imgSrc} alt={title} class="object-cover w-full h-full" />
	</div>
	<div id="works-title" class="text-white">
		{title}
	</div>
	<div id="works-desc" class="text-neutral-400 text-sm line-clamp-5">
		{description}
	</div>
	<a
		id="works-link"
		href={link}
		class="text-white text-sm flex items-center gap-2 hover:gap-3 hover:text-neutral-400 transition-all duration-300"
	>
		<div>{linkName}</div>
		<div><i class="bi bi-arrow-right" /></div>
	</a>
</div>
