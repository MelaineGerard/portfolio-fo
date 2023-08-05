<template>
  <div class="grid border-top-gray mt-4">
    <h2>A propos</h2>
    <div class="col-span-2">
      <p>
        Je suis un développeur Web Fullstack basé à Rennes. J'utilise principalement le langage PHP pour la partie
        Backend avec les frameworks tel que Symfony et Laravel. Pour la partie Frontend, j'utilise des frameworks CSS
        tel que TailwindCSS et Bootstrap.
      </p>
      <p class="mt-2">
        Je suis passionné par l'informatique depuis que j'ai 10 ans.
      </p>
      <WebsiteAboutPersonalInfosHomepage />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

.col-span-2 {
  grid-column: span 2;
}

.border-top-gray {
  border-top: 1px solid #c5c5c5;
}

@media screen and (max-width: 768px) {
  .grid {
    grid-template-columns: repeat(1, 1fr);
  }

  .col-span-2 {
    grid-column: span 1;
  }

  h2 {
    text-align: center;
  }
}
</style>
<script setup lang="ts">
import WebsiteAboutPersonalInfosHomepage from "~/components/homepage/WebsiteAboutPersonalInfosHomepage.vue";
</script>