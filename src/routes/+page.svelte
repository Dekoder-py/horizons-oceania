<script lang="ts">
	let eventCity = 'Sydney';
	let eventName = 'Horizons Crux';

	let hourRequirement = 30 + ' hours';
</script>

<svelte:head>
	<title>{eventName}</title>
</svelte:head>

<div id="hero">
	<div id="title">
		<h2>Hack Club</h2>
		<h1>{eventName}</h1>
	</div>

	<p id="subtitle">{eventCity} | July 10 - 12, 2026</p>
	<p id="caption">Hackathons around the world. For high schoolers, by high schoolers.</p>
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
		Qualify for {eventName} by creating projects for {hourRequirement}, and join 100+ <!-- TODO: check and update num of people -->
		teenagers in {eventCity} for a hackathon that <!-- TODO: finish this sentence -->
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
</style>
