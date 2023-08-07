<template>
  <WebsiteTwoColumns title="Projets">
    <WebsiteTwoColumnsGrid>
      <WebsiteProjectCard
          v-for="project in projects"
          :key="project.name"
          :name="project.name"
          :description="project.description"
          :url="project.url"
      />
    </WebsiteTwoColumnsGrid>
  </WebsiteTwoColumns>
</template>

<style lang="scss" scoped>
</style>

<script setup lang="ts">
// TODO: Remplacer cela par un call sur l'API qui récupère les données
const projects = [
  {
    name: "LinkGroup",
    description: "LinkGroup est un outil permettant de créer des groupes de liens",
    url: "https://github.com/MelaineGerard/Linkgroup"
  },
  {
    name: "Simple Notepad",
    description: "Simple Notepad est une application Linux permettant de modifier des fichiers textes.",
    url: "https://github.com/melainegerard/simple-notepad"
  },
  {
    name: "Frontend-Learning",
    description: "Frontend-Learning est un petit site sur lequelle je montre les pages web statiques que j'ai réalisé pour m'entraîner au HTML/CSS en m'inspirant de maquettes trouvées un peu partout sur internet (Notamment Dribbble.com)",
    url: "https://frontend-learning.melaine-gerard.fr/"
  },
  {
    name: "Music Player",
    description: "Music Player est une petite application qui permet de lire de la musique dans son navigateur avec les informations contenues dans un fichier json",
    url: "https://music.melaine-gerard.fr/"
  },
];
</script>