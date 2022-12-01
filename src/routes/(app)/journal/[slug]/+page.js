/** @param {any} params*/

export async function load({ params, parent }) {
	const { storyblokApi } = await parent();
	const singleJournal = await storyblokApi.get(`cdn/stories/journal/${params.slug}`, {
		version: 'published'
	});

	return {
		story: singleJournal
	};
}
