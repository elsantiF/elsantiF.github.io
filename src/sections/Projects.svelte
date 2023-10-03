<script>
    const projects = [
        {
            title: "KOPMod",
            link: "https://github.com/elsantiF/KOPMod",
            desc: `As a rocket fan, when Kerbal Space Program 2 was launched I immediately buy it, but the game had a poor performance.
                So I wrote this little mod to slightly increase the performance, and surprisingly it worked, some people went from 8 FPS to 20.
                As new patches are released to the game, the performance is getting better, so I suspend the development of the mod for a while.
                I made the mod in 48 hours after the release of the game, so isn't well programmed, but works.`
        }
    ]
</script>

<article>
    <h1 class="title">Projects</h1>
    <h3 class="text">
        Actually I only have one public project in my GitHub account, mostly beacause I never uploaded, finished,
        have sensible date or are in my old GitLab account, or simply I don't like the final state of it. 
        Soon I will upload some old projects. Anyways, this is my (actual) list of projects: <!-- In plural, for the future -->
    </h3>

    {#each projects as project}
        <div class="project">
            <h3 class="project_title"><a href={project.link}>{project.title}</a></h3>
            <h3 class="project_desc">
                {project.desc}
            </h3>
        </div>
    {/each}
</article>

<style lang="scss">
    @import "../styles/articles.scss";
    @import '../styles/sizes.scss';

    article {
        @include front-in-black
    }

    .project {
        text-align: justify;
        margin: 0 $right-margin;
        margin-top: 4em;

        .project_title {
            font-size: 1.5rem;
            margin: 0;

            a {
                color: $color-dark;
            }
        }

        .project_desc {
            margin: 0 1em;
            width: 50%;
            max-width: 100%;
        }
    }
</style>