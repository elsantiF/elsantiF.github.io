<footer>
    <a href="https://www.linkedin.com/in/santiago-farall-moncecchi/" target="_blank">
        <i class="devicon-linkedin-plain" />
        Linkedin
    </a>

    <a href="https://github.com/elsantiF/" target="_blank">
        <i class="devicon-github-original" />
        GitHub
    </a>
</footer>

<style lang="scss">
    @import "src/styles/colors";
    @import "src/styles/sizes";


    footer {
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

        a {
            color: $color-white;
            /*font-weight: 00;*/
            text-decoration: none;
        }
    }
</style>