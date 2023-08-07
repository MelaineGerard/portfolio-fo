<template>
  <WebsiteTwoColumns title="A Propos">
    <p>
      Je suis un développeur Web Fullstack basé à Rennes. J'utilise principalement le langage PHP pour la partie
      Backend avec les frameworks tel que Symfony et Laravel. Pour la partie Frontend, j'utilise des frameworks CSS
      tel que TailwindCSS et Bootstrap.
    </p>
    <p class="mt-2">
      Je suis passionné par l'informatique depuis que j'ai 10 ans.
    </p>
    <WebsiteAboutPersonalInfosHomepage />
  </WebsiteTwoColumns>
</template>

<style lang="scss" scoped>
h2 {
  text-align: center;
}
</style>
<script setup lang="ts">
import WebsiteAboutPersonalInfosHomepage from "~/components/homepage/WebsiteAboutPersonalInfosHomepage.vue";
</script>