<div class="main">
    <div class="border">
        <p>WIP</p>
        <p>This page is under construction.</p>
    </div>
</div>

<style lang="scss">
    @import '../styles/colors.scss';

    .main {
        /* Colors */
        background-color: $color-yellow;
        color: $color-dark;

        /* Sizing */
        width: 100%;
        height: 20vw;

        /* Space */
        padding: 4em 0;

        .border {
            box-sizing: border-box;
            height: 100%;
            border-block: 2em dashed;
            text-align: center;

            p {
                margin-top: 2.5rem;
                font-size: 3vw;
                font-weight: 900;
            }
        }
    }
</style>