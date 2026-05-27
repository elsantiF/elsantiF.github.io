<script>
import Social from "$lib/index/sections/Social.svelte";
import Header from "$lib/index/sections/Header.svelte";
import Biography from "$lib/index/sections/Biography.svelte";
import Technologies from "$lib/index/sections/Technologies.svelte";
import Projects from "$lib/index/sections/Projects.svelte";
import FAQ from "$lib/index/sections/FAQ.svelte";
import Footer from "$lib/index/sections/Footer.svelte";
</script>

<svelte:head>
	<title>santif's page</title>
</svelte:head>

<main>
	<Social />
	<Header />
	<Biography />
	<Technologies />
	<Projects />
	<FAQ />
	<Footer />
</main>
