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
        <h2>Il semblerait que tu te soit perdu. Suit ce loup pour retrouver ton chemin.</h2>
        <a href="https://minio-console.melaine-gerard.fr/api/v1/buckets/files/objects/download?preview=true&prefix=ZXJyb3IucG5n&version_id=null" target="_blank" title="Voir le dessin original">
          <WebsiteRoundedBorderImage
              src="https://minio-console.melaine-gerard.fr/api/v1/buckets/files/objects/download?preview=true&prefix=ZXJyb3JfY3JlZGl0cy5wbmc=&version_id=null"
              alt="Dessin de Solva représentant un loup. Réalisé dans le cadre de son donathon"
              width="30rem"
              height="100%"
          />
        </a>
        <p>Dessin par <a href="https://twitch.tv/catboat">Solva du Catboat</a></p>
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