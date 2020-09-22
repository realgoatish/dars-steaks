

<static-query>
query {
  defaultInfo: metadata {
    siteUrl
    siteName
    siteDescription
  }
  logo: globalLayout (path: "/markdowns/global-layout/images/logo") {
    image(
      width: 120
      height: 120
    )
  }
  contact: globalLayout(path: "/markdowns/global-layout/contact-info/content") {
    phoneNumber
    email
    googleMapsLink
    instagramLink
    facebookLink
    yelpLink
    streetAddress
    city
    state
    zip
  }
}
</static-query>

<script>
export default {
  name: 'BaseSEO',
  metaInfo() {
    return {
      title: `${this.meta.title}`,
      link: [
        {
          rel: 'canonical', href: `${this.meta.pageUrl}`
        }
      ],
      meta: [
        { key: "description", name: "description", content: this.meta.description },
        { property: "og:title", content: this.meta.title },
        { property: "og:description", content: this.meta.description },
        { property: "og:image", content: this.meta.image },
        { property: "og:image:alt", content: this.meta.altText},
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:type", content: "website" },
        { property: "og:url", content: this.meta.pageUrl },
      ],
      script: [{
        type: 'application/ld+json',
        json: {
          "@context": "https://schema.org", 
          "@graph": [
            {
              "@type": "Restaurant", 
              "@id": `${this.meta.siteUrl}#westmont`,
              "name": this.meta.siteName, 
              "logo": {
                "@type": "ImageObject",
                "@id": `${this.meta.siteUrl}#logo`,
                "url": this.meta.logo
              },
              "menu": `${this.meta.siteUrl}menu`,
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
              "telephone": this.meta.phoneNumber,
              "url": this.meta.siteUrl,
              "sameAs": [
                this.meta.instagramLink,
                this.meta.facebookLink,
                this.meta.yelpLink
              ],
              "hasMap": this.meta.googleMapsLink,
              "email": this.meta.email,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": this.meta.streetAddress,
                "addressLocality": this.meta.city,
                "addressRegion": this.meta.state,
                "postalCode": this.meta.zip,
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
              "description": this.meta.siteDescription
            },
            {
              "@type": "WebSite",
              "@id": `${this.meta.siteUrl}#website`,
              "name": this.meta.siteName,
              "url": this.meta.siteUrl,
              "potentialAction": {
                "@type": "SearchAction",
                "target": `${this.meta.siteUrl}?s={search_term_string}`,
                "query-input": "required name=search_term_string"
              },
              "publisher": { 
                "@id": `${this.meta.siteUrl}#westmont`
              }
            },
            {
              "@type": "WebPage",
              "@id": `${this.meta.pageUrl}#webpage`,
              "url": this.meta.pageUrl,
              "inLanguage": "en-US",
              "name": `${this.meta.title} | ${this.meta.siteName}`,
              "image": {
                "@type": "ImageObject",
                "@id": `${this.meta.pageUrl}#primaryimage`,
                "url": this.meta.image
              },
              "isPartOf": {
                "@id": `${this.meta.siteUrl}#website`
              },
              "primaryImageOfPage": {
                "@id": `${this.meta.pageUrl}#primaryimage`
              },
              "description": this.meta.description,
              "breadcrumb": {
                "@id": `${this.meta.pageUrl}#breadcrumb`
              }
            },
            {
              "@type": "BreadcrumbList",
              "@id": `${this.meta.pageUrl}#breadcrumb`,
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "WebPage",
                    "@id": this.meta.siteUrl,
                    "url": this.meta.siteUrl,
                    "name": "Home"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@type": "WebPage",
                    "@id": `${this.meta.siteUrl}menu/`,
                    "url": `${this.meta.siteUrl}menu/`,
                    "name": "Menu"
                  }
                }
              ]
            }
          ]
        }
      }]
    }
  },
  computed: {
    metaType() {
      const type_map = {
        home_page:
          this.$route.path === '/',
        menu_page:
          this.$route.path.includes('menu')
      }
      return Object.entries(type_map).reduce(
        (type, [new_type, isType]) => (isType ? new_type : type),
        "default"
      )
    },
    meta_default() {
      return {
        siteName: this.$static.defaultInfo.siteName,
        siteUrl: this.$static.defaultInfo.siteUrl,
        pageUrl: `${this.$static.defaultInfo.siteUrl}${this.$route.fullPath === '/' ? '' : this.$route.fullPath}`,
        image: `${this.$static.defaultInfo.siteUrl.slice(0, -1)}${this.$static.logo.image.src}`,
        altText: "THIS IS DEFAULT IMAGE ALT TEXT",
        title: "THIS IS THE DEFAULT TITLE",
        description: "THIS IS THE DEFAULT DESCRIPTION",
        logo: `${this.$static.defaultInfo.siteUrl.slice(0, -1)}${this.$static.logo.image.src}`,
        phoneNumber: this.$static.contact.phoneNumber,
        streetAddress: this.$static.contact.streetAddress,
        city: this.$static.contact.city,
        state: this.$static.contact.state,
        zip: this.$static.contact.zip,
        email: this.$static.contact.email,
        googleMapsLink: this.$static.contact.googleMapsLink,
        instagramLink: this.$static.contact.instagramLink,
        facebookLink: this.$static.contact.facebookLink,
        yelpLink: this.$static.contact.yelpLink
      }
    },
    meta_data() {
      return {
        home_page: () => this.getHomePageMeta(),
        menu_page: () => this.getMenuPageMeta()
      }
    },
    meta() {
      return this.meta_data[this.metaType]
      ? { ...this.meta_default, ...this.meta_data[this.metaType]() }
      : this.meta_default
    }
  },
  methods: {
    getHomePageMeta() {
      const meta = {}
      const homePage = this.$page
      if (homePage.info.home.description) {
        meta.description = homePage.info.home.description
      }
      if (homePage.info.home.title) {
        meta.title = homePage.info.home.title
      }
      if (
        homePage.heroImage.image.src
      ) {
        meta.image = `${this.$static.defaultInfo.siteUrl.slice(0, -1)}${homePage.heroImage.image.src}`
      }
      if (homePage.heroImage.imageAltText) {
        meta.altText = homePage.heroImage.altText
      }
      return meta
    },
    getMenuPageMeta() {
      const meta = {}
      const menuPage = this.$page
      if (menuPage.info.menu.description) {
        meta.description = menuPage.info.menu.description
      }
      if (menuPage.info.menu.title) {
        meta.title = menuPage.info.menu.title
      }
      if (
        menuPage.steaksContent.edges[menuPage.steaksContent.edges.findIndex(x => x.node.itemName === 'Hot Chester')].node.itemImage.src
      ) {
        meta.image = `${this.$static.defaultInfo.siteUrl.slice(0, -1)}${menuPage.steaksContent.edges[menuPage.steaksContent.edges.findIndex(x => x.node.itemName === 'Hot Chester')].node.itemImage.src}`
      }
      if (
        menuPage.steaksContent.edges[menuPage.steaksContent.edges.findIndex(x => x.node.itemName === 'Hot Chester')]
      ) {
        meta.altText = menuPage.steaksContent.edges[menuPage.steaksContent.edges.findIndex(x => x.node.itemName === 'Hot Chester')].node.itemName
      }
      return meta
    }
  },
  render(createElement) {
    return this.$scopedSlots.default({
      meta: this.meta
    })
  }
}
</script>