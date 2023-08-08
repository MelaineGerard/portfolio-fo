<template>
  <div class="grid border-top-gray mt-4 p-4">
    <h2>{{ title }}</h2>
    <div class="col-span-2">
     <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
  defineProps({
    title: {
      type: String,
      required: true,
    }
  });
</script>

<style lang="scss">
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

.col-span-2 {
  grid-column: span 2;
}

.border-top-gray {
  border-top: 1px solid #c5c5c5;
}

@media screen and (max-width: 768px) {
  .grid {
    grid-template-columns: repeat(1, 1fr);
  }

  .col-span-2 {
    grid-column: span 1;
  }
}
</style>