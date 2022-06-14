<template>
  <div class="hero">
    <img src="~assets/images/hero.jpg" alt="Uw instructeur Johan">
    <img class="logo" src="~assets/images/logo.svg" alt="Rijschool Gorredijk logo">
    <div class="overlay">
      <h1>Hier komt goeie SEO tekst</h1>
      <container-cta to="#" text="Neem direct contact op" />
      <svg @click="handleScrollToContent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"/></svg>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    handleScrollToContent() {
      document.getElementById('content-start')?.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }
})
</script>

<style scoped>
.hero {
  display: grid;
}

.hero img,
.overlay {
  grid-row: 1;
  grid-column: 1;
}

.hero img {
  width: 100%;
  max-height: 80vh;
  object-fit: cover;
  object-position: bottom;
}

.logo {
  opacity: 0.9;
  transform: scale(0.9);
}

.overlay {
  margin: auto;
  display: grid;
  gap: 2rem;
}

.overlay h1,
.overlay svg {
  filter: drop-shadow(0 0 1.75rem #fff);
  margin: auto;
}

.overlay h1 {
  text-align: center;
}

.overlay svg {
  width: calc(384px / 7);
  height: calc(512px / 7);
  animation-name: bounce-2;
  animation-timing-function: ease;
  animation-duration: 4s;
  animation-iteration-count: infinite;
}

.overlay > div {
  margin: 0 auto;
  position: relative;
  z-index: 1;
  opacity: 0.7;
  will-change: opacity;
  transition: opacity 0.2s ease-in;
}

.overlay > div:hover {
  opacity: 1;
}

@keyframes bounce-2 {
  0%   { transform: translateY(0); }
  50%  { transform: translateY(20px); }
  100% { transform: translateY(0); }
}

@media screen and (max-width: 48rem) {
  .hero {
    display: block;
  }
}
</style>
