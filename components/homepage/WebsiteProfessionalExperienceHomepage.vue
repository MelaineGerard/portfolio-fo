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

<script setup lang="ts">
import WebsiteAboutPersonalInfosHomepage from "~/components/homepage/WebsiteAboutPersonalInfosHomepage.vue";

// TODO: Remplacer cela par un call sur l'API qui récupère les données
const professionalExperiences = [
  {
    type: "Alternance",
    enterprise: "Additi Média",
    description: "Alternance associé à mon bachelor informatique consitant à améliorer et maintenir des applications web symfony.",
    startDate: "Septembre 2022",
    endDate: "Présent",
    url: "https://additimedia.ouest-france.fr/qui-sommes-nous/"
  },
  {
    type: "Stage",
    enterprise: "Dyjix",
    description: "Stage dans le cadre de ma formation consistant à réaliser un panel de gestion d'inventaire sous la forme d'une application web en Python.",
    startDate: "Mars 2022",
    endDate: "Avril 2022",
    url: "https://dyjix.eu/"
  },
  {
    type: "Stage",
    enterprise: "OuiHeberg",
    description: "Stage dans le cadre de ma formation consistant à modifier le panel Pterodactyl en remplaçant l'utilisation de Docker par Kubernetes.",
    startDate: "Mai 2021",
    endDate: "Juin 2021",
    url: "https://ouiheberg.com/"
  }
];
</script>