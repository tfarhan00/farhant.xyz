import { sveltekit } from '@sveltejs/kit/vite';
import mkcert from 'vite-plugin-mkcert';

const httpsState = true;

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), mkcert()],
	server: {
		https: httpsState,
		open: httpsState && 'https://localhost:5173'
	}
};

export default config;
