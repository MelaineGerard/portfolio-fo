<template>
    <div class="px-8">
        <h1 class="text-center">Liste des articles</h1>
        <div v-if="articles?.data.length !== 0" class="grid">
            <WebsiteBlogCard
                v-for="article in articles?.data"
                :key="article.title"
                :title="article.title"
                :description="article.description"
                :dateUpdated="article.date_updated"
                :id="article.id"
                :cover="article.cover"
            />
        </div>
    </div>
</template>

<script setup lang="ts" async>
const { data: articles } = await useFetch('https://portfolio-bo.melaine-gerard.fr/items/BlogPost?limit=-1&sort=-date_updated')
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