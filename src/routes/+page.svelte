<script lang="ts">
	const eventCity = 'Sydney';
	const eventName = 'Horizons Crux';
	const venue = 'VENUE TBD';
	const hours = 30;

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
		<button
			onclick={() => {
				shownSection = 'event-details';
			}}>Event Details</button
		>
		<button
			onclick={() => {
				shownSection = 'travel';
			}}>Travel</button
		>
	</nav>

	<img id="anchor" src="/assets/anchor&chain.PNG" alt="Anchor" />

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
			<h3>Team and Contact</h3>
			<p>Horizons Crux is led by 8 teens from Australia and New Zealand!</p>
			<p>
				If you have any questions, feel free to reach out to us at
				<a href="mailto:crux@horizons.hackclub.com">crux@horizons.hackclub.com</a>.
			</p>
		</div>
	{:else if shownSection === 'qualify'}
		<div id="section">
			<h2>Qualifying</h2>
			<p>
				To qualify for {eventName}, you'll need to spend {hourRequirement} coding, and track that time
				on
				<a href="https://hackatime.hackclub.com">Hackatime</a>.
			</p>
			<p>Purchase a Crux ticket from the <a href="https://horizons.hackclub.com/">Horizons shop</a> 
				using 30 hours to receive an invite to the event!.</p>
			<p>You can also earn flight stipends by spending additional hours coding.</p>
			<p> You can split the hours across multiple projects, or on one large one. It’s up to you! </p>
		</div>
	{:else if shownSection === 'event-details'}
		<div id="section">
			<h2>Event Details</h2>
			<p>
				{eventName} will be held in {eventCity} from July 10 to 12, 2026. The venue is TBD
			</p>
			<h3>Logistics</h3>
			<p>Participants are to arrive at the venue by 1:00 PM on July 10th and will depart at 5:00 PM on July 12th. 
				Accomodation will be provided at the venue.</p>
			<p> Food will be provided throughout the event, and there will be accomodation for all dietary restrictions. </p>
			<p> Participants will sleep at the hackathon venue. They are advised to bring their own sleeping bags. </p>
			<p> There will be background checked staff available for the duration of the event.</p>
			<p> Closer to the date we will be hosting event calls to run you through how the event will run and answer any questions you may have.</p>
			<h3>Are Parents allowed to come?</h3>
			<p> Parents are not allowed to stay in the venue and will not be reimbursed for their stay or travel. Parents are free to check the venue before the event under the supervision of staff to make sure everything is safe for their child.</p>
		</div>
	{:else if shownSection === 'travel'}
		<div id="section">
			<h2>Travel</h2>
			<h3>Flight Stipends</h3>
			<p> Flight stipends are available in the horizons shop at a rate of $8.5USD per hour spent coding. You can stack this as many times as needed in order to afford flight, visa and passport costs.</p>
			<p> While the ticket to the event will be taken off the shop on the 9th of July, flight stipends will still be available for purchase until late August.</p>
			<h3> Flying in and out of Sydney</h3>
			<p>Sydney has one main airport -- Kingsford Smith Airport (SYD)</p>
			
		</div>
	{/if}
</div>

<style>
	#hero {
		color: lightgrey;
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
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		padding-top: 2em;
	}

	nav {
		display: flex;
		flex-direction: column;
		gap: 1em;
		padding-left: 25%;
		padding-top: 2em;
	}

	nav button {
		background: rgba(0, 0, 0, 0);
		color: white;
		border: none;
		padding: 0.75em 1.5em;
		cursor: pointer;
		font-size: 1em;
		transition: all 0.3s ease;
	}

	nav button:hover {
		background: rgba(255, 255, 255, 0.1);
		transform: translateX(5px);
	}

	#anchor {
		position: absolute;
		left: 38%;
		top: -10em;
		transform: translateX(-50%) scale(0.6);
		transform-origin: top center;
		height: 80%;
		width: auto;
		z-index: 1;
	}

	#section {
		color: white;
		margin-left: 10%;
		padding-right: 2em;
		padding-left: 2em;
		max-width: 26%;
		z-index: 2;
		position: relative;
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
