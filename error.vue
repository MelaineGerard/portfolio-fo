<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <main>
    <WebsiteNavbar />
    <div class="content">
      <div class="flex">
        <h1>{{ error.statusCode }} - {{ error.message }}</h1>
        <h2>Il semblerait que tu te soit perdu. Laisse moi te raccompagner sur le droit chemin.</h2>
        <WebsiteButton @click="handleError">
          Retourner à l'accueil
        </WebsiteButton>
      </div>
    </div>
    <WebsiteFooter />
  </main>
</template>

<style lang="scss" scoped>
.flex {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
</style>
