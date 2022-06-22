export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Rijschool Gorredijk',
    htmlAttrs: {
      lang: 'en'
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
          "logo": `${process.env.SITE_DOMAIN}/logo.png`,
          "image": [`${process.env.SITE_DOMAIN}/company-image.jpg`,],
          "@id": process.env.SITE_DOMAIN,
          "name": process.env.SITE_JSONLD_NAME,
          "url": process.env.SITE_DOMAIN,
          "email": process.env.EMAIL,
          "telephone": process.env.TEL,
          "openingHours": "Mo,Tu,We,Th,Fr,Sa,Su 08:00-20:00",
          "address":
          {
            "@type": "PostalAddress",
            "streetAddress": process.env.SITE_JSONLD_STREET_ADDR,
            "addressLocality": process.env.SITE_JSONLD_LOCALITY,
            "addressRegion": process.env.SITE_JSONLD_REGION,
            "postalCode": process.env.SITE_JSONLD_POSTAL_CODE,
            "addressCountry": process.env.SITE_JSONLD_COUNTRY
          },
          "geo":
          {
            "@type": "GeoCoordinates",
            "latitude": process.env.SITE_JSONLD_LAT,
            "longitude": process.env.SITE_JSONLD_LONG
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

  googleFonts: {
    display: 'swap',
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
