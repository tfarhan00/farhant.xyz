<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
</script>

<svelte:head>
	<title>Farhant</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
		rel="preload"
                as="style"
	/>
        <link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
		rel="stylesheet"
	/>
	<link
		rel="preload"
		href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css"
                as="style"
	/>
        <link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css"
	/>
	<meta name="title" content="Tengku Farhan" />
	<meta
		name="description"
		content="Tengku Farhan is an eclectic web developer with an interest in React, NextJS, and TailwindCSS."
	/>
	<meta
		name="keywords"
		content="developer, frontend, react, svelte, blog, designer, javascript, typescript, nextjs, cms, software, engineer, webdevelopment, programming, code"
	/>
	<meta name="robots" content="index, follow" />
	<meta name="language" content="English" />
	<meta name="revisit-after" content="2 days" />
	<meta name="author" content="Tengku Farhan" />
</svelte:head>

<div id="root-contain" class="w-full bg-black antialiased overflow-hidden">
	<Header />
	<slot />
</div>
