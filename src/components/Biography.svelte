<article>
    <h1 class="title">A brief Biography</h1>
    <h3 class="text">
        I was born in Paysandú in the 2001, from my childhood I showed some interests in computers and electronics, possibly instilled by my uncle. 
        At the age of 8 (or 9, I don't remember) I started to write little programs in Python and games in Scratch. 
        And at 14, I made my "biggest" project at that moment, a little 2D clone of Minecraft written in Java with LWJGL and OpenGL 2.1, 
        a couple of years later I started to write more complex programs, some OS developing, Android apps and web pages.
        Now I'm 20, I'm studying at UTEC university in Fray Bentos and started to look a first job to gain more experience. 
    </h3>
</article>

<style lang="scss">
    @import '../styles/colors.scss';

    article {
        /* Colors */
        @include front-in-black;

        /* Space */
        padding: 2em 5em;

        /* Classes */
        .title {
            font-size: 2.5vw;
        }

        .text {
            font-size: 1.15vw;
            text-align: justify;
            margin-right: 25%;
        }
    }
</style>