<template>
  <div class="grid-2">
    <div class="left">
      <slot name="left" />
    </div>
    <div class="right">
      <slot name="right" />
    </div>
  </div>
</template>

<style scoped>
.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.grid-2 > * {
  background: #fff;
  padding: 2rem 1rem;
}

@media screen and (max-width: 48rem) {
  .grid-2 {
    grid-template-columns: none;
  }
}
</style>
