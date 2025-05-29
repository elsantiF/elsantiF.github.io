<article>
	<h1 class="title thin">Hi I'm</h1>
	<h1 class="title">Santiago Farall</h1>

	<h2 class="subtitle">A Software Developer from Uruguay</h2>
</article>

<style lang="scss">
	@use '$styles/colors.scss';
	@use '$styles/sizes.scss';
	@use '$styles/articles.scss';

	article {
		h1,
		h2 {
			margin: 0;
		}

		/* Classes */
		.title {
			margin-bottom: -1vw;
			text-transform: uppercase;
			font-size: sizes.$title-font-size;
		}

		.thin {
			font-weight: 400;
		}

		.subtitle {
			font-size: sizes.$subtitle-font-size;
			margin-top: 1.5em;
			font-style: italic;
		}
	}
</style>
