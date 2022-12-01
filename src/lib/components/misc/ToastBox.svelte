<script>
	import { toaster } from '$lib/stores/toaster';
	import { flip } from 'svelte/animate';
	import { fly } from 'svelte/transition';
</script>

<div
	class="fixed top-6 left-[50%] -translate-x-[50%] flex flex-col items-center justify-start gap-4 z-[99]"
>
	{#each $toaster as toast (toast.id)}
		<div
			animate:flip
			transition:fly={{ y: -30 }}
			class="rounded-lg text-sm bg-black border border-neutral-800 flex-initial text-white px-4 py-2"
		>
			{#if toast.isRich}
				<div>
					{@html toast.text}
				</div>
			{:else}
				<div>
					{toast.text}
				</div>
			{/if}
		</div>
	{/each}
</div>
