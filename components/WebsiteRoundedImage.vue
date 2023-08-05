t<template>
  <img :src="src" :alt="alt" />
</template>

<style lang="scss" scoped>
  img {
    border-radius: 50%;
    width: v-bind(width);
    height: v-bind(height);
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