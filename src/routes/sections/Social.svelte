<script>
    import Link from "../components/Link.svelte";
</script>

<header>
    <Link link="https://www.linkedin.com/in/santiago-farall-moncecchi/" icon="devicon-linkedin-plain" text="Linkedin" />
    <Link link="https://github.com/elsantiF/" icon="devicon-github-original" text="GitHub" />
    <Link link="/CV.pdf" icon="" text="CV" />
</header>

<style lang="scss">
    @import "src/styles/colors";
    @import "src/styles/sizes";


    header {
        display: flex;

        /*Size*/
        width: 100%;
        height: 3em;

        /*Colors*/
        background-color: $color-dark;
        color: $color-white;

        align-items: center;
        justify-content: space-evenly;

        font-weight: 600;
    }
</style>