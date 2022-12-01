/** @param {any} parent */

export async function load({ parent }) {
	const { storyblokApi } = await parent();

	const data = storyblokApi.get('cdn/stories', {
		version: 'published',
		starts_with: 'journal'
	});

	return {
		story: data
	};
}
