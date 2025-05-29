<div class="main">
    <div class="border">
        <p>WIP:</p>
        <p>This page is under construction.</p>
    </div>
</div>

<style lang="scss">
    @use '$styles/colors.scss';
    @use '$styles/sizes.scss';

    .main {
        /* Colors */
        background-color: colors.$color-yellow;
        color: colors.$color-dark;

        /* Sizing */
        width: 100%;
        height: 100%;

        /* Space */
        padding: 1em 0;

        .border {
            display: flex;
            flex-direction: row;
            justify-content: center;
            box-sizing: content-box;
            gap: 1em;
            text-align: center;
            height: 100%;
            border-block: 0.5em dashed;

            p {
                font-size: 1em;
                font-weight: 900;
            }
        }
    }
</style>