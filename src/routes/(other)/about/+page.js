/** @param {any} fetch*/
export async function load({ fetch }) {
	const res = await fetch('/api/spotify');
	const data = await res.json();

	return {
		data: data
	};
}
