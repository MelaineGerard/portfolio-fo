<template>
  <div class="card">
    <div class="title">
      <h3>{{ enterprise }}</h3>
      <span class="post-type">{{ type }}</span>
    </div>
    <div class="description">
      {{ description }}
    </div>
    <div class="dates">
      {{ startDate }} - {{ endDate }}
    </div>
    <div class="url">
      <a :href="url" target="_blank">
        <button class="discover-button">
          Découvrir
          <font-awesome-icon :icon="['fas', 'external-link-alt']" />
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

defineProps({
  enterprise: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  }
})
</script>