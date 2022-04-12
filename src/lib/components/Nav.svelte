<script>
	import ConnectWallet from './ConnectWallet.svelte';
	import Timer from './Timer.svelte';
</script>

<div class="p-4 lg:p-6 bg-white flex justify-between">
	<div class="hidden md:flex lg:w-1/3">
		<Timer />
	</div>
	<div class="flex justify-between mr-10 lg:mr-0 w-full max-w-xs items-center text-xs lg:text-base font-semibold">
		<a href="/">Art</a>
		<a href="/">
			<img src="/img/icons/twitter.svg" alt="Twitter link" />
		</a>
		<a href="/">
			<img src="/img/icons/discord.svg" alt="Discord link" />
		</a>
		<a href="/">Dev</a>
	</div>
	<div class="lg:w-1/3 flex flex-none justify-end">
		<ConnectWallet />
	</div>
</div>
