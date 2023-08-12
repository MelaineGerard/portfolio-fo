<template>
  <nav>
    <div class="top-bar">
      <RouterLink class="website-name" to="/">Melaine Gérard</RouterLink>
      <button type="button" @click="toggleNavbar">
        <FontAwesomeIcon :icon="['fas', 'bars']" id="icon_bars" />
        <FontAwesomeIcon :icon="['fas', 'times']" class="hidden" id="icon_times" />
      </button>
    </div>
    <ul id="navbar" class="mobile-hidden">
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
        <NuxtLink to="/professionalExperience">
          Expériences professionnelles
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@import "assets/css/colors";

.hidden {
  display: none;
}

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

.top-bar button {
  display: none;
}

@media screen and (max-width: 768px) {
  .top-bar {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .website-name {
      margin-left: 1rem;
    }

    button {
      display: block;
      margin-right: 1rem;
      font-size: 1.5rem;
      border: 0;
      background: transparent;
      color: $black;
      cursor: pointer;

      &:hover {
        color: $color-hover;
      }
    }
  }

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

  .mobile-hidden {
    display: none;
  }
}
</style>
<script setup lang="ts">


function toggleNavbar(event: MouseEvent) {
  const navbar = document.getElementById('navbar');
  navbar!.classList.toggle('mobile-hidden');

  const iconBars = document.getElementById('icon_bars');
  const iconTimes = document.getElementById('icon_times');

  iconBars!.classList.toggle('hidden');
  iconTimes!.classList.toggle('hidden');
}
</script>