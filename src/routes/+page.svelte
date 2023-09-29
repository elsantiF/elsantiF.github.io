<script>
    import UpperHeader from "./sections/UpperHeader.svelte";
	import Header from "./sections/Header.svelte";
	import Biography from "./sections/Biography.svelte";
    import Technologies from "./sections/Technologies.svelte";
    import Projects from "./sections/Projects.svelte";
    import FAQ from "./sections/FAQ.svelte";
	import WIP from './sections/WIP.svelte'
    import Social from "./sections/Social.svelte";
</script>

<svelte:head>
	<title>santif's page</title>
</svelte:head>

<main>
	<UpperHeader />
	<Header />
	<Biography />
	<Technologies />
	<Projects />
	<FAQ />
	<!-- The page is not finished but is not longer WIP -->
	<!-- <WIP /> -->
	<Social />
</main>