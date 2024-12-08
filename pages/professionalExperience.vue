<template>
  <div class="px-8">
    <h1 class="text-center">Liste des expériences professionnelles</h1>
    <div class="grid">
      <WebsiteProfessionalExperienceCard
          v-for="experience in professionalExperiences?.data"
          :key="experience.enterprise"
          :type="experience.type"
          :enterprise="experience.enterprise"
          :description="experience.description"
          :startDate="experience.startDate"
          :endDate="experience.endDate"
          :url="experience.url"
      />
    </div>
  </div>
</template>

<script setup lang="ts">

const { data: professionalExperiences } = useFetch('https://portfolio-backoffice.melaine-gerard.fr/api/professional-experience/');
</script>

<style lang="scss" scoped>

.text-center {
  text-align: center;
}
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