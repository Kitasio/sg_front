<script>
	import { onMount } from 'svelte';

	let images = [
		// '/img/elements/Stage 1/',
		'/img/elements/Stage 2/',
		'/img/elements/Stage 3/',
		'/img/elements/Stage 4/'
	];

	let elements = [1, 2, 3, 4, 5, 6, 7, 8];

	let mobElements = [1, 2, 3];

	let w;

	onMount(() => {
		// const tl = gsap.timeline();

		// tl
		// 	.to('#bg-1', { duration: 5, yPercent: -15, ease: 'none' })
		// 	.from('.stag1', { opacity: 0, stagger: 0.5, scale: 1.05, ease: 'in' }, '-=5')

		// 	.from('#bg-2', { duration: 2, yPercent: 100, ease: 'power4.out' })

		// 	.to('#bg-2', { duration: 5, y: -150, ease: 'none'}, '-=1')
		// 	.from('.stag2', { opacity: 0, stagger: 0.5, scale: 1.05, ease: 'in' }, '-=5')

		// 	.from('#bg-3', { duration: 2, yPercent: 100, ease: 'power4.out' })

		// 	.to('#bg-3', { duration: 5, y: -150, ease: 'none' }, '-=1')
		// 	.from('.stag3', { opacity: 0, stagger: 0.5, scale: 1.05, ease: 'in' }, '-=5')

		//     .from('#bg-4', { duration: 2, yPercent: 100, ease: 'power4.out' })

		// 	.to('#bg-4', { duration: 5, y: -150, ease: 'none' }, '-=1')
		// 	.from('.stag4', { opacity: 0, stagger: 0.5, scale: 1.05, ease: 'in' }, '-=5')

		if (w < 1024) {
			setTimeout(() => {
				document.querySelectorAll('img[data-src]').forEach((img) => {
					img.setAttribute('src', img.getAttribute('data-src'));
					img.removeAttribute('data-src');
				});
			}, 3000);

			const tl = gsap.timeline({ repeat: 2 });
			tl.to('#bg-1', { duration: 1, opacity: 1, ease: 'expo.out' })
				.set('#bg-4', { opacity: 0 })
				.set('.mstag4', { opacity: 0 })

				.to('#bg-1', { duration: 5, yPercent: -12, ease: 'none' }, '-=1')
				.to('.mstag1', { opacity: 1, stagger: 1.4, delay: 1, ease: 'in' }, '-=5')

				.to('#bg-2', { duration: 1, opacity: 1, ease: 'expo.out' })
				.set('#bg-1', { opacity: 0 })
				.set('.mstag1', { opacity: 0 })

				.to('#bg-2', { duration: 5, yPercent: -12, ease: 'none' }, '-=1')
				.to('.mstag2', { opacity: 1, stagger: 1.4, delay: 1, ease: 'in' }, '-=5')

				.to('#bg-3', { duration: 1, opacity: 1, ease: 'expo.out' })
				.set('#bg-2', { opacity: 0 })
				.set('.mstag2', { opacity: 0 })

				.to('#bg-3', { duration: 5, yPercent: -12, ease: 'none' }, '-=1')
				.to('.mstag3', { opacity: 1, stagger: 1.4, delay: 1, ease: 'in' }, '-=5')

				.to('#bg-4', { duration: 1, opacity: 1, ease: 'expo.out' })
				.set('#bg-3', { opacity: 0 })
				.set('.mstag3', { opacity: 0 })

				.to('#bg-4', { duration: 5, yPercent: -12, ease: 'none' }, '-=1')
				.to('.mstag4', { opacity: 1, stagger: 1.4, delay: 1, ease: 'in' }, '-=5');
		} else {
			setTimeout(() => {
				document.querySelectorAll('img[data-src]').forEach((img) => {
					img.setAttribute('src', img.getAttribute('data-src'));
					img.removeAttribute('data-src');
				});
			}, 5000);

			const tl = gsap.timeline({ repeat: 2 });
			tl.to('#bg-1', { duration: 8, yPercent: -15, ease: 'none' })
				.from('.stag1', { opacity: 0, stagger: 0.7, scale: 1.05, ease: 'in' }, '-=8')

				.from('#bg-2', { duration: 2, opacity: 0, ease: 'expo.out' }, '-=2')

				.to('#bg-2', { duration: 8, yPercent: -15, ease: 'none' }, '-=2')
				.from('.stag2', { opacity: 0, stagger: 0.7, scale: 1.05, ease: 'in' }, '-=8')

				.from('#bg-3', { duration: 2, opacity: 0, ease: 'expo.out' }, '-=2')

				.to('#bg-3', { duration: 8, yPercent: -15, ease: 'none' }, '-=2')
				.from('.stag3', { opacity: 0, stagger: 0.7, scale: 1.05, ease: 'in' }, '-=8')

				.from('#bg-4', { duration: 2, opacity: 0, ease: 'expo.out' }, '-=2')

				.to('#bg-4', { duration: 8, yPercent: -15, ease: 'none' }, '-=2')
				.from('.stag4', { opacity: 0, stagger: 0.7, scale: 1.05, ease: 'in' }, '-=8');
		}
	});
