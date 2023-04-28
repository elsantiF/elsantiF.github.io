<article>
    <h1 class="title">F.A.Q</h1>
    <h3 class="text">
        <div>
            <h3 class="question">Are you looking for a job</h3>
            <h3 class="answer">Yes</h3>
        </div>
        
        <div>
            <h3 class="question">What is your level of English</h3>
            <h3 class="answer">Between B2 and C1</h3>
        </div>

        <div>
            <h3 class="question">Any hobbies</h3>
            <h3 class="answer">Music, videogames, electronics and rockets</h3>
        </div>

        <div>
            <h3 class="question">Are you studing</h3>
            <h3 class="answer">Yes but I'm in a pause because administrative and personal things</h3>
        </div>

        <div>
            <h3 class="question">Do you want to participate in a X project</h3>
            <h3 class="answer">Probably yes</h3>
        </div>

        <div>
            <h3 class="question">What OS you use</h3>
            <h3 class="answer">Winodws 11 and Manjaro</h3>
        </div>
    </h3>
</article>

<style lang="scss">
    @import "../styles/articles.scss";

    article {
        @include back-in-black;

        h3.text {
            div {
                h3 {
                    font-size: 1em;
                    margin-bottom: 0;
                }

                .question {
                    margin-top: 0.5em;

                    &::after {
                        content: "?";
                    }
                }

                .answer {
                    margin: 0 1.5em;
                    font-weight: 400;
                    font-size: 0.8em;

                    &::before {
                        content: " - ";
                    }
                }
            }
        }
    }
</style>