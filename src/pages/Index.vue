<template lang="pug">
  Layout
    article(class="home-page-content flex")
      figure(class="mobile-image-wrapper")
        g-image(
          :src="$page.heroImage.image"
          :alt="$page.heroImage.imageAltText"
        )
      section(class="home-page-text")
        section(class="section-one-wrapper container flex")
          section(
            class="section-one"
            v-html="$page.sectionOne.content"
          )
          figure(
            v-if="$page.sectionOne.image"
            class="itemImageWrapper"
          )
            g-image(
              :src="$page.sectionOne.image"
              :alt="$page.sectionOne.imageAltText"
            )
        section(class="section-two-wrapper container flex")
          section(
            class="section-two"
            v-html="$page.sectionTwo.content"
          )
          figure(
            v-if="$page.sectionTwo.image"
            class="itemImageWrapper"
          )
            g-image(
              :src="$page.sectionTwo.image"
              :alt="$page.sectionTwo.imageAltText"
            )
        section(class="section-three-wrapper container flex")
          section(
            class="section-three"
            v-html="$page.sectionThree.content"
          )
          figure(
            v-if="$page.sectionThree.image"
            class="itemImageWrapper"
          )
            g-image(
              :src="$page.sectionThree.image"
              :alt="$page.sectionThree.imageAltText"
            )


</template>

<page-query>

query {
  sectionOne: homePage (path: "/markdowns/home-page/section-one/content") {
    image(
      width: 500
      height: 500
      quality: 90
      fit: outside
    )
    imageAltText
    content
  }
  sectionTwo: homePage (path: "/markdowns/home-page/section-two/content") {
    image(
      width: 500
      height: 500
      quality: 90
      fit: outside
    )
    imageAltText
    content
  }
  sectionThree: homePage (path: "/markdowns/home-page/section-three/content") {
    image(
      width: 500
      height: 500
      quality: 90
      fit: outside
    )
    imageAltText
    content
  }
  heroImage: homePage (path: "/markdowns/home-page/hero-image") {
    image(
      quality: 100
      width: 1000
      height: 560
    )
    imageAltText
  }
  info: metadata {
    home {
      title
      description
    }
    siteUrl
    siteName
    siteDescription
  }
  logo: globalLayout (path: "/markdowns/global-layout/header/content") {
    logo
  }
}

</page-query>

<script>


export default {
  metaInfo() {
    return {
      title: `${this.$page.info.home.title}`,
      link: [
        {
          rel: 'canonical', href: `${this.$page.info.siteUrl}${this.$route.fullPath}`
        }
      ],
      meta: [
        { property: 'og:title', content: `${this.$page.info.home.title}` },
        { property: 'og:type', content: 'website' },
        { property: 'og:description', content: `${this.$page.info.home.description}` },
        { property: 'og:url', content: `${this.$page.info.siteUrl}${this.$route.fullPath}` },
        { property: 'og:image', content: `${this.$page.info.siteUrl}${this.$page.heroImage.image.src}` },
        { property: 'og:image:alt', content: `${this.$page.heroImage.imageAltText}` },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { key: 'description', name: 'description', content: `${this.$page.info.home.description}` }
      ],
      script: [{
        type: 'application/ld+json',
        json: {
          "@context": "https://schema.org", 
          "@graph": [
            {
              "@type": "WebSite",
              "@id": `${this.$page.info.siteUrl}/#website`,
              "name": `${this.$page.info.siteName}`,
              "url": `${this.$page.info.siteUrl}`,
              "publisher": {
                "@type": "Restaurant", 
                "@id": `${this.$page.info.siteUrl}/#westmont`,
                "name": `${this.$page.info.siteName}`, 
                "logo": `${this.$page.logo.logo}`,
                "menu": `${this.$page.info.siteUrl}/menu`,
                "image": {
                  "@type": "ImageObject",
                  "@id": `${this.$page.info.siteUrl}/#primaryimage`
              },
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                      "Monday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday"
                    ],
                    "opens": "11:00",
                    "closes": "20:00"
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Sunday",
                    "opens": "11:00",
                    "closes": "18:00"
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Tuesday",
                    "opens": "00:00",
                    "closes": "00:00"
                  }
                ], 
                "telephone": "(856)-885-2460",
                "url": `${this.$page.info.siteUrl}`,
                "sameAs": [
                  "https://www.instagram.com/darssteaks/",
                  "https://www.facebook.com/darssteaks/",
                ],
                "hasMap": "https://goo.gl/maps/YT9oDhjWUDifm1ab8",
                "email": "info@darssteaks.com",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "142 Haddon Avenue",
                  "addressLocality": "Haddon Township",
                  "addressRegion": "NJ",
                  "postalCode": "08108",
                  "addressCountry": "US"
                  },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "39.9101843",
                  "longitude": "-75.0494215"
                },
                "servesCuisine": [ "Cheesesteaks" ], 
                "priceRange": "$",
                "paymentAccepted": "Cash, Credit Card",
                "currenciesAccepted": "USD",
                "acceptsReservations": "No",
                "description": `${this.$page.info.siteDescription}`
              }
            },
            {
              "@type": "ImageObject",
              "@id": `${this.$page.info.siteUrl}/#primaryimage`,
              "url": `${this.$page.info.siteUrl}${this.$page.heroImage.image.src}`
            },
            {
              "@type": "WebPage",
              "@id": `${this.$page.info.siteUrl}/#webpage`,
              "url": `${this.$page.info.siteUrl}`,
              "inLanguage": "en-US",
              "name": `${this.$page.info.home.title} | ${this.$page.info.siteName}`,
              "isPartOf": {
                "@id": `${this.$page.info.siteUrl}/#website`
              },
              "primaryImageOfPage": {
                "@id": `${this.$page.info.siteUrl}/#primaryimage`
              },
              "description": `${this.$page.info.home.description}`
            }
          ]
        }
      }]
    }
  }
}
</script>

<style scoped>

/* Style contexts */

section.home-page-text {
  width: 100%;
  max-width: none;
  background: #000;
}

.home-page-text >>> p {
  font-weight:600;
}

section.home-page-text >>> section.container {
  max-width: none;
  padding-left: 0;
  padding-right: 0;
  margin: 0.7rem 0.7rem;
}

/* All <section> tags wrapping each home-page-section */
.section-one, .section-two, .section-three {
  padding-top: 1rem;
  padding-bottom: 1rem;
  max-width: none;
  width: 95%;
  margin: 0 auto;
}

.itemImageWrapper {
  max-width: 80%;
}

/* Padding between <h1>, <h2>, <p> within each text section */
section.home-page-text >>> section * + * {
  padding-top: 0.8rem;
}

.section-one-wrapper, .section-two-wrapper, .section-three-wrapper {
  flex-flow: column nowrap;
}

.section-one-wrapper {
  color: #542825;
  background: #fff;
  box-shadow: 1px 1px 2px #004BAD, -1px -1px 2px #004BAD;
}

/* Need to set background colors for different sections on wrappers for each */
.section-two-wrapper {
  color: white;
  background: #004BAD;
  box-shadow: 1px 1px 2px, -1px -1px 2px;
}

.section-three-wrapper {
  color: #d3effc;
  background: #500f0f;
  box-shadow: 1px 1px 2px, -1px -1px 2px;

}

.section-one >>> h1 {
  color: #004BAD;
  text-shadow: 1px 1px 2px #1F85B7;
}

.section-one >>> h2 {
  color: #000;
  text-shadow: 1px 1px 2px #f9c3c0;
}

.section-two >>> p {
  color: #fff;
}

.section-two >>> h1 {
  text-shadow: 1px 1px 2px #ce1e1e;
}

.section-two >>> h2 {
  text-shadow: 1px 1px 2px #000;
}

.section-three >>> h1 {
  text-shadow: 1px 1px #566272;
}

/* */
figure.mobile-image-wrapper {
  max-width: none;
  width: 100%;
  border-top: 5px #EC2825 solid;
  border-bottom: 5px #EC2825 solid;
}

/* Make the mobile image take up its whole parent <figure> container */
figure.mobile-image-wrapper >>> img {
  width: 100%;
  height: 100%;
}

article.home-page-content {
  max-width: none;
  flex-flow: column nowrap;
}

@media (min-width: 760px) {
  .section-one-wrapper, .section-two-wrapper, .section-three-wrapper {
    flex-flow: row nowrap;
  }

  .section-one, .section-two, .section-three, .itemImageWrapper {
    margin: 0 auto;
    max-width: 60ch;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  .home-page-text >>> p {
    font-weight:400;
  }
}

/* @media (min-width: 1200px) {

} */


</style>
