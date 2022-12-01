<script>
	import SvelteLogo from '$lib/icons/SvelteLogo.svelte';
	import { PROFILE_PICT_2 } from '$lib/data/socialurl';
	import { toaster } from '$lib/stores/toaster';
	import ToastBox from '$lib/components/misc/ToastBox.svelte';

	let emailValue = '';
	let emailReg = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/;

	const handleSubscribe = async () => {
		if (emailValue !== '' && emailReg.test(emailValue)) {
			toaster.show('Newsletter is not available yet, still on making &#128512;', 2000, true);
		} else {
			toaster.show('Not an email format &#128533;', 2000, true);
		}
	};
</script>

<div class="my-8 w-full flex flex-col items-center gap-4">
	<div class="w-full h-[22rem] border-t border-b border-neutral-800">
		<div class="w-full h-full flex items-center justify-center">
			<div
				id="subscribe-card"
				class="w-full p-4 sm:p-6 sm:w-[26rem] flex flex-col items-center gap-4"
			>
				<div class="w-12 h-12 rounded-full overflow-hidden">
					<img src={PROFILE_PICT_2} alt="pict" class="w-full h-full object-cover" />
				</div>
				<div class="text-neutral-400 text-center text-sm">
					Subscribe to follow my latest insight about programming, web development, life,
					cryptocurrency, etc. If you like some of my works, kindly support me with some cup of
					coffee via <a href="https://ko-fi.com/tfarhan" class="text-white hover:underline"
						>Ko-fi ☕</a
					> it would so wholesome ✨
				</div>
				<div
					id="subscribe-email"
					class="relative w-full flex items-center justify-between px-4 py-3 bg-neutral-900 border border-neutral-800 text-gray-900 text-sm rounded-lg"
				>
					<div class="flex items-center gap-2">
						<div>
							<svg
								aria-hidden="true"
								class="w-5 h-5 text-gray-500 dark:text-gray-400"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><path
									d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
								/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg
							>
						</div>
						<input
							type="text"
							id="input-group-1"
							class="text-white bg-transparent outline-none w-full"
							bind:value={emailValue}
							placeholder="name@domain.com"
						/>
					</div>
					<button
						on:click={handleSubscribe}
						class="flex items-center gap-2 text-purple-600 hover:gap-3 hover:text-neutral-400 transition-all duration-300"
					>
						<p>Subscribe</p>
						<div><i class="bi bi-arrow-right" /></div>
					</button>
				</div>
			</div>
		</div>
	</div>
	<div class="w-full flex items-center justify-between text-neutral-400 text-sm">
		<div>tfarhan &copy; 2022</div>
		<div class="flex items-center gap-1">
			<p>Made with SvelteKit</p>
			<SvelteLogo />
		</div>
	</div>
</div>

<!-- A LONELY TOASTBOX -->
<ToastBox />
