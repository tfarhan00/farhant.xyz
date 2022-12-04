<script>
	import { onMount } from 'svelte';
	import { useStoryblokBridge } from '@storyblok/svelte';
	import MarkdownTo from '$lib/components/misc/MarkdownTo.svelte';

	/** @type {any}*/
	export let data;
	const { story } = data;
	let item = story.data.story;

	onMount(() => {
		useStoryblokBridge(item.id, (newStory) => (item = newStory));
	});
</script>

<svelte:head>
	<title>Farhant - {item.content.journal_title}</title>
	<meta name="title" content={item.content.journal_title} />
	<meta
		name="description"
		content={item.content.journal_desc}
	/>
	<meta
		name="keywords"
		content="developer, frontend, react, svelte, blog, designer, javascript, typescript, nextjs, cms, software, engineer, webdevelopment, programming, code"
	/>
	<meta name="robots" content="index, follow" />
</svelte:head>

{#if item}
	<div class="text-white w-full min-h-[100vh] flex flex-col items-center gap-2 p-6">
		<div id="journal-root" class="w-full md:w-[70%] lg:w-[60%] xl:w-[50%]">
			<div class="w-full h-64 overflow-hidden rounded-xl">
				<img
					src={item.content.journal_hero.filename}
					alt="pict"
					class="w-full h-full object-cover"
				/>
			</div>
			<div id="journal-body" class="mt-8 w-full flex flex-col gap-4 items-start">
				<div id="journal-title" class="flex flex-col gap-1">
					<div class="text-3xl font-semibold">
						{item.content.journal_title}
					</div>
					<div class="text-sm text-neutral-400">
						{item.content.journal_date}
					</div>
				</div>
				<div class="text-sm">
					<MarkdownTo markdown={item.content.journal_body} />
				</div>
			</div>
		</div>
	</div>
{:else}
	<div>No data</div>
{/if}
