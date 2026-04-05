<script lang="ts">
	const eventCity = 'Sydney';
	const eventName = 'Horizons Crux';
	const venue = 'VENUE TBD';
	const hours = 35;

	let hourRequirement = hours + ' hours';

	let shownSection = $state('overview');
</script>

<svelte:head>
	<title>{eventName}</title>
</svelte:head>

<a href="https://hackclub.com/"
	><img
		style="position: absolute; top: 0; left: 10px; border: 0; width: 256px; z-index: 999;"
		src="https://assets.hackclub.com/flag-orpheus-top.svg"
		alt="Hack Club Flag"
	/></a
>

<div id="hero">
	<div id="title">
		<h2>Hack Club</h2>
		<h1>{eventName}</h1>
	</div>

	<p id="subtitle">{eventCity} | July 10 - 12, 2026</p>
	<p id="caption">Hackathons around the world. For high schoolers, by high schoolers.</p>

	<div class="down-arrow"></div>
</div>

<div id="body">
	<nav>
		<button
			onclick={() => {
				shownSection = 'overview';
			}}>Overview</button
		>
		<button
			onclick={() => {
				shownSection = 'qualify';
			}}>Qualifying</button
		>
	</nav>

	{#if shownSection === 'overview'}
		<div id="section">
			<h2>Overview: What is Horizons?</h2>
			<p>
				<a href="https://horizons.hackclub.com">Horizons</a> is a group of hackathons around the
				world. From July 10 to 12, join us in {eventCity} for
				{eventName}! <br />
				Horizons is organised by
				<a href="https://hackclub.com" referrerpolicy="no-referrer">Hack Club</a> (a 501(c)(3) nonprofit),
				by teenagers, for teenagers.
			</p>

			<p>
				Qualify for {eventName} by spending {hourRequirement} creating projects, and you'll get to join
				100+ likeminded teenagers in {eventCity} to create something amazing!
			</p>

			<p>
				Food, snacks, and travel will be fully funded, plus, there'll be some awesome swag there!
				Flight stipends will be avalible too. The hackathon is open to anyone between <b
					>13 and 18 years old</b
				>.
			</p>

			<h3>What is Hack Club?</h3>
			<p>
				Hack Club is a 501(c)(3) nonprofit (EIN: 81-2908499) that helps high school students learn
				to code and build projects. We’re the largest teen-led coding community, with over 50,000
				students building projects with their friends in Hack Club each year.
			</p>
			<p>Some of our past events include:</p>
			<ul>
				<li>Juice: a 2-month game jam followed by a 7-day pop-up cafe in Shanghai, China</li>
				<li>Undercity: a 4-day hardware hackathon in GitHub HQ, San Francisco</li>
				<li>
					Shiba: a 7-day pop-up arcade in Tokyo, Japan where teenagers built their own arcade
					machines
				</li>
			</ul>
			<p>
				... and many more!
				<br />
				To learn more about Hack Club, visit the <a href="https://hackclub.com">main website</a> and
				<a href="https://hackclub.com/philosophy/">Hack Club Philosophy</a>.
			</p>
		</div>
	{:else if shownSection === 'qualify'}
		<div id="section">
			<h2>Qualifying</h2>
			<p>
				To qualify for {eventName}, you'll need to spend {hourRequirement} coding, and track that time
				on
				<a href="https://hackatime.hackclub.com">Hackatime</a>
			</p>
			<p>If you need us to pay for flights, you'll need to spend additional hours coding.</p>
		</div>
	{/if}
</div>

<style>
	#hero {
		width: 100%;
		aspect-ratio: 1920 / 1080;
		text-align: center;
		background-image: url('/assets/hero_img.PNG');
		background-size: 100% 100%;
		background-position: center;
		background-repeat: no-repeat;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		position: relative;
		padding-top: 2em;
	}

	#body {
		width: 100%;
		aspect-ratio: 1920 / 2301;
		background-image: url('/assets/body_bg.PNG');
		background-size: 100% 100%;
		background-position: center;
		background-repeat: no-repeat;
		position: relative;
	}

	#section {
		padding-left: 2em;
	}

	#title h2 {
		margin-bottom: 0px;
	}

	#title h1 {
		margin-top: 0px;
	}

	.down-arrow {
		position: absolute;
		top: calc(100vh - 80px);
		left: calc(50% - 14px);
		width: 0;
		height: 30px;
		border: 2px solid;
		border-radius: 2px;
		animation: jumpInfinite 1.5s infinite;
	}

	.down-arrow:after {
		content: ' ';
		position: absolute;
		top: 12px;
		left: -10px;
		width: 16px;
		height: 16px;
		border-bottom: 4px solid;
		border-right: 4px solid;
		border-radius: 4px;
		transform: rotateZ(45deg);
	}

	@keyframes jumpInfinite {
		0% {
			margin-top: 0;
		}
		50% {
			margin-top: 20px;
		}
		100% {
			margin-top: 0;
		}
	}
</style>
