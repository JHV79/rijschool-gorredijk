<template>
  <div :style="styles">
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      styles: {
        '--color-primary': this.$store.state.prismic.primaire_kleur,
        '--color-secondary': this.$store.state.prismic.secundaire_kleur
      }
    }
  }
})

/*
    styles: {
      '--color-primary': this.$store.state.prismic.primaire_kleur,
      '--color-secondary': this.$store.state.prismic.secundaire_kleur
    }
*/
</script>

<style>
:root {
  --body-font-size: 1.2rem;
  --body-line-height: 1.2;
  --h1-font-size: 3rem;
  --h1-line-height: 1.1;
  --h2-font-size: 2.5rem;
  --h2-line-height: 1.1;
  --h3-font-size: 2rem;
  --h3-line-height: 1.1;
}

* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}

html {
  height: 100%;
  font-family: Poppins, Arial, Helvetica, sans-serif;
  font-size: 16px;
}

body {
  min-height: 100%;
  font-size: var(--body-font-size);
  line-height: var(--body-line-height);
}

/* body * {
  outline: blue solid 3px;
} */

h1,
h2,
h3 {
  margin-bottom: 2rem;
}

h1 {
  font-size: var(--h1-font-size);
  line-height: var(--h1-line-height);
}

h2 {
  font-size: var(--h2-font-size);
  line-height: var(--h2-line-height);
}

h3 {
  font-size: var(--h3-font-size);
  line-height: var(--h3-line-height);
}

@media screen and (max-width: 40rem) {
  html {
    font-size: 14px;
  }
}

@media screen and (max-width: 24rem) {
  :root {
    --body-font-size: 1.25rem;
    --h1-font-size: 2rem;
  }

  html {
    font-size: 11px;
  }
}
</style>
