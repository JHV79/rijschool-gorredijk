<template>
  <div class="offset-2">
    <div class="first">
      <slot name="first" />
    </div>
    <div class="second">
      <slot name="second" />
    </div>
  </div>
</template>

<style scoped>
.offset-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  gap: 2rem;
}

.first,
.second {
  padding: 2rem;
  filter: drop-shadow(0 0 1.75rem rgb(216, 216, 216));
}

.first {
  background: var(--color-secondary);
  grid-column: 1;
  grid-row: 1 / 4;
}

.second {
  background: var(--color-primary);
  grid-column: 2;
  grid-row: 3 / -1;
  color: #fff;
}
</style>
