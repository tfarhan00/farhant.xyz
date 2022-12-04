import { sveltekit } from '@sveltejs/kit/vite';
import mkcert from 'vite-plugin-mkcert';

const httpsState = true;

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), mkcert()],
	server: {
		https: httpsState,
		open: httpsState && 'https://localhost:5173'
	},
	define: {
		'import.meta.env.VERCEL_ANALYTICS_ID': JSON.stringify(process.env.VERCEL_ANALYTICS_ID)
	}
};

export default config;
