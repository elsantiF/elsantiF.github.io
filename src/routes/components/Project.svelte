<script lang="ts">
import { type IProject } from "../../lib/IProject";

const project: IProject = $props();
</script>

<div class="project">
	<h3 class="project_title"><a href={project.link}>{project.title}</a></h3>
	<h3 class="project_desc">
		{project.desc}
	</h3>
</div>

<style lang="scss">
	@use '$styles/sizes.scss';
	@use '$styles/colors.scss';

	.project {
		margin: 4em sizes.$right-margin 0;

		.project_title {
			font-size: 1.5rem;
			margin: 0;

			a {
				color: colors.$color-dark;
			}
		}

		.project_desc {
			margin: 0 1em;
			width: 90%;
			max-width: 100%;
		}
	}
</style>
