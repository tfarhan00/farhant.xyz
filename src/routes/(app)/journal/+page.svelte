<script>
	import PostContainer from '$lib/components/journal/PostContainer.svelte';
	import PleaseWait from '$lib/components/misc/PleaseWait.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	let { story } = data;
	let item = story.data;
</script>

<div>
	{#if item.stories && item.stories.length !== 0}
		<div class="text-white">
			<PostContainer payload={item.stories} />
		</div>
	{:else if item.stories.length === 0}
		<PleaseWait />
	{:else}
		<div class="text-white">No data</div>
	{/if}
</div>
