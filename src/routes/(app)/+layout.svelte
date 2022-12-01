<script>
	import Hero from '$lib/components/Hero.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import MainNavigation from '$lib/components/MainNavigation.svelte';
</script>

<svelte:head>
	<title>Farhant</title>
</svelte:head>

<div class="w-full min-h-[100vh] flex flex-col items-center">
	<div class="w-full md:w-[80%] p-6 md:p-0 flex flex-col items-center">
		<Hero />
		<MainNavigation />
		<slot />
		<Footer />
	</div>
</div>
