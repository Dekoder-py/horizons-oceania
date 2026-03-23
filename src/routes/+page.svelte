<script lang="ts">
	let eventCity = 'Sydney';
	let eventName = 'Horizons Crux';

	let hourRequirement = 30 + ' hours';
</script>

<svelte:head>
	<title>{eventName}</title>
</svelte:head>

<a href="https://hackclub.com/"
	><img
		style="position: absolute; top: 0; left: 10px; border: 0; width: 256px; z-index: 999;"
		src="https://assets.hackclub.com/flag-orpheus-top.svg"
		alt="Hack Club"
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

<div id="overview">
	<h2>Overview: What is Horizons?</h2>
	<p>
		Horizons is a group of hackathons around the world. From July 10 to 12, join us in {eventCity} for
		{eventName}! <br />
		Horizons is organised by
		<a href="https://hackclub.com" referrerpolicy="no-referrer">Hack Club</a> (a 501(c)(3) nonprofit),
		by teenagers, for teenagers.
	</p>

	<p>
		Qualify for {eventName} by creating projects for {hourRequirement}, and join 100+ likeminded <!-- TODO: check and update num of people -->
		teenagers in {eventCity} to create something amazing!
	</p>

	<p>
		Food, snacks, and travel will be fully funded, plus, there'll be some awesome swag there! Flight
		stipends will be avalible too. The hackathon is open to anyone between <b>13 and 18 years old</b
		>.
	</p>
</div>

<style>
	#hero {
		height: 100vh;
		text-align: center;
	}

	#overview {
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
