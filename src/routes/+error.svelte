<script>
	import { page } from '$app/stores';
</script>

<div class="w-full h-[100vh] flex flex-col items-center text-white justify-center">
	<div>{$page.status}</div>
	<div>{$page.error.message}</div>
</div>
