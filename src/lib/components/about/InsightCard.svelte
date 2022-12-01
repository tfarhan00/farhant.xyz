<script>
	import emailjs from '@emailjs/browser';
	import { Circle } from 'svelte-loading-spinners';
	import { toaster } from '$lib/stores/toaster';
	import ToastBox from '$lib/components/misc/ToastBox.svelte';
	import { onMount } from 'svelte';

	let emailReg = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/;

	/** @type {any}*/
	$: finalState = {
		from_name: '',
		to_name: '',
		message: '',
		reply_to: ''
	};

	/** @type {string}*/
	let switcher = 'from_name';
	let loadingSend = false;

	const confirmEmail = () => {
		if (finalState['from_name'] !== '' && emailReg.test(finalState['from_name'])) {
			switcher = 'message';
		} else {
			toaster.show(`Not an email format &#128533;`, 2000, true);
		}
	};

	/** @param {any} e*/
	const sendMessage = async (e) => {
		e.preventDefault();
		loadingSend = true;
		await emailjs
			.send(
				import.meta.env.VITE_EMAIL_SERVICE_ID,
				import.meta.env.VITE_EMAIL_TEMPLATE_ID,
				finalState,
				import.meta.env.VITE_EMAIL_PUBLIC_KEY
			)
			.then(() => {
				finalState = {
					from_name: '',
					to_name: '',
					message: '',
					reply_to: ''
				};
				switcher = 'from_name';
				console.log('SUCCESS!');
				toaster.show('Message has been sent! &#128516;', 4000, true);
				loadingSend = false;
			})
			.catch(() => {
				console.log('FAILED...');
				toaster.show('Failed to send message, please try again later &#129396;</div>', 2000, true);
				loadingSend = false;
			});
	};

	onMount(() => console.log(import.meta.env.VITE_EMAIL_PUBLIC_KEY));
</script>

<div
	id="insight-section"
	class="relative w-full p-6 flex flex-col gap-6 items-center bg-black border border-neutral-800 rounded-2xl"
>
	<div class="w-full flex flex-col text-sm gap-2">
		<p class="text-white">
			Hi There, I'm currently working as a junior frontend developer in a company, if you have
			something in mind, just send me some message.
		</p>
		<p class="text-neutral-400">Just Now</p>
	</div>
	<div id="input-insight" class="w-full flex items-center gap-2">
		<div
			id="send-message"
			class="w-full relative flex items-center justify-between gap-3 px-4 py-3 bg-black border border-neutral-800 text-gray-900 text-xs rounded-lg"
		>
			<div class="h-full grow">
				<input
					type="text"
					id="input-group-1"
					class="text-white bg-transparent outline-none w-full h-full"
					placeholder={switcher === 'from_name' ? 'Your Email' : 'Write a message'}
					bind:value={finalState[switcher]}
				/>
			</div>
			{#if loadingSend}
				<div>
					<Circle size="15" color="#9333EA" unit="px" duration="1s" />
				</div>
			{:else}
				<button
					on:click={switcher === 'from_name' ? confirmEmail : sendMessage}
					class="flex items-center gap-2 text-purple-600 hover:gap-3 hover:text-neutral-400 transition-all duration-300"
				>
					<p>{switcher === 'from_name' ? 'Confirm' : 'Send'}</p>
					<div><i class="bi bi-arrow-right" /></div>
				</button>
			{/if}
		</div>
	</div>
</div>

<!-- A LONELY TOAST :( -->
<ToastBox />
