<article>
	<h1 class="title">Software and Technologies</h1>
	<h3 class="text">
		From my starts to today I used and learned a lot of tools and programming languages, some of
		these are listed in the images below
	</h3>

	<div class="text" id="logos">
		<!-- C-Family -->
		<i class="devicon-cplusplus-plain-wordmark" title="C++"></i>
		<i class="devicon-c-plain-wordmark" title="C"></i>
		<i class="devicon-csharp-plain-wordmark" title="C#"></i>

		<!-- Web (pure) -->
		<i class="devicon-html5-plain-wordmark" title="HTML5"></i>
		<i class="devicon-css3-plain-wordmark" title="CSS3"></i>
		<i class="devicon-javascript-plain" title="JavaScript"></i>

		<!-- Web  (libs) -->
		<!-- TODO: Find better nodejs logo -->
		<i class="devicon-typescript-plain" title="TypeScript"></i>
		<i class="devicon-nodejs-plain-wordmark" title="NodeJS"></i>
		<i class="devicon-react-original-wordmark" title="React"></i>
		<i class="devicon-svelte-plain" title="Svelte"></i>

		<!-- Mobile -->
		<i class="devicon-java-plain" title="Java"></i>
		<i class="devicon-kotlin-plain" title="Kotlin"></i>
		<i class="devicon-android-plain" title="Android"></i>

		<!-- DB -->
		<i class="devicon-postgresql-plain" title="PostgreSQL"></i>
		<i class="devicon-mongodb-plain-wordmark" title="MongoDB"></i>

		<!-- Other -->
		<i class="devicon-python-plain" title="Python"></i>
		<i class="devicon-git-plain" title="Git"></i>
		<i class="devicon-docker-plain" title="Docker"></i>
		<i class="devicon-linux-plain" title="Linux"></i>
		<!-- 23 in total; Grid 12 * 2-->
	</div>
</article>

<style lang="scss">
	@use '$styles/articles.scss';
	@use '$styles/sizes.scss';

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