</script>

<svelte:window bind:innerWidth={w} />

<div class="lg:hidden h-[86vh] relative overflow-hidden">
	<img
		id="bg-1"
		loading="lazy"
		class="absolute w-full h-screen opacity-0"
		src="/img/bg/mobile-bg-1.jpg"
		alt=""
	/>
	{#each mobElements as el}
		<img
			class="absolute mstag1 opacity-0"
			id="mel1-{el}"
			src="https://ik.imagekit.io/soulgenesis/showcase/mst1/el{el}.png"
			alt="element"
		/>
	{/each}

	{#each images as i, index (index)}
		<img
			id="bg-{index + 2}"
			loading="lazy"
			class="absolute w-full h-screen opacity-0"
			data-src="/img/bg/mobile-bg-{index + 2}.jpg"
			alt=""
		/>
		{#each mobElements as el}
			<img
				class="absolute mstag{index + 2} opacity-0"
				id="mel{index + 2}-{el}"
				data-src="https://ik.imagekit.io/soulgenesis/showcase/mst{index + 2}/el{el}.png"
				alt="element"
			/>
		{/each}
	{/each}

	<div class="text-white">
		<p class="text-center mix-blend-difference lg:text-3xl lg:text-center lg:mt-2">
			Immersive NFT project
		</p>
		<div class="flex h-[75vh] items-center justify-center">
			<div class="flex items-center space-x-3 justify-center">
				<img class="w-[12vw] mb-2 lg:mb-4 z-10 lg:w-[10vw]" src="/img/icons/orb.png" alt="" />
				<h1
					class="font-vertigo text-[14.5vw] lg:text-[15vw] whitespace-nowrap mix-blend-difference"
				>
					Soul genesis
				</h1>
			</div>
		</div>
	</div>
</div>
<div class="hidden h-[82vh] lg:flex relative overflow-hidden">
	<img
		id="bg-1"
		loading="lazy"
		class="absolute w-full h-screen"
		src="https://ik.imagekit.io/soulgenesis/showcase/dbg-1.jpg"
		alt=""
	/>
	{#each elements as el}
		<img
			class="absolute stag1"
			id="el1-{el}"
			src="https://ik.imagekit.io/soulgenesis/showcase/st1/el{el}.png"
			alt="element"
		/>
	{/each}

	{#each images as i, index (index)}
		<img
			id="bg-{index + 2}"
			loading="lazy"
			class="absolute w-full h-screen"
			data-src="https://ik.imagekit.io/soulgenesis/showcase/dbg-{index + 2}.jpg"
			alt=""
		/>
		{#each elements as el}
			<!-- <source srcset="{i}el{el}.webp" /> -->
			<img
				class="absolute stag{index + 2}"
				id="el{index + 2}-{el}"
				data-src="{i}el{el}.png"
				alt="element"
			/>
		{/each}
	{/each}

	<div class="text-white p-4">
		<p class="text-right -mb-3 mix-blend-difference lg:text-3xl lg:text-center lg:mt-2">
			Immersive NFT project
		</p>
		<div class="flex items-center space-x-3 justify-center lg:mt-32 lg:space-x-14">
			<img class="w-[12vw] mb-2 lg:mb-4 z-10 lg:w-[10vw]" src="/img/icons/orb.png" alt="" />
			<h1 class="font-vertigo text-[14.5vw] lg:text-[15vw] whitespace-nowrap mix-blend-difference">
				Soul genesis
			</h1>
		</div>
	</div>
</div>

<style>
	#mel1-1 {
		top: 15%;
		left: 5%;
		width: 32%;
	}
	#mel1-2 {
		top: 20%;
		right: 2%;
		width: 50%;
	}
	#mel1-3 {
		bottom: 10%;
		left: 0;
		width: 20%;
	}

	#mel2-1 {
		top: 10%;
		left: 5%;
		width: 38%;
	}
	#mel2-2 {
		top: 15%;
		right: 2%;
		width: 58%;
	}
	#mel2-3 {
		bottom: 8%;
		left: 0;
		width: 28%;
	}

	#mel3-1 {
		top: 10%;
		left: 5%;
		width: 42%;
	}
	#mel3-2 {
		top: 15%;
		right: 2%;
		width: 60%;
	}
	#mel3-3 {
		bottom: 7%;
		left: 0;
		width: 30%;
	}

	#mel4-1 {
		top: 5%;
		left: 0%;
		width: 65%;
	}
	#mel4-2 {
		top: 7%;
		right: 0;
		width: 65%;
	}
	#mel4-3 {
		bottom: 5%;
		left: 0;
		width: 30%;
	}
	@media (min-width: 1024px) {
		/* STAGE 1 */
		#el1-1 {
			top: 10%;
			left: 35%;
			width: 10%;
		}
		#el1-2 {
			top: 7%;
			right: 2%;
			width: 15%;
		}
		#el1-3 {
			bottom: 0;
			right: 2%;
			width: 10%;
		}
		#el1-4 {
			top: 5%;
			left: 0%;
			width: 7%;
		}
		#el1-5 {
			bottom: 0;
			left: 23%;
			width: 13%;
		}
		#el1-6 {
			bottom: 3%;
			left: 0;
			width: 13%;
		}
		#el1-7 {
			bottom: 0;
			left: 60%;
			width: 12%;
		}
		#el1-8 {
			top: 0;
			right: 20%;
			width: 10%;
		}

		/* STAGE 2 */
		#el2-1 {
			top: 9%;
			right: 6%;
			width: 15%;
		}
		#el2-2 {
			bottom: 0;
			left: 25%;
			width: 17%;
		}
		#el2-3 {
			bottom: 0;
			right: 0;
			width: 10%;
		}
		#el2-4 {
			top: 0;
			left: 0;
			width: 18%;
		}
		#el2-5 {
			top: 5%;
			left: 35%;
			width: 12%;
		}
		#el2-6 {
			bottom: 0;
			left: 0;
			width: 17%;
		}
		#el2-7 {
			top: 0;
			right: 20%;
			width: 18%;
		}
		#el2-8 {
			bottom: 0;
			left: 60%;
			width: 15%;
		}

		/* STAGE 3 */
		#el3-1 {
			bottom: 0;
			left: 27%;
			width: 20%;
		}
		#el3-2 {
			top: 5%;
			right: 2%;
			width: 17%;
		}
		#el3-3 {
			bottom: 0;
			right: 0;
			width: 10%;
		}
		#el3-4 {
			top: 0;
			left: 0;
			width: 25%;
		}
		#el3-5 {
			bottom: 0;
			left: 0;
			width: 22%;
		}
		#el3-6 {
			top: 0;
			right: 13%;
			width: 25%;
		}
		#el3-7 {
			bottom: 0;
			right: 23%;
			width: 18%;
		}
		#el3-8 {
			top: 2%;
			left: 35%;
			width: 17%;
		}

		/* STAGE 4 */
		#el4-1 {
			bottom: 0;
			left: 0;
			width: 25%;
		}
		#el4-2 {
			bottom: 0;
			left: 27%;
			width: 32%;
		}
		#el4-3 {
			top: 0;
			right: 13%;
			width: 29%;
		}
		#el4-4 {
			top: 0;
			right: 0;
			width: 15%;
		}
		#el4-5 {
			bottom: 0;
			right: 0;
			width: 12%;
		}
		#el4-6 {
			top: 0;
			left: 0;
			width: 25%;
		}
		#el4-7 {
			bottom: 0;
			right: 15%;
			width: 24%;
		}
		#el4-8 {
			top: 8%;
			left: 36%;
			width: 45%;
		}
	}
</style>
