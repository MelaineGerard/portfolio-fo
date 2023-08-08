<template>
  <WebsiteTwoColumns title="Projets" v-if="projects.length !== 0">
    <WebsiteTwoColumnsGrid>
      <WebsiteProjectCard
          v-for="project in projects"
          :key="project.name"
          :name="project.name"
          :description="project.description"
          :url="project.link"
      />
    </WebsiteTwoColumnsGrid>
  </WebsiteTwoColumns>
</template>

<style lang="scss" scoped>
</style>

<script setup lang="ts" async>
import { getProjects } from '~/services/ProjectService'
// TODO: Remplacer cela par un call sur l'API qui récupère les données
const projects = await getProjects()
</script>