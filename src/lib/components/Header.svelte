<script>
	import { createPopperActions } from 'svelte-popperjs';
	import * as URL from '$lib/data/socialurl';
	import { page } from '$app/stores';

	const linkProps = {
		rel: 'noreferrer',
		target: '_blank'
	};

	/** @type {boolean}*/
	let icon1 = false;
	/** @type {boolean}*/
	let icon2 = false;
	/** @type {boolean}*/
	let icon3 = false;
	/** @type {boolean}*/
	let icon4 = false;

	const [popperRef1, popperContent1] = createPopperActions({
		placement: 'bottom',
		strategy: 'absolute'
	});

	const [popperRef2, popperContent2] = createPopperActions({
		placement: 'bottom',
		strategy: 'absolute'
	});

	const [popperRef3, popperContent3] = createPopperActions({
		placement: 'bottom',
		strategy: 'absolute'
	});

	const [popperRef4, popperContent4] = createPopperActions({
		placement: 'bottom',
		strategy: 'absolute'
	});

	const extraOpts = {
		modifiers: [{ name: 'offset', options: { offset: [0, 8] } }]
	};
</script>

<nav class="w-full flex items-center justify-between h-16 relative px-6">
	{#if $page.url.pathname !== '/' && $page.url.pathname !== '/journal'}
		<a
			href="/"
			class="text-normal flex items-center text-purple-600 hover:gap-3 hover:text-neutral-400 transition-all duration-300"
		>
			<div><i class="bi bi-arrow-left" /></div>
		</a>
	{/if}
	<div
		class="absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] flex items-center gap-4 text-neutral-500 text-normal"
	>
		<button
			id="icon-1"
			use:popperRef1
			on:mouseenter={() => (icon1 = true)}
			on:mouseleave={() => (icon1 = false)}
		>
			<a id="link-1" {...linkProps} href={URL.LINKED_IN}>
				<i class="bi bi-linkedin" />
			</a>
			{#if icon1}
				<div
					id="tooltip"
					use:popperContent1={extraOpts}
					class="bg-neutral-900 px-4 py-2 text-xs rounded-md"
				>
					LinkedIn
				</div>
			{/if}
		</button>
		<button
			id="icon-2"
			use:popperRef2
			on:mouseenter={() => (icon2 = true)}
			on:mouseleave={() => (icon2 = false)}
		>
			<a id="link-2" {...linkProps} href={URL.INSTAGRAM}>
				<i class="bi bi-instagram" />
			</a>
			{#if icon2}
				<div
					id="tooltip"
					use:popperContent2={extraOpts}
					class="bg-neutral-900 px-4 py-2 text-xs rounded-md"
				>
					Instagram
				</div>
			{/if}
		</button>
		<button
			id="icon-3"
			use:popperRef3
			on:mouseenter={() => (icon3 = true)}
			on:mouseleave={() => (icon3 = false)}
		>
			<a id="link-3" {...linkProps} href={URL.TWITTER}>
				<i class="bi bi-twitter" />
			</a>
			{#if icon3}
				<div
					id="tooltip"
					use:popperContent3={extraOpts}
					class="bg-neutral-900 px-4 py-2 text-xs rounded-md"
				>
					Twitter
				</div>
			{/if}
		</button>
		<button
			id="icon-4"
			use:popperRef4
			on:mouseenter={() => (icon4 = true)}
			on:mouseleave={() => (icon4 = false)}
		>
			<a id="link-4" {...linkProps} href={URL.GITHUB}>
				<i class="bi bi-github" />
			</a>
			{#if icon4}
				<div
					id="tooltip"
					use:popperContent4={extraOpts}
					class="bg-neutral-900 px-4 py-2 text-xs rounded-md"
				>
					Github
				</div>
			{/if}
		</button>
	</div>
	<div>
		{' '}
	</div>
</nav>
