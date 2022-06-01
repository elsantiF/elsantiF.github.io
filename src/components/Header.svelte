<header>
    <h1 class="title">Hi I'm</h1>
    <h1 class="title">Santiago Farall</h1>

    <h2 class="subtitle">A Software Developer from Uruguay</h2>
</header>

<style lang="scss">
    @import '../styles/colors.scss';
    @import '../styles/sizes.scss';

    header {
        /* Colors */ 
        @include back-in-black();

        /* Spaces */
        padding: $container-padding;

        h1, h2 {
            margin: 0;
        }

        /* Classes */
        .title {
            margin-bottom: -1vw;
            text-transform: uppercase;
            font-size: $title-font-size;
        }

        .subtitle {
            font-size: $subtitle-font-size;
            margin-top: 4vw;
            font-style: italic;
        }
    }

    
</style>