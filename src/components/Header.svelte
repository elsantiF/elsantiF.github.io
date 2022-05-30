<header>
    <h1 class="title">Hi I'm</h1>
    <h1 class="title">Santiago Farall</h1>

    <h2 class="subtitle">A Software Developer from Uruguay</h2>
</header>

<style lang="scss">
    @import '../styles/colors.scss';

    header {
        /* Colors */ 
        @include back-in-black();

        /* Spaces */
        padding: 5em;

        h1, h2 {
            margin: 0;
        }

        /* Classes */
        .title {
            margin-bottom: -2.5vw;
            text-transform: uppercase;
            font-size: 6vw;
        }

        .subtitle {
            font-size: 1.5vw;
            margin-top: 4vw;
            font-style: italic;
        }
    }

    
</style>