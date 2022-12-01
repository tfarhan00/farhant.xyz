<script>
	import MainContainer from '$lib/components/MainContainer.svelte';
	import { worksData } from '$lib/data/works.js';
</script>

<main>
	<MainContainer payload={worksData} />
</main>
