<template>
  <div class="card">
    <h3>{{ name }}</h3>
    <div class="description">
      {{ description }}
    </div>
    <div class="url">
      <a :href="url" target="_blank">
        <button class="discover-button">
          Découvrir
          <font-awesome-icon :icon="['fas', 'external-link-alt']"/>
        </button>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/colors";

.card {
  border-radius: 10px;
  background: $background-secondary;
  padding: 1.75rem 1.5rem;
  display: flex;
  flex-direction: column;

  h3 {
    font-weight: 700;
    margin: 0 0.5rem 0.75rem 0;
    font-size: 1.7rem;
    padding: 0;
  }

  .description {
    margin-bottom: 0.75rem;
  }
  .discover-button {
    background: $color-shadow;
    border: none;
    padding: 0.75rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      background: $color-hover;
      color: $color-text;
    }
  }
}
</style>

<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

defineProps({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  }
})
</script>