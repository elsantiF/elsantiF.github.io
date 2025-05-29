<script>
	import Link from '../components/Link.svelte';
</script>

<header>
	<Link
		link="https://www.linkedin.com/in/santiago-farall-moncecchi/"
		icon="devicon-linkedin-plain"
		text="Linkedin"
	/>
	<Link link="https://github.com/elsantiF/" icon="devicon-github-original" text="GitHub" />
</header>

<style lang="scss">
	@use '$styles/colors.scss';
	@use '$styles/sizes.scss';
	header {
		display: flex;

		/*Size*/
		width: 100%;
		height: 3em;

		/*Colors*/
		background-color: colors.$color-dark;
		color: colors.$color-white;

		align-items: center;
		justify-content: space-evenly;

		font-weight: 600;
	}
</style>
