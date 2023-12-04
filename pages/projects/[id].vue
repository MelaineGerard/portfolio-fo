<template>
  <div v-if="project != null">
    <div class="title">
      {{ project.data.name }}
    </div>

    <div class="content" v-html="$mdRenderer.render(project.data.content)"></div>
    <NuxtLink :href="project.data.link">
      <button class="discover-button">
        Découvrir
        <font-awesome-icon :icon="['fas', 'external-link-alt']"/>
      </button>
    </NuxtLink>
  </div>
</template>

<script setup>
  import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

  const route = useRoute();

  const { data: project } = useFetch(`https://portfolio-bo.melaine-gerard.fr/items/Project/${route.params.id}`);
</script>

<style lang="scss" scoped>
@import "@/assets/css/colors";

.discover-button {
  background: $color-shadow;
  color: $color-text;
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  float: right;

  &:hover {
    background: $color-hover;
  }
}
</style>