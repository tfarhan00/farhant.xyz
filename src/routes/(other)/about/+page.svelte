<script>
	import ProfileCard from '$lib/components/about/ProfileCard.svelte';
	import InsightCard from '$lib/components/about/InsightCard.svelte';
	import AboutCard from '$lib/components/about/AboutCard.svelte';
	import SpotifyPlayer from '$lib/components/misc/SpotifyPlayer.svelte';

	/** @type {import('./$types').PageData}*/
	export let data;
</script>

{#if data}
	<div
		id="container-about-root"
		class="relative w-full min-h-[100vh] flex flex-col items-center text-white"
	>
		<div
			id="container-about"
			class="my-8 w-full flex flex-col gap-6 p-6 md:p-0 sm:w-[80%] md:w-[70%] lg:w-[50%] xl:w-[40%]"
		>
			<ProfileCard />
			<SpotifyPlayer song={data} />
			<InsightCard />
			<AboutCard />
		</div>
	</div>
{/if}
