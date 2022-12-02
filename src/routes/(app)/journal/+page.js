/** @param {any} parent */

export async function load({ parent }) {
	const { storyblokApi } = await parent();
	const isDevMode = import.meta.env.MODE === 'development';

	const data = storyblokApi.get('cdn/stories', {
		version: isDevMode ? 'draft' : 'published',
		starts_with: 'journal'
	});

	return {
		story: data,
	};
}
