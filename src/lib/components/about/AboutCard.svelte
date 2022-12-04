<script>
	import ExpCard from './ExpCard.svelte';
	import { expList } from '$lib/data/experience';
	import { stacksList } from '$lib/data/stacks';
</script>

<div id="about-container" class="w-full flex flex-col gap-4">
	<div id="about" class="w-full flex flex-col gap-3">
		<h1>About</h1>
		<div class="text-neutral-400 text-sm">
			I'm a relatively newcomer in the programming world, I explore a vast enough amount of
			knowledge about web development and software engineering, and some topics that I really like
			to talk about are music, cryptocurrency, movies, food, and of course programming. Currently, I
			am deeply interested in low-level programming, Rust is on my schedule.
		</div>
	</div>
	<div id="Work Experience" class="w-full flex flex-col gap-3">
		<h1>Work Experience</h1>
		<div id="work-list" class="w-full flex flex-col text-sm gap-6">
			{#each expList as exp (exp.name)}
				<ExpCard
					time={exp.time}
					link={exp.link}
					name={exp.name}
					desc={exp.desc}
					stacks={exp.stacks}
				/>
			{/each}
		</div>
	</div>
	<div id="stacks" class="w-full flex flex-col gap-3">
		<h1>Stacks</h1>
		<div id="stack-list" class="w-full flex flex-col text-sm gap-2">
			{#each stacksList as stack (stack.name)}
				<a
					href={stack.link}
					target="_blank"
					rel="noreferrer"
					class="text-neutral-400 flex items-center gap-1"
				>
					<div>{stack.name}</div>
					<div><i class="bi bi-arrow-up-right text-xs" /></div>
				</a>
			{/each}
		</div>
	</div>
</div>
