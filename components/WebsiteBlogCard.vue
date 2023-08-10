<template>
  <div class="card">
    <div class="title">
      <h3>{{ title }}</h3>
    </div>
    <div class="description">
      {{ description }}
    </div>
    <div class="dates">
      Mis à jour le {{ formatDate(dateUpdated) }}
    </div>
    <div class="url">
      <NuxtLink :to="'/blog/' + id">
        <button class="discover-button">
          Lire l'article
          <font-awesome-icon :icon="['fas', 'arrow-right']" />
        </button>
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "@/assets/css/colors";
  .card {
    border-radius: 10px;
    background: $background-secondary;
    padding:  1.75rem 1.5rem;
    display: flex;
    flex-direction: column;

    .title {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      margin-bottom: 0.75rem;

      h3 {
        font-weight: 700;
        margin: 0 0.5rem 0 0;
        font-size: 1.7rem;
        padding: 0;
      }

      .post-type {
        font-weight: 400;
        justify-self: flex-end;
      }

      @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;

      }
    }
    .description {
      margin-bottom: 0.75rem;
    }

    .dates {
      margin-bottom: 0.75rem;
      font-weight: 300;
      font-size: 0.9rem;
    }

    .discover-button {
      background: $color-shadow;
      color: $color-text;
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
import dayjs from 'dayjs';

defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  dateUpdated: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  }
})

function formatDate(dateString: string): String
{
  const date = dayjs(dateString);

  return date.format('DD/MM/YYYY - HH:mm')
}
</script>