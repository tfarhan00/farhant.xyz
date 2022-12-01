<script>
	import { Jumper } from 'svelte-loading-spinners';
	/** @type {any}*/
	export let song;
	const theSong = song.data.song;
</script>

<div class="w-full px-4 text-xs py-3 rounded-full bg-black border border-neutral-800">
	<div class="w-full h-full flex items-center justify-between gap-3">
		<div class="flex items-center gap-2 overflow-x-auto whitespace-nowrap hideScroll">
			<div class="">
				<Jumper size="30" color="#4ADE80" unit="px" duration="2s" />
			</div>
			<a
				href={theSong.songUrl}
				target="_blank"
				rel="noreferrer"
				class="flex items-center gap-1 hover:text-neutral-500 transition-all duration-300"
			>
				<div>
					{theSong.title}
				</div>
				<div>&bull;</div>
				<div>
					{theSong.artist}
				</div>
				<i class="bi bi-arrow-up-right" />
			</a>
		</div>
		<div class="shrink-0 w-8 h-8 flex items-center justify-center rounded-full overflow-hidden ">
			<img
				src={theSong.coverUrl}
				alt={theSong.title}
				class="w-full h-full object-cover animate-[spin_20s_linear_infinite]"
			/>
		</div>
	</div>
</div>
