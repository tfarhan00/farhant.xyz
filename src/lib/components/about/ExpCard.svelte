<script>
	/** @type {string}*/
	export let time;
	/** @type {string}*/
	export let name;
	/** @type {string}*/
	export let link;
	/** @type {string}*/
	export let desc;
	/** @type {string}*/
	export let stacks;
</script>

<div id="2022" class="w-full flex flex-col text-neutral-400 justify-between gap-2">
	<div id="work-date">{time}</div>
	<div id="work-detail" class="grow text-white flex flex-col gap-1">
		<a href={link} target="_blank" rel="noreferrer" id="work-title" class="flex gap-2">
			<div>{name}</div>
			<i class="bi bi-arrow-up-right" />
		</a>
		<div id="work-desc" class="text-neutral-400">
			{desc}
		</div>
		<div id="work-stacks" class="text-neutral-500">
			{stacks}
		</div>
	</div>
</div>
