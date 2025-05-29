<script lang="ts">
  export let link: string;
  export let icon: string;
  export let text: string;
</script>

<a href={link} target="_blank">
  {#if icon !== ""}
    <i class={icon}></i>
  {/if}
  {text}
</a>

<style lang="scss">
  @use "$styles/colors.scss";

  a {
    color: colors.$color-white;
    text-decoration: none;
    border: 2px colors.$color-pure-gray solid;
    padding: 4px;
    min-width: 10%;
    max-width: 10em;
    display: flex;
    justify-content: center;
    align-items: baseline;

    &:hover {
      background-color: colors.$color-gray-accent;
    }

    &:focus {
      background-color: colors.$color-pure-gray;
    }

    i {
      padding-right: 0.35em;
    }
  }
</style>
