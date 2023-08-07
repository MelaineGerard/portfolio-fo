<template>
  <button class="website-button">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
@import "assets/css/colors";
  .website-button {
    background: $background-primary;
    color: $black;
    border: 1px solid $background-secondary;
    padding: 0.5rem 0.75rem;
    border-radius: 0.25rem;
    transition: 0.2s all ease-in-out;
    text-align: center;
    cursor: pointer;

    &:hover {
      background: $background-secondary;
  }
  }
</style>