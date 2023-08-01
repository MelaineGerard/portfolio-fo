<template>
  <footer>
    Fait avec ❤️ par <a href="https://melaine-gerard.fr">Melaine Gérard</a>
  </footer>
</template>

<style lang="scss" scoped>
@import "assets/css/colors";
  footer {
    text-align: center;
    padding: 1rem;
    font-size: 1rem;
    color: $black;
    background: $background-secondary;

    a {
      color: $black;
      text-decoration: none;
      transition: all 0.2s ease-in-out;

      &:hover {
        color: $color-hover;
      }
    }
  }
</style>