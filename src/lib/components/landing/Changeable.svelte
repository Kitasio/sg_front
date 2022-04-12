<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/env';


	let pics = [];

	const fetchPics = async () => {
		if (browser && window.innerWidth > 1023) {
			const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=200`);
			pics = await res.json();
			pics = await pics;
		} else {
			const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=64`);
			pics = await res.json();
			pics = await pics;
		}

		gsap.from('.stag', {
			opacity: 0,
			y: 10,
			delay: 1,
			stagger: {
				each: 0.01,
				from: 'random',
				grid: 'auto'
			}
		});
	};
	onMount(async () => {
		gsap.registerPlugin(ScrollTrigger);
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '#changeable'
			}
		});

		tl.call(fetchPics).from('.stag', { duration: 1 });
	});
</script>

<div id="changeable" class="grid grid-cols-12 mt-28">
	<h2 class="subheading col-start-5 col-span-full sm:col-start-1 sm:pl-4 lg:col-start-4 lg:ml-16">
		10001<br class="sm:hidden" /> Changeable NFT’s
	</h2>
</div>

<div class="grid grid-cols-12 mt-9">
	<div
		class="pl-4 col-span-full sm:col-span-6 sm:col-start-7 sm:row-start-1 lg:col-span-4 lg:col-start-9 lg:pl-6 xl:pl-16"
	>
		<p>
			It's not just simple NFT’s.<br /> These are living paintings that will colorfully<br /> develop
			according to a special artistic plot.
		</p>
		<p class="mt-5">
			One <span class="text-[#5800FF]">art token</span> = a living painting with many<br /> states inside.
		</p>
	</div>

	<div class="lg:hidden col-span-full mt-14 flex flex-wrap sm:col-span-6 sm:mt-0 lg:col-span-8">
		{#each pics.slice(0, 64) as p}
			<img class="stag w-[12.5%] lg:w-[5%] aspect-square" src={p.thumbnailUrl} alt={p.title} />
		{/each}
	</div>
	<div class="hidden col-span-full mt-14 lg:flex flex-wrap sm:col-span-6 sm:mt-0 lg:col-span-8">
		{#each pics as p}
			<img class="stag w-[12.5%] lg:w-[5%] aspect-square" src={p.thumbnailUrl} alt={p.title} />
		{/each}
	</div>
</div>
