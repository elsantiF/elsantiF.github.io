<script>
    //Not a good name for the file, but I couldn't find something better
</script>

<header>
    <p>This page is made with
        <a href="https://svelte.dev/">Svelte</a>
    </p>
</header>

<style lang="scss">
    @import "../../styles/colors.scss";
    @import '../../styles/sizes.scss';


    header {
        display: flex;

        /*Size*/
        width: 100%;
        height: 3em;

        /*Colors*/
        background-color: $color-dark;
        color: $color-white;

        align-items: center;
        justify-content: center;

        font-weight: 600;

        a {
            color: $color-white;
            font-weight: 800;
            text-decoration: none;
        }
    }
</style>