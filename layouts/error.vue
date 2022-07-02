<template>
  <div class="error-page">
    <h1 v-if="error.statusCode === 404">Pagina niet gevonden</h1>
    <h1 v-else>Er is een fout opgetreden</h1>
    <NuxtLink to="/">Terug naar de hoofdpagina</NuxtLink>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error' // you can set a custom layout for the error page
  }
</script>

<style scoped>
.error-page {
  display: grid;
  grid-template-rows: 1fr auto;
  align-items: center;
  justify-content: center;
}

.error-page h1 {
  margin-top: 3rem;
}
</style>
