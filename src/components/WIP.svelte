<div class="main">
    <div class="border">
        <p>WIP</p>
        <p>This page is under construction.</p>
    </div>
</div>

<style lang="scss">
    @import '../styles/colors.scss';
    @import '../styles/sizes.scss';

    .main {
        /* Colors */
        background-color: $color-yellow;
        color: $color-dark;

        /* Sizing */
        width: 100%;
        height: 40vh;

        /* Space */
        padding: $container-padding 0;

        .border {
            display: flex;
            flex-direction: column;
            justify-content: center;
            box-sizing: border-box;
            text-align: center;
            height: 100%;
            padding: $container-padding;
            border-block: 6vmin dashed;

            p {
                font-size: 5vmin;
                font-weight: 900;
            }
        }
    }
</style>