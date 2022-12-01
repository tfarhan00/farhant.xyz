<script>
	import { page } from '$app/stores';
</script>

<div
	class="w-full h-14 flex items-center gap-4 text-neutral-400 text-sm pb-2 mb-6 border-b border-neutral-800"
>
	<a href="/" class:onpath={$page.url.pathname === '/'}>Works</a>
	<div class="relative">
		<a href="/journal" class:onpath={$page.url.pathname === '/journal'}>Journal</a>
		<div class="w-[6px] h-[6px] absolute rounded-full bg-purple-600 top-0 -right-3">{' '}</div>
	</div>
</div>

<style>
	.onpath {
		@apply text-white;
	}
</style>
