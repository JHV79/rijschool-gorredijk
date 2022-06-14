<template>
  <div class="page">
    <container-hero />
    <div class="container">
      <h2 id="content-start">Rijschool Gorredijk</h2>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio corrupti, neque autem delectus dolorem eligendi omnis quam eveniet commodi culpa possimus, explicabo doloremque perspiciatis? Labore aliquam molestias quibusdam sed nam.</p>
      <div class="card-grid">
        <container-card>
          <img src="https://via.placeholder.com/400x300.png" alt="Uw instructeur Johan">
          <h2>Info kaartje</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae quod, suscipit fugiat nihil sapiente quaerat dicta, tempore iure laboriosam quibusdam corrupti consectetur cupiditate quo cumque nobis aut nostrum blanditiis voluptatum?</p>
        </container-card>
        <container-card>
          <img src="https://via.placeholder.com/400x300.png" alt="Uw instructeur Johan">
          <h2>Info kaartje</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae quod, suscipit fugiat nihil sapiente quaerat dicta, tempore iure laboriosam quibusdam corrupti consectetur cupiditate quo cumque nobis aut nostrum blanditiis voluptatum?</p>
        </container-card>
        <container-card>
          <img src="https://via.placeholder.com/400x300.png" alt="Uw instructeur Johan">
          <h2>Info kaartje</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae quod, suscipit fugiat nihil sapiente quaerat dicta, tempore iure laboriosam quibusdam corrupti consectetur cupiditate quo cumque nobis aut nostrum blanditiis voluptatum?</p>
        </container-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'default',
  name: 'IndexPage'
})
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
}

.container {
  padding: 2rem 4rem;
}

.card-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 4rem;
  padding: 4rem 0;
}

@media screen and (max-width: 48rem) {
  .card-grid {
    grid-template-columns: none;
  }
}
</style>
