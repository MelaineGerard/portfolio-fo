<template>
  <img :src="src" :alt="alt" />
</template>

<style lang="scss" scoped>
  img {
    border-radius: 20px;
    width: 100%;
    height: v-bind(height);
    max-width: v-bind(width);
  }
</style>

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
    width: {
      type: String,
      default: '100px'
    },
    height: {
      type: String,
      default: '100px'
    }
  })
</script>