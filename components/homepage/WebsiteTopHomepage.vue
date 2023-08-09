<template>
  <div>
    <WebsiteBanner
        src="https://images.hdqwalls.com/download/moon-light-ride-4k-e3-2048x1152.jpg"
        alt="Bannière de Melaine Gérard"
        object-position="top"
        class="filter-banner big-banner"
    />
    <div class="parent-block">
      <WebsiteRoundedImage
          src="https://files.melaine-gerard.fr/moi.png"
          alt="Photo de Melaine Gérard"
          width="12rem"
          height="12rem"
          class="bg-secondary overlap-banner"
      />
      <div class="presentation">
        <h1>Melaine Gérard</h1>
        <span class="text-gray">Développeur Web Full Stack junior basé à Rennes</span>
      </div>
      <div class="links">
          <a href="https://www.linkedin.com/in/melaine-gerard/" target="_blank">
            <WebsiteButton class="mr-1">
              <FontAwesomeIcon class="mr-1" :icon="['fab', 'linkedin']"/>
              LinkedIn
            </WebsiteButton>
          </a>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.overlap-banner {
  position: absolute;
  top: 12rem;
  display: flex;
  justify-self: center;
  width: auto;
  margin-left: 2rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 1rem;
}

.parent-block {
  display: flex;
  flex-direction: row;
  height: 10rem;
}

.presentation {
  margin-left: 16rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
}

h1 {
  margin: 0;
}

.links {
  margin-left: auto;
  margin-right: 2rem;
  margin-top: 1rem;
  display: block;
  width: auto;
}

.filter-banner {
  filter: grayscale(0.4) brightness(0.8);
}

@media screen and (max-width: 768px) {
  .big-banner {
    display: none;
  }

  .parent-block {
    flex-direction: column !important;
    height: auto;
  }

  .overlap-banner {
    position: relative;
    top: 0;
    width: 12rem;
    margin-left: auto;
    margin-right: auto;
  }

  .presentation {
    margin-left: 0;
    text-align: center;
  }

  .links {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 0;
    gap: 0.5rem;
    justify-content: center;
    width: 100%;
  }
}
</style>
<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
</script>