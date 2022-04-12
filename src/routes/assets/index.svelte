<script>
	import { defaultEvmStores, selectedAccount, connected, chainId } from 'svelte-web3';
	import { walletOfOwner } from '$lib/functions/sgFuncs';
	let userNFTS = [];

	const enableBrowser = () => defaultEvmStores.setProvider();

	const getNFTS = async (address) => {
		let ids = await walletOfOwner(address);
		for (let i = 0; i < ids.length; i++) {
			const id = ids[i];
			let res = await fetch(`assets/get-json-${id}`);
			res = res.ok && (await res.json());
			const metadata = res['metadata'];
			userNFTS = [...userNFTS, metadata];
		}
	};
</script>

<div class="p-10 bg-slate-900 text-slate-100 min-h-screen">
	<div on:click={enableBrowser} class="cursor-pointer text-3xl">Connect</div>

	{#if !$connected}
		<p>My application is not yet connected</p>
	{:else}
		<p>Connected to chain with id {$chainId}</p>
		<div>{$selectedAccount}</div>

		<button on:click={() => getNFTS($selectedAccount)}>log nfts</button>
		<div class="flex flex-wrap gap-20">
			{#if userNFTS}
				{#each userNFTS as data, index (index)}
					<img src={data['image']} alt="" />
                    <div>{data['edition']}</div>
				{/each}
			{/if}
		</div>
	{/if}
</div>
