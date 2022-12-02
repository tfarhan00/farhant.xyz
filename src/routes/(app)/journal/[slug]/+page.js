/** @param {any} params*/

export async function load({ params, parent }) {
	const { storyblokApi } = await parent();
	const isDevMode = import.meta.env.MODE === 'development';

	const singleJournal = await storyblokApi.get(`cdn/stories/journal/${params.slug}`, {
		version: isDevMode ? 'draft' : 'published'
	});

	return {
		story: singleJournal
	};
}
