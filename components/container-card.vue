<template>
  <div class="card">
    <slot />
  </div>
</template>

<style scoped>
.card {
  display: grid;
  background: #eee;
  padding-top: 2rem;
}

.card h2 {
  text-align: center;
  margin-top: 2rem;
}

.card p {
  padding: 0 2rem 2rem 2rem;
}

.card img {
  max-width: 100%;
  height: auto;
  margin: 0 auto;
}
</style>
