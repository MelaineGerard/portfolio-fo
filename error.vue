<template>
  <main>
    <WebsiteNavbar />
    <div class="content">
      <img src="https://dev.simple-bms.ovh/images/loup.svg" alt="">
      <h2>Tous les chemins mènent à la Meute... Sauf celui là !</h2>
      <p>Laisse moi te ramener auprès des miens.</p>
      <button @click="handleError">Revenir à l'accueil</button>
      <span class="text-muted">Erreur {{ error.statusCode }} - {{ error.statusMessage }}</span>
    </div>
    <WebsiteFooter />
  </main>
</template>

<script setup lang="ts">
defineProps({
  error: Object
})

const handleError = () => clearError({ redirect: '/' })
</script>

<style lang="scss" scoped>

@import "@/assets/css/colors";
  .content {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  img {
    max-width: 15rem;
    width: 100%;
    height: auto;
  }

  h2 {
    margin: 0;
    padding: 0.50rem;
  }

  p {
    margin: 0;
    padding: 0 0.5rem 0.5rem;
    font-size: 1.2rem;
  }

  button {
    padding: 0.5rem 0.75rem;
    background: $color-shadow;
    color: $color-text;
    border: none;
    border-radius: 0.50rem;
    transition: all 0.25s ease-in-out;
    cursor: pointer;

    &:hover {
      background: $color-hover;
    }
  }

  .text-muted {
    margin-top: 0.50rem;
    font-size: 0.7rem;
  }
</style>
