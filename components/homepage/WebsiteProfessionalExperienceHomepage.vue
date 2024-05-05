<template>
  <WebsiteTwoColumns title="Expériences professionelles" v-if="professionalExperiences?.data.length !== 0">
    <WebsiteTwoColumnsGrid>
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
    </WebsiteTwoColumnsGrid>
  </WebsiteTwoColumns>
</template>

<style lang="scss" scoped>
</style>

<script setup lang="ts" async>
const { data: professionalExperiences } = useFetch('https://portfolio-backoffice.melaine-gerard.fr/api/professional-experience/?sort=desc&limit=4');
</script>