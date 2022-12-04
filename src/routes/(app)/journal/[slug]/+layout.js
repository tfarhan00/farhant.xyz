import { apiPlugin, storyblokInit, useStoryblokApi } from '@storyblok/svelte';
export const prerender = true;

export async function load() {
	storyblokInit({
		// @ts-ignore
		accessToken: import.meta.env.VITE_STORYBLOK_TOKEN,
		use: [apiPlugin]
	});

	const storyblokApi = await useStoryblokApi();

	return {
		storyblokApi: storyblokApi
	};
}
