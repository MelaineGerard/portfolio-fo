<template>
  <WebsiteTwoColumns title="Projets" v-if="projects?.data.length !== 0">
    <WebsiteTwoColumnsGrid>
      <WebsiteProjectCard
          v-for="project in projects?.data"
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
const { data: projects } = useFetch('https://portfolio-backoffice.melaine-gerard.fr/api/project/?sort=desc&limit=4');
</script>