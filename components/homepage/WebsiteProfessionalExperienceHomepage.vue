<template>
  <WebsiteTwoColumns title="Expériences professionelles">
    <WebsiteTwoColumnsGrid>
      <WebsiteProfessionalExperienceCard
          v-for="experience in professionalExperiences"
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
import { getProfessionalExperiences } from "~/services/ProfessionalExperienceService";

const professionalExperiences = await getProfessionalExperiences();
</script>