<template>
  <div class="cta">
    <n-link :to="to">{{ text }}</n-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    to: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
  }
})
</script>

<style scoped>
.cta {
  width: fit-content;
  background: #000;
  padding: 1rem 2rem;
}

.cta a {
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
}
</style>
