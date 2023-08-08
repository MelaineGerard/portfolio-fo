<template>
  <nav>
    <RouterLink class="website-name" to="/">Melaine Gérard</RouterLink>
    <ul>
      <li>
        <NuxtLink to="/">
          Accueil
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/projects">
          Projets
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="#">
          Expériences professionnelles
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="#">
          Contact
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@import "assets/css/colors";
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: $background-secondary;
    padding: 0.25rem 1rem;

    ul {
      display: flex;
      list-style: none;
      padding: 0;

      li {
        margin-left: 1rem;

        a {
          text-decoration: none;
          color: $black;
          transition: all 0.2s ease-in-out;
          font-size: 1.1rem;

          &:hover {
            color: $color-hover;
          }
        }
      }
    }

    .website-name {
      font-weight: 600;
      font-size: 1.7rem;
      text-decoration: none;
      color: $black;
    }
  }

  @media screen and (max-width: 768px) {
    nav {
      flex-direction: column;
      padding: 0.5rem 0;

      ul {
        flex-direction: column;
        text-align: center;

        li {
          margin: 0.5rem 0;
        }
      }

      .website-name {
        text-align: center;
      }
    }
  }
</style>
<script setup lang="ts">
</script>