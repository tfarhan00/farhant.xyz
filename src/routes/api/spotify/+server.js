import { json } from '@sveltejs/kit';
import { SPOTIFY_ID, SPOTIFY_SECRET, SPOTIFY_TOKEN } from '$env/static/private';


/** @type {import('./$types').RequestHandler} */
export async function GET() {
	const res = await showNowPlaying();
	const result = await res.json();

	const wholeSong = {
		artist: result.items[0].track.artists[0].name,
		title: result.items[0].track.name,
		coverUrl: result.items[0].track.album.images[1].url,
		songUrl: result.items[0].track.external_urls.spotify,
		previewUrl: result.items[0].track.preview_url
	};

	return json({ song: wholeSong });
}

const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played`;
const AUTH_ENDPOINT = `https://accounts.spotify.com/api/token`;
const CLIENT_ID = import.meta.env.VITE_CLIENT_SPOTIFY_ID || SPOTIFY_ID;
const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SPOTIFY_SECRET || SPOTIFY_SECRET;
const REFRESH_TOKEN = import.meta.env.VITE_REFRESH_SPOTIFY_TOKEN || SPOTIFY_TOKEN;

const getAuthToken = async () => {
	const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');

	const queriedObj = new URLSearchParams({
		grant_type: 'refresh_token',
		refresh_token: REFRESH_TOKEN
	}).toString();

	const header = {
		Authorization: `Basic ${basic}`,
		'Content-Type': 'application/x-www-form-urlencoded'
	};

	const response = await fetch(AUTH_ENDPOINT, {
		method: 'POST',
		headers: header,
		body: queriedObj
	});
	return response.json();
};

const showNowPlaying = async () => {
	const { access_token } = await getAuthToken();

	return fetch(NOW_PLAYING_ENDPOINT, {
		headers: {
			Authorization: `Bearer ${access_token}`
		}
	});
};
