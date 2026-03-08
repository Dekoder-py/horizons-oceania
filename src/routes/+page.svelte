<svelte:window on:click={enterClicked} on:keydown={(e) => e.key === 'Enter' && enterClicked()} />

<script lang="ts">
	function enterClicked() {
		console.log('Clicked, going to next page one day when we code that in :yesyes:');
	}
</script>

<div id="title">
	<h2>Hack Club</h2>
	<h1>Horizons Crux</h1>
</div>
<p id="subtitle">July 10 - 12, 2026</p>
<p id="caption">Hackathon in Sydney. For high schoolers, by high schoolers.</p>

<p>Click or Press Enter</p>


<style>
	#title h2 {
		margin-bottom: 0px;
	}

	#title h1 {
		margin-top: 0px;
	}
</style>
