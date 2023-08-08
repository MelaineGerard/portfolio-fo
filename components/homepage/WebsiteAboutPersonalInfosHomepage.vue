<template>
  <div class="personal-infos">
    <div>
      <div>Localisation</div>
      <div class="font-bold">Rennes, France</div>
    </div>
    <div>
      <div>Github</div>
      <div>
        <a href="https://github.com/MelaineGerard"  class="font-bold">
          MelaineGerard
          <FontAwesomeIcon class="ml-1" :icon="['fas', 'external-link-alt']"/>
        </a>
      </div>
    </div>
    <div>
      <div>Email</div>
      <div>
        <a href="mailto:pro@melaine-gerard.fr"  class="font-bold">
          pro@melaine-gerard.fr
          <FontAwesomeIcon class="ml-1" :icon="['fas', 'external-link-alt']"/>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/colors";
  .personal-infos {
    background: $background-secondary;
    display: flex;
    justify-content: space-between;
    padding: 1.50rem 0.75rem;
    border-radius: 0.75rem;
  }

a {
  color: $black;
  text-decoration: none;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: $color-hover
  }
}

.personal-infos > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media screen and (max-width: 768px) {
  .personal-infos {
    flex-direction: column;
    align-items: center;
  }



  .personal-infos > div {
    padding: 20px;
    align-items: center;
  }
}
</style>
<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
</script>