<article>
    <h1 class="title thin">Hi I'm</h1>
    <h1 class="title">Santiago Farall</h1>

    <h2 class="subtitle">A Software Developer from Uruguay</h2>
</article>

<style lang="scss">
  @import '$styles/colors.scss';
  @import '$styles/sizes.scss';
  @import "$styles/articles.scss";

  article {

	h1, h2 {
	  margin: 0;
	}

	/* Classes */
	.title {
	  margin-bottom: -1vw;
	  text-transform: uppercase;
	  font-size: $title-font-size;
	}

	.thin {
	  font-weight: 400;
	}

	.subtitle {
	  font-size: $subtitle-font-size;
	  margin-top: 1.5em;
	  font-style: italic;
	}
  }


</style>