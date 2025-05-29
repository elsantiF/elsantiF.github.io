<article>
    <h1 class="title">Software and Technologies</h1>
    <h3 class="text">
        From my starts to today I used and learned a lot of tools and programming languages, some of these are listed in
        the images below
    </h3>

    <div class="text" id="logos">
        <!-- C-Family -->
        <i class="devicon-cplusplus-plain-wordmark"></i>
        <i class="devicon-c-plain-wordmark"></i>
        <i class="devicon-csharp-plain-wordmark"></i>

        <!-- Web (pure) -->
        <i class="devicon-html5-plain-wordmark"></i>
        <i class="devicon-css3-plain-wordmark"></i>
        <i class="devicon-javascript-plain"></i>

        <!-- Web  (libs) -->
        <!-- TODO: Find better nodejs logo -->
        <!-- <i class="devicon-nodejs-plain"></i> -->
        <i class="devicon-typescript-plain"></i>
        <i class="devicon-react-original-wordmark"></i>
        <i class="devicon-svelte-plain"></i>

        <!-- Mobile -->
        <i class="devicon-java-plain"></i>
        <i class="devicon-kotlin-plain"></i>
        <i class="devicon-android-plain"></i>

        <!-- DB -->
        <i class="devicon-postgresql-plain"></i>
        <i class="devicon-mongodb-plain-wordmark"></i>

        <!-- Other -->
        <i class="devicon-python-plain"></i>
        <i class="devicon-git-plain"></i>
        <i class="devicon-docker-plain"></i>
        <i class="devicon-rust-plain"></i> <!-- Don't lawsuite me please -->
        <i class="devicon-php-plain"></i>
        <i class="devicon-opengl-plain"></i>
        <i class="devicon-godot-plain"></i>
        <i class="devicon-unity-original"></i>
        <i class="devicon-linux-plain"></i>
        <!-- 23 in total; Grid 12 * 2-->
    </div>
</article>

<style lang="scss">
  @use "$styles/articles.scss";
  @use "$styles/sizes.scss";

  #logos {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;

	margin: 0.5em 3vw 0 3vw;

	i {
	  font-size: sizes.$title-font-size;
	  margin: 1rem;
	}
  }
</style>