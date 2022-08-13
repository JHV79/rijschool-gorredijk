const DOMAIN = 'https://rijschoolgorredijk.nl/'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Rijschool Gorredijk',
    htmlAttrs: {
      lang: 'nl'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Dé rijschool van Gorredijk en omstreken' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        type: 'application/ld+json',
        json: {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "logo": `${DOMAIN}logo.png`,
          "image": [
            `${DOMAIN}company-image.jpg`
          ],
          "@id": DOMAIN,
          "name": 'Rijschool Gorredijk',
          "url": DOMAIN,
          "email": 'info@rijschoolgorredijk.nl',
          "telephone": '+0031633418680',
          "openingHours": "Mo,Tu,We,Th,Fr,Sa,Su 08:00-17:00",
          "address":
          {
            "@type": "PostalAddress",
            "streetAddress": 'De Buorren 21',
            "addressLocality": 'Lippenhuizen',
            "addressRegion": 'FR',
            "postalCode": '',
            "addressCountry": 'Nederland'
          },
          "geo":
          {
            "@type": "GeoCoordinates",
            "latitude": '53.016390',
            "longitude": '6.084580'
          },
        }
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/google-fonts',
    '@nuxtjs/prismic'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  generate: {
    fallback: true
  },

  googleFonts: {
    preload: true,
    download: true,
    overwriting: false,
    families: {
      Poppins: true
    }
  },
  prismic: {
    endpoint: 'https://rijschoolgorredijk.cdn.prismic.io/api/v2',
    modern: true
    // see documentation for more!
  }
}
