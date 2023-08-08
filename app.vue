<template>
  <main>
    <WebsiteNavbar />
    <div class="content">
      <NuxtPage />
    </div>
    <WebsiteFooter />
  </main>
</template>

<script setup lang="ts">
useSeoMeta({
  // General
  title: 'Melaine Gérard - Portfolio',
  description: 'Portfolio de Melaine Gérard, développeur web fullstack.',
  author: 'Melaine Gérard',

  // Open Graph
  ogTitle: 'Melaine Gérard - Portfolio',
  ogSiteName: 'Melaine Gérard - Portfolio',
  ogDescription: 'Portfolio de Melaine Gérard, développeur web fullstack.',
  ogUrl: 'https://melaine-gerard.fr',
  ogType: 'website',

  // Twitter
  twitterTitle: 'Melaine Gérard - Portfolio',
  twitterDescription: 'Portfolio de Melaine Gérard, développeur web fullstack.',
  twitterCard: 'summary',
  twitterSite: '@SkitDevelopper',
})
</script>