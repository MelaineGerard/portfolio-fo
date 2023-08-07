<template>
  <img :src="src" :alt="alt" />
</template>

<script setup>
  defineProps({
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    objectPosition: {
      type: String,
      default: 'center'
    }
  })
</script>

<style>
  img {
    border-radius: 1rem;
    width: 100%;
    height: 200px;
    object-fit: cover;
    object-position: v-bind(objectPosition);
  }
</style>