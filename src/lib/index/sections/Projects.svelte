<script lang="ts">
import { ALL_PROJECTS } from "$lib/data/projects";
import Project from "$lib/index/components/Project.svelte";
</script>

<article>
	<h1 class="title">Projects</h1>
	<h3 class="text">
		This is my list of public projects:
	</h3>

	<div id="projects">
		{#each ALL_PROJECTS as project (project.title)}
			<Project {...project} />
		{/each}
	</div>
</article>

<style lang="scss">
	@use '$lib/styles/articles.scss';

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
