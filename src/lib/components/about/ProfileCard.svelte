<script>
	import { PROFILE_PICT } from '$lib/data/socialurl';
</script>

<div id="intro-section" class="w-full flex justify-start items-center gap-4">
	<div id="my-picture" class="shrink-0 w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden">
		<img src={PROFILE_PICT} class="object-cover w-full h-full" alt="Just myself :)" />
	</div>
	<div id="my-desc" class="flex flex-col gap-1">
		<div class="font-medium text-lg">Tengku Farhan</div>
		<div class="text-neutral-400 text-sm font-medium">Frontend Developer</div>
		<div class="text-neutral-300 text-sm font-medium">
			I'm a go-getting yet super cautious person &#127939;&#128556;
		</div>
	</div>
</div>
