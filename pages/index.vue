<template>
  <div class="page">
    <container-hero />
    <div class="main-content">
      <h2 id="content-start">{{ data.usp_heading }}</h2>
      <p v-for="(content, idx) in data.intro_tekst" :key="'intro' + idx">{{ content.text }}</p>
      <ul class="usps">
        <li v-for="(content, idx) in data.intro_usp" :key="'usps' + idx">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" aria-hidden="true"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill="currentColor" d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"/></svg>
          <span>{{ content.usp_tekst }}</span>
        </li>
      </ul>
      <prismic-rich-text :field="data.usp_voetnoot" class="usp-voetnoot" />
      <h2>{{ data.intro_heading[0].text }}</h2>
      <p v-for="(content, idx) in data.intro_voetnoot" :key="'intro_voetnoot' + idx">{{ content.text }}</p>
      <div class="ctas">
        <a href="tel:+0031633418680">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill="currentColor" d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"/></svg>
          <span>Bel mij direct</span>
        </a>
      </div>
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
        <image-set
          :src="data.doelstelling_foto.url"
          :alt="data.doelstelling_foto.alt"
          :maxWidth="data.doelstelling_foto.dimensions.width"
          :maxHeight="data.doelstelling_foto.dimensions.height"
          :minWidth="200"
          :count="10"
        />
      </div>
      <div class="lesmethode">
        <h2>{{ data.lesmethode_heading }}</h2>
        <image-set
          :src="data.lesmethode_foto.url"
          :alt="data.lesmethode_foto.alt"
          :maxWidth="data.lesmethode_foto.dimensions.width"
          :maxHeight="data.lesmethode_foto.dimensions.height"
          :minWidth="200"
          :count="10"
        />
        <div>
          <p v-for="(content, idx) in data.lesmethode_tekst" :key="'lesmethode' + idx">{{ content.text }}</p>
          <ul class="usps">
            <li v-for="(content, idx) in data.lesmethode_lijst" :key="'lesmethode_lijst' + idx">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" aria-hidden="true"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill="currentColor" d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"/></svg>
              <span>{{ content.lijst_tekst }}</span>
            </li>
          </ul>
          <p v-for="(content, idx) in data.lesmethode_voetnoot" :key="'intro_voetnoot' + idx">{{ content.text }}</p>
        </div>
      </div>
      <div class="theorie">
        <h2>{{ data.theorie_heading }}</h2>
        <image-set
          :src="data.theorie_foto.url"
          :alt="data.theorie_foto.alt"
          :maxWidth="data.theorie_foto.dimensions.width"
          :maxHeight="data.theorie_foto.dimensions.height"
          :minWidth="200"
          :count="10"
        />
        <div>
          <p v-for="(content, idx) in data.theorie_tekst" :key="'theorie' + idx">{{ content.text }}</p>
        </div>
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
        <div>
          <p v-for="(content, idx) in data.duurzaamheid_tekst" :key="'duurzaamheid' + idx">{{ content.text }}</p>
        </div>
      </div>
      <div>
        <h2>{{ data.faq_heading }}</h2>
        <div v-for="(item, idx) in data.faq_items" :key="'faq' + idx">
          <container-qa
            :question="item.vraag"
            :answer="item.antwoord"
          />
        </div>
      </div>
      <div class="handige-links">
        <h2>Handige links</h2>
        <a
          v-for="(content, idx) in data.handige_links"
          :key="'handige_links' + idx"
          :href="content.link"
        >{{ content.link_tekst }}</a>
      </div>
      <div class="corona">
        <h2>{{ data.corona_heading }}</h2>
        <image-set
          :src="data.corona_foto.url"
          :alt="data.corona_foto.alt"
          :maxWidth="data.corona_foto.dimensions.width"
          :maxHeight="data.corona_foto.dimensions.height"
          :minWidth="200"
          :count="10"
        />
        <div>
          <p v-for="(content, idx) in data.corona_tekst" :key="'corona' + idx">{{ content.text }}</p>
        </div>
      </div>
    </div>
    <footer>
      <div class="container">
        <div class="card-grid">
          <div class="left">
            <h3>Contact</h3>
            <a href="tel:+0031633418680">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill="currentColor" d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"/></svg>
              <span>06 334  18 680</span>
            </a>
            <a href="mailto:info@rijschoolgorredijk.nl">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill="currentColor" d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"/></svg>
              <span>info@rijschoolgorredijk.nl</span>
            </a>
            <a href="mailto:info@rijschoolgorredijk.nl">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill="currentColor" d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/></svg>
              <span>Facebook</span>
            </a>
            <a href="mailto:info@rijschoolgorredijk.nl">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
              <span>Instagram</span>
            </a>
          </div>
          <div class="mid">
            <h3>Adres</h3>
            <p>De Buorren 21</p>
            <p>8408 HG Lippenhuizen (FR)</p>
            <p>KvK 86570358</p>
            <p>CBR 2086N2</p>
          </div>
          <div class="right">
            <h3>Voorwaarden</h3>
            <a href="/Algemene-voorwaarden-Gorredijk.pdf">Algemene voorwaarden</a>
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
        { rel: 'canonical', href: 'https://rijschoolgorredijk.nl/' }
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

.ctas {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-weight: 800;
}

.ctas > a {
  background: var(--color-primary);
  color: #fff;
  padding: 1rem 2rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.ctas > a svg {
  max-height: 20px;
}

.ctas > a:nth-child(even) {
  background: var(--color-secondary);
  color: #000;
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

.grid-fill-vertical {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.contrast-primary {
  background: var(--color-primary);
  color: #fff;
  padding: 3rem 0;
}

.main-content p,
.prismic-content p {
  margin: 0 1rem 1rem 1rem;
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

.usps li {
  display: grid;
  grid-template-columns: 16px 1fr;
  align-items: center;
  gap: 0.625rem;
  margin: 2rem;
  color: var(--color-primary);
  font-weight: 800;
}

.usps li svg {
  width: 12px;
  height: auto;
  background: var(--color-secondary);
  padding: 2px;
}

.usps li span {
  font-style: italic;
}

.usp-voetnoot {
  margin: 3rem 0;
  padding: 0 4rem;
}

.over-mij-heading {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.over-mij-heading h2 {
  margin-bottom: 2rem;
  border-bottom: var(--color-primary) solid 4px;
}

.tarieven {
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin: 0 2rem;
  gap: 2rem;
}

.theorie,
.lesmethode,
.duurzaamheid,
.corona {
  grid-column: 1 / -1;
  padding: 0 1rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 4fr;
  gap: 2rem;
}

.duurzaamheid,
.corona {
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
}

.lesmethode img,
.duurzaamheid img,
.theorie img {
  filter: drop-shadow(0 0 1.75rem rgb(0, 0, 0));
  will-change: transform;
  transition: transform 0.2s ease-out;
}

.lesmethode img:hover,
.duurzaamheid img:hover,
.theorie img:hover {
  transform: scale(1.1);
}

.handige-links {
  overflow: hidden;
}

.handige-links a {
  margin: 0 2rem 1rem 2rem;
  font-weight: bold;
  line-height: 1.5;
  display: block;
  transform-origin: left;
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

@media screen and (max-width: 64rem) {
  .container {
    padding: 1rem;
  }

  .card-grid,
  .prismic-content,
  .duurzaamheid,
  .theorie,
  .lesmethode,
  .corona {
    display: flex;
    flex-direction: column;
    margin: 2rem 0;
  }

  .duurzaamheid img {
    margin-bottom: 3rem;
  }

  .tarieven {
    grid-template-columns: 2fr 1fr;
  }
}
</style>
