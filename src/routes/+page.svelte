<script>
    import Social from "./sections/Social.svelte";
	import Header from "./sections/Header.svelte";
	import Biography from "./sections/Biography.svelte";
    import Technologies from "./sections/Technologies.svelte";
    import Projects from "./sections/Projects.svelte";
    import FAQ from "./sections/FAQ.svelte";
	import WIP from './sections/WIP.svelte'
	import Footer from "./sections/Footer.svelte";
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
	<!-- The page is not finished but is not longer WIP -->
	<!-- <WIP /> -->
	<Footer />
</main>