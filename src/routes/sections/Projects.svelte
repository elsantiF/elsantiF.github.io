<script lang="ts">
	import { type IProject } from '../../lib/IProject';
	import Project from '../components/Project.svelte';

	const projects: IProject[] = [
		{
			title: 'Banshee',
			link: 'https://github.com/elsantiF/Banshee',
			desc: `Banshee is a simple 3D render engine written in C++23 and OpenGL. Inspired by the page "LearnOpenGL".
				Uses modern C++ features, also the libraries used are: GLFW, GLM, stb_image, ImGui and Assimp.
				Was a personal project to learn more about C++ and OpenGL, and become the base of a future game engine in Vulkan and SDL3.`
		},
		{
			title: 'KOPMod',
			link: 'https://github.com/elsantiF/KOPMod',
			desc: `As a rocket fan, when Kerbal Space Program 2 was launched I immediately buy it, but the game had a poor performance.
                So I wrote this little mod to slightly increase the performance, and surprisingly it worked, some people went from 8 FPS to 20.
                As new patches are released to the game, the performance is getting better, so I suspend the development of the mod for a while.
                I made the mod in 48 hours after the release of the game, so isn't well programmed, but works.`
		},
		{
			title: 'TeLoFunca',
			link: 'https://github.com/elsantiF/TeLoFunca',
			desc: `TeLoFunca was our end-of-year project during the second year of high school. It's essentially a copy of Can You RUN It, 
                and the name is a play on words with "funcar," which means "works well" in Spanish (at least in Uruguay).
                We couldn't use any database, so the data is in multiple JSON files. 
                Additionally, it incorporates a (mini)template system. I plan to upload it to this page in the future.`
		},
		{
			title: 'Quads',
			link: 'https://github.com/elsantiF/Quads',
			desc: `It was my first attempt to make a videogame, a 2D Minecraft clone written in Java and LWJGL2
                (is the same project that is mentioned in the biography). I was 14 years old at the time when I worked on it, so it is a very special project for me.`
		}
	];
</script>

<article>
	<h1 class="title">Projects</h1>
	<h3 class="text">
		Actually I only have one public project in my GitHub account, mostly beacause I never uploaded,
		finished, have sensible date or are in my old GitLab account, or simply I don't like the final
		state of it. Anyways, this is my (actual) list of public projects:
	</h3>

	<div id="projects">
		{#each projects as project (project.title)}
			<Project desc={project.desc} link={project.link} title={project.title} />
		{/each}
	</div>
</article>

<style lang="scss">
	@use '$styles/articles.scss';

	article {
		#projects {
			display: grid;
			grid-template-columns: 1fr 1fr;

			@media screen and (max-width: 1080px) {
				grid-template-columns: 1fr;
			}
		}
	}
</style>
