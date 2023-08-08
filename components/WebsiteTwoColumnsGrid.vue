<template>
  <div class="grid">
    <slot/>
  </div>
</template>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
}

@media screen and (max-width: 768px){
  .grid {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>