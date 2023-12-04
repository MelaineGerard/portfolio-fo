<template>
  <div class="px-8">
    <div class="grid">
      <WebsiteProjectCard
          v-for="project in projects?.data"
          :key="project.name"
          :name="project.name"
          :description="project.description"
          :url="project.link"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import WebsiteProjectCard from "~/components/WebsiteProjectCard.vue";

const { data: projects } = useFetch('https://portfolio-bo.melaine-gerard.fr/items/Project?limit=-1');
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>