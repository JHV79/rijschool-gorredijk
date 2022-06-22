<template>
  <div class="hero">
    <image-set
      :src="img.url"
      :alt="img.alt"
      :maxWidth="img.dimensions.width"
      :maxHeight="img.dimensions.height"
      :minWidth="200"
      :count="10"
    />
    <div class="overlay">
      <svg class="logo" viewBox="0 0 28.466375 11.589034" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
        <g transform="translate(-93.829698,-140.50612)">
          <path class="logo-primary" style="stroke-width:0.264583" d="m 100.02373,151.47595 c -3.322609,-1.0854 -5.079597,-2.18469 -5.845976,-3.65765 -0.535457,-1.02913 -0.460725,-1.80986 0.277184,-2.89579 2.630903,-3.87173 14.406922,-5.64367 23.163582,-3.48544 1.76643,0.43537 4.85941,1.66302 4.66917,1.85326 -0.0586,0.0586 -1.42119,-0.031 -3.02791,-0.19928 -2.17941,-0.22819 -3.69025,-0.23079 -5.94918,-0.0102 -9.58264,0.9357 -14.473651,4.58266 -10.91649,8.13982 0.88399,0.88399 0.88399,0.88399 0.18285,0.87215 -0.38563,-0.007 -1.53459,-0.28409 -2.55323,-0.61685 z" id="path179" />
          <path class="logo-secondary" style="stroke-width:0.16188" d="m 106.61771,151.50767 c -1.96621,-0.6866 -3.00593,-1.38198 -3.45945,-2.31375 -0.31686,-0.651 -0.27264,-1.14487 0.16403,-1.83181 1.55688,-2.44917 8.52552,-3.57006 13.7074,-2.20481 1.04531,0.2754 2.87563,1.05199 2.76305,1.17233 -0.0347,0.0371 -0.84101,-0.0196 -1.79181,-0.12606 -1.2897,-0.14435 -2.18376,-0.14599 -3.52051,-0.006 -5.67068,0.5919 -8.56501,2.89889 -6.46,5.14907 0.52311,0.55919 0.52311,0.55919 0.1082,0.5517 -0.2282,-0.004 -0.90812,-0.17971 -1.51091,-0.3902 z" id="path179-1" />
        </g>
      </svg>
      <div class="content">
        <h1>{{ heading }}</h1>
        <svg @click="handleScrollToContent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"/></svg>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data(){
    return {
      img: this.$store.state.prismic.header,
      heading: this.$store.state.prismic.header_heading
    }
  },
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

.hero img {
  width: 100%;
  max-height: 80vh;
  object-fit: cover;
  object-position: center;
}

.hero img,
.overlay {
  grid-row: 1;
  grid-column: 1;
}

.overlay h1,
.overlay svg {
  filter: drop-shadow(0 0 1.75rem #fff);
  margin: auto;
}

.overlay {
  display: grid;
  margin: auto;
}

.logo {
  display: block;
  max-width: 200px;
  height: auto;
  margin: auto;
}

.logo-primary {
  fill: var(--color-primary);
}

.logo-secondary {
  fill: var(--color-secondary);
}

.overlay h1 {
  margin-top: 2rem;
}

.content {
  text-align: center;
}

.content svg {
  width: calc(384px / 7);
  height: calc(512px / 7);
  animation-name: bounce-2;
  animation-timing-function: ease;
  animation-duration: 4s;
  animation-iteration-count: infinite;
}

@keyframes bounce-2 {
  0%   { transform: translateY(0); }
  50%  { transform: translateY(20px); }
  100% { transform: translateY(0); }
}

@media screen and (max-width: 48rem) {
  .hero img {
    object-position: 75% center;
  }
}

/*
.logo {
  opacity: 0.7;
  transform: scale(0.2) translateX(-2000px);
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
    margin-bottom: 4rem;
  }
} */
</style>
