<template>
    <div class="container" v-if="article?.data !== null && article?.data !== undefined">
        <h1 class="text-center">{{ article?.data.title }}</h1>
        <p class="text-center date">Dernière mise à jour le {{ formatDate(article?.data.date_updated) }}</p>
        <p class="text-center chapeau">{{ article?.data.description }}</p>
        <img :src="'https://portfolio-bo.melaine-gerard.fr/assets/' + article?.data.cover" alt="Image de couverture">
        <div class="blog-content" v-html="article?.data.content"></div>
    </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs';

const route = useRoute()
const id = route.params.id
const { data: article, error } = await useFetch(`https://portfolio-bo.melaine-gerard.fr/items/BlogPost/${id}`)

if (error.value !== null) {
    navigateTo('/blog')
}

function formatDate(dateString: string): String {
  const date = dayjs(dateString);

  return date.format('DD/MM/YYYY à HH:mm')
}
</script>

<style lang="scss" scoped>

.text-center {
    text-align: center;
}

.container {
    max-width: 1280px;
    margin: 0 auto;
}

img {
    width: 100%;
    height: auto;
    margin-bottom: 0.25rem;
}

.date {
    font-style: italic;
    margin-bottom: 1rem;
    font-size: 0.9rem;
}

.chapeau {
    margin-bottom: 1rem;
    font-size: 1.3rem;
    font-weight: 700;
}

.blog-content {
    font-size: 1.2rem;
    line-height: 1.5rem;
    text-align: justify;
}
</style>