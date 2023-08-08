<template>
  <div class="px-8">
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

const { data: professionalExperiences } = useFetch('https://portfolio-bo.melaine-gerard.fr/items/ProfessionalExperience?limit=-1');
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