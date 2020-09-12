<template lang="pug">
  Layout
    main(class="menu-page-content")
      MenuSection(
        menuNav=true
        @show-section="showSelectedSection"
        :sectionNames="menuSectionTitles"
        sectionPrimaryTitle="Our Menu"
        sectionPrimarySubtext="Click on each section below to view items"
      )
      MenuSection(
        v-show="currentSection === $page.steaksHeaders.title"
        :sectionPrimaryTitle="$page.steaksHeaders.title"
        :chooseProtein="$page.steaksHeaders.chooseProtein"
        :proteinChoices="$page.steaksHeaders.proteinChoices"
        :chooseRoll="$page.steaksHeaders.chooseRoll"
        :rollChoices="$page.steaksHeaders.rollChoices"
        :sectionMenuItems="$page.steaksContent.edges"
      )
      MenuSection(
        v-show="currentSection === $page.extrasHeaders.title"
        :sectionPrimaryTitle="$page.extrasHeaders.title"
        :sectionMenuItems="$page.extrasContent.edges"
      )
      MenuSection(
        v-show="currentSection === $page.friesHeaders.title"
        :sectionPrimaryTitle="$page.friesHeaders.title"
        :sectionMenuItems="$page.friesContent.edges"
      )
      MenuSection(
        v-show="currentSection === $page.sandwichesHeaders.title"
        :sectionPrimaryTitle="$page.sandwichesHeaders.title"
        :sectionMenuItems="$page.sandwichesContent.edges"
      )
      MenuSection(
        v-show="currentSection === $page.zeppoleHeaders.title"
        :sectionPrimaryTitle="$page.zeppoleHeaders.title"
        :sectionMenuItems="$page.zeppoleContent.edges"
      )
</template>

<page-query>

query {
  steaksHeaders: menuContent (path: "/markdowns/menu/steaks/headers") {
    title
    chooseProtein
    proteinChoices
    chooseRoll
    rollChoices
  }
  steaksContent: allMenuContent(
    filter: {
      fileInfo: {
        directory: {
          eq: "markdowns/menu/steaks"
        }
      }
    }, sortBy: "number", skip: 1, order: ASC) {
    edges {
      node {
        itemName
        price
        description
        itemImage(
          width: 500
          height: 500
          quality: 90
          fit: outside
        )
      }
    }
  }
  extrasHeaders: menuContent (path: "/markdowns/menu/extras/headers") {
    title
  }
  extrasContent: allMenuContent(
    filter: {
      fileInfo: {
        directory: {
          eq: "markdowns/menu/extras"
        }
      }
    }, sortBy: "number", skip: 1, order: ASC) {
    edges {
      node {
        itemName
        arrayItems
        price
      }
    }
  }
  friesHeaders: menuContent (path: "/markdowns/menu/fries/headers") {
    title
  }
  friesContent: allMenuContent(
    filter: {
      fileInfo: {
        directory: {
          eq: "markdowns/menu/fries"
        }
      }
    }, sortBy: "number", skip: 1, order: ASC) {
    edges {
      node {
        itemName
        price
        description
      }
    }
  }
  sandwichesHeaders: menuContent (path: "/markdowns/menu/sandwiches/headers") {
    title
  }
  sandwichesContent: allMenuContent(
    filter: {
      fileInfo: {
        directory: {
          eq: "markdowns/menu/sandwiches"
        }
      }
    }, sortBy: "number", skip: 1, order: ASC) {
    edges {
      node {
        itemName
        price
        description
      }
    }
  }
  zeppoleHeaders: menuContent (path: "/markdowns/menu/zeppole/headers") {
    title
  }
  zeppoleContent: allMenuContent(
    filter: {
      fileInfo: {
        directory: {
          eq: "markdowns/menu/zeppole"
        }
      }
    }, sortBy: "number", skip: 1, order: ASC) {
    edges {
      node {
        itemName
        price
        description
        itemImage(
          width: 500
          height: 500
          quality: 90
          fit: outside
        )
      }
    }
  }
  info: metadata {
    menu {
      title
      description
    }
    siteUrl
    siteName
  }
  logo: globalLayout (path: "/markdowns/global-layout/images/logo") {
    image
  }
  contact: globalLayout(path: "/markdowns/global-layout/contact-info/content") {
    phoneNumber
    email
    googleMapsLink
    instagramLink
    facebookLink
    streetAddress
    city
    state
    zip
  }
}

</page-query>

<script>

import MenuSection from '~/components/menu/MenuSection.vue'

export default {
  metaInfo() {
    return {
      title: `${this.$page.info.menu.title}`,
      link: [
        {
          rel: 'canonical', href: `${this.$page.info.siteUrl}${this.$route.fullPath}`
        }
      ],
      meta: [
        { property: 'og:title', content: `${this.$page.info.menu.title}` },
        { property: 'og:type', content: 'website' },
        { property: 'og:description', content: `${this.$page.info.menu.description}` },
        { property: 'og:url', content: `${this.$page.info.siteUrl}${this.$route.fullPath}` },
        { property: 'og:image', content: `${this.$page.info.siteUrl}${this.$page.steaksContent.edges[this.$page.steaksContent.edges.findIndex(x => x.node.itemName === 'Hot Chester')].node.itemImage.src}` },
        { property: 'og:image:alt', content: `The Hot Chester Cheesesteak` },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { key: 'description', name: 'description', content: `${this.$page.info.menu.description}` }
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
                "telephone": `${this.$page.contact.phoneNumber}`,
                "url": `${this.$page.info.siteUrl}`,
                "sameAs": [
                  `${this.$page.contact.instagramLink}`,
                  `${this.$page.contact.facebookLink}`,
                ],
                "hasMap": `${this.$page.contact.googleMapsLink}`,
                "email": `${this.$page.contact.email}`,
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": `${this.$page.contact.streetAddress}`,
                  "addressLocality": `${this.$page.contact.city}`,
                  "addressRegion": `${this.$page.contact.state}`,
                  "postalCode": `${this.$page.contact.zip}`,
                  "addressCountry": "US"
                  },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "39.9101843",
                  "longitude": "-75.0494215"
                },
                "servesCuisine": [ "American" ], 
                "priceRange": "$",
                "paymentAccepted": "Cash, Credit Card",
                "currenciesAccepted": "USD",
                "acceptsReservations": "No",
                "description": `${this.$page.info.siteDescription}`
              }
            },
            {
              "@type": "ImageObject",
              "@id": `${this.$page.info.siteUrl}${this.$route.fullPath}#primaryimage`,
              "url": `${this.$page.info.siteUrl}${this.$page.steaksContent.edges[this.$page.steaksContent.edges.findIndex(x => x.node.itemName === 'Hot Chester')].node.itemImage.src}`
            },
            {
              "@type": "WebPage",
              "@id": `${this.$page.info.siteUrl}${this.$route.fullPath}#webpage`,
              "url": `${this.$route.fullPath}${this.$route.fullPath}`,
              "inLanguage": "en-US",
              "name": `${this.$page.info.menu.title} | ${this.$page.info.siteName}`,
              "isPartOf": {
                "@id": `${this.$page.info.siteUrl}/#website`
              },
              "primaryImageOfPage": {
                "@id": `${this.$page.info.siteUrl}${this.$route.fullPath}#primaryimage`
              },
              "description": `${this.$page.info.menu.description}`
            }
          ]
        }
      }]
    }
  },
  data() {
    return {
      menuSectionTitles: [],
      currentSection: null
    }
  },
  created() {
    this.menuSectionTitles.push(this.$page.steaksHeaders.title)
    this.menuSectionTitles.push(this.$page.sandwichesHeaders.title)
    this.menuSectionTitles.push(this.$page.friesHeaders.title)
    this.menuSectionTitles.push(this.$page.zeppoleHeaders.title)
    this.menuSectionTitles.push(this.$page.extrasHeaders.title)

  },
  mounted() {
    console.log(this.$route)
  },
  methods: {
    showSelectedSection(sectionTitle) {
      this.currentSection = sectionTitle
    }
  },
  components: {
    MenuSection
  }
}
</script>
