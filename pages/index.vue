<template>
  <div class="page">
    <container-hero />
    <div class="main-content">
      <h2 id="content-start">{{ data.intro_heading }}</h2>
      <p v-for="(content, idx) in data.intro_tekst" :key="'intro' + idx">{{ content.text }}</p>
    </div>
    <div class="container prismic-content">
      <div class="contrast">
        <div class="over-mij-heading">
          <h2>{{ data.over_mij_heading }}</h2>
          <image-set
            :src="data.over_mij_foto.url"
            :alt="data.over_mij_foto.alt"
            :maxWidth="data.over_mij_foto.dimensions.width"
            :maxHeight="data.over_mij_foto.dimensions.height"
            :minWidth="200"
            :count="10"
          />
        </div>
        <p v-for="(content, idx) in data.over_mij_tekst" :key="'overmij' + idx">{{ content.text }}</p>
      </div>
      <div class="contrast-primary">
        <h2>{{ data.doelstelling_heading }}</h2>
        <p v-for="(content, idx) in data.doelstelling_tekst" :key="'doelstelling' + idx">{{ content.text }}</p>
      </div>
      <div>
        <h2>{{ data.lesmethode_heading }}</h2>
        <p v-for="(content, idx) in data.lesmethode_tekst" :key="'lesmethode' + idx">{{ content.text }}</p>
      </div>
      <div>
        <div class="theorie-heading">
          <h2>{{ data.theorie_heading }}</h2>
          <image-set
            :src="data.theorie_foto.url"
            :alt="data.theorie_foto.alt"
            :maxWidth="data.theorie_foto.dimensions.width"
            :maxHeight="data.theorie_foto.dimensions.height"
            :minWidth="200"
            :count="10"
          />
        </div>
        <p v-for="(content, idx) in data.theorie_tekst" :key="'theorie' + idx">{{ content.text }}</p>
      </div>
      <div class="contrast-primary">
        <h2>{{ data.tarieven_heading }}</h2>
        <div v-for="(tarief, idx) in data.tarieven_data" :key="'tarieven' + idx" class="tarieven">
          <p>{{ tarief.tarief_beschijving }}</p>
          <p>€ {{ tarief.tarief }}</p>
        </div>
        <div class="aanvulling">
          <p v-for="(content, idx) in data.tarief_aanvulling" :key="'tarief_aanvulling' + idx">{{ content.text }}</p>
        </div>
      </div>
      <div class="contrast">
        <h2>{{ data['2todrive_heading'] }}</h2>
        <p v-for="(content, idx) in data['2todrive_tekst']" :key="'todrive' + idx">{{ content.text }}</p>
      </div>
      <div class="duurzaamheid">
        <h2>{{ data.duurzaamheid_heading }}</h2>
        <image-set
          :src="data.duurzaamheid_foto.url"
          :alt="data.duurzaamheid_foto.alt"
          :maxWidth="data.duurzaamheid_foto.dimensions.width"
          :maxHeight="data.duurzaamheid_foto.dimensions.height"
          :minWidth="200"
          :count="10"
        />
        <p v-for="(content, idx) in data.duurzaamheid_tekst" :key="'duurzaamheid' + idx">{{ content.text }}</p>
      </div>
      <div>
        <h2>{{ data.corona_heading }}</h2>
        <p v-for="(content, idx) in data.corona_tekst" :key="'corona' + idx">{{ content.text }}</p>
      </div>
      <div class="handige-links">
        <h2>Handige links</h2>
        <a
          v-for="(content, idx) in data.handige_links"
          :key="'handige_links' + idx"
          :href="content.link"
        >{{ content.link_tekst }}</a>
      </div>
    </div>
    <footer>
      <div class="container">
        <div class="card-grid">
          <div class="left">
            <h3>Contact</h3>
            <a href="href:+0031633418680">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill="currentColor" d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"/></svg>
              <span>06 334  18 680</span>
            </a>
            <a href="href:+00316">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
              <span>WhatsApp</span>
            </a>
            <a href="mailto:info@rijschoolgorredijk.nl">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill="currentColor" d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"/></svg>
              <span>info@rijschoolgorredijk.nl</span>
            </a>
          </div>
          <div class="mid">
            <h3>Adres</h3>
            <p>De Buorren 21</p>
            <p>8408HG Lippenhuizen</p>
            <p>Friesland</p>
          </div>
          <div class="right">
            <h3>Voorwaarden</h3>
            <n-link to="/Algemene-voorwaarden-Gorredijk.pdf">Algemene voorwaarden</n-link>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'default',
  name: 'IndexPage',
  data() {
    return {
      data: this.$store.state.prismic,
    }
  },
  head() {
    const { path } = this.$route;
    const pathWithSlash = path.endsWith('/') ? path : `${path}/`;
    let canonical = `${this.$config.domain}${pathWithSlash}`;
    return {
      title: this.$store.state.prismic.pagina_titel,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$store.state.prismic.pagina_beschrijving,
        },
      ],
      link: [
        { rel: 'canonical', href: canonical }
      ],
    };
  },
})
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
}

.page img {
  max-width: 100%;
  height: auto;
}

.card-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 4rem;
  padding: 4rem 0;
}

.container {
  padding: 2rem 4rem;
}

.contrast {
  background: var(--color-secondary);
  padding: 3rem 0;
}

.contrast-primary {
  background: var(--color-primary);
  color: #fff;
  padding: 3rem 0;
}

.main-content p,
.prismic-content p {
  margin-bottom: 1rem;
}

#content-start {
  padding: 1rem 0;
  margin: 4rem 0 2rem 0;
}

.main-content {
  max-width: 58rem;
  padding: 0 2rem;
  margin: 0 auto 4rem auto;
}

.prismic-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;
  row-gap: 6rem;
}

.prismic-content > div {
  padding-left: 2rem;
  padding-right: 2rem;
}

.prismic-content a {
  color: var(--color-primary);
  display: inline-block;
  transition: transform 0.2s ease-in;
  will-change: transform;
}

.prismic-content a:hover {
  transform: scale(1.2);
}

.over-mij-heading,
.theorie-heading {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.over-mij-heading h2 {
  margin-bottom: 0;
  border-bottom: var(--color-primary) solid 4px;
}

.tarieven {
  display: grid;
  grid-template-columns: 1fr 4fr;
  margin: 0 2rem;
}

.duurzaamheid {
  grid-column: 1 / -1;
  padding: 0 1rem;
  max-width: 60rem;
  margin: 0 auto;
  text-align: center;
}

.duurzaamheid img {
  display: block;
  margin: 1rem auto;
}

.handige-links a {
  margin: 0 2rem 1rem 2rem;
  font-weight: bold;
  line-height: 1.5;
}

.page footer {
  background: var(--color-primary);
  color: #fff;
  overflow: hidden;
  margin-top: 2rem;
}

.page footer .card-grid > div {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  line-height: 1;
}

.page footer p,
.page footer a {
  font-weight: bold;
  padding: 0 2rem;
}

.page footer a {
  text-decoration: none;
  transition: transform 0.2s ease-out;
  transform-origin: left;
  will-change: transform;
  color: #fff;
}

.page footer a:hover {
  transform: scale(1.1);
}

.page footer .left a {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.5rem;
  align-items: center;
}

.page footer .left a svg {
  width: 20px;
  height: auto;
  color: var(--color-secondary);
}

@media screen and (max-width: 48rem) {
  .container {
    padding: 1rem 2rem;
  }

  .card-grid,
  .prismic-content {
    grid-template-columns: none;
  }

  .tarieven {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
