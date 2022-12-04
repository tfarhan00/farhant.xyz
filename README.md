# farhant.xyz
&#128126; Personal website built with SvelteKit, TailwindCSS, & Storyblok.

## Prerequisites
- Most of API here require a key or else it will throw up some error
- This website is not meant for template, but you can use this as your website base anyway
- I'm not configure this website to able to turn off all features in one place
- You might need to delete all files inside "/journal" directory in (app) routes, and replace it with blank page for starter
- Storyblok require you to setup your own schema, so you have to build your own routes/components from ground up based on your schema
- Spotify also require you to have an API key, disable SpotifyPlayer inside /routes/(other)/about/+page.svelte <br> and delete the +page.js

## How to get the API to works
- Spotify Setup : [Read this](https://dev.to/theodorusclarence/how-to-show-now-playing-in-spotify-with-next-js-15h5)
- Storyblok Setup : [Read this](https://www.storyblok.com/tp/add-a-headless-cms-to-svelte-in-5-minutes)
- Email.js Setup: [Read this](https://www.emailjs.com/docs/sdk/installation/)
## Setup

```bash
- git clone this-repo
- cd farhant-xyz
- pnpm install
# this automatically open a browser page, you can turn it off by setting the httpsState to false in vite.config.js
- pnpm run dev 
```

## Performance Snapshot
![Lighthouse](https://res.cloudinary.com/dd9nhl1mn/image/upload/v1670154145/lighthouse100_nzykza.jpg)

