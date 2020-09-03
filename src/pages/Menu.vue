<template lang="pug">
  Layout
    main
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
        v-show="currentSection === $page.gyroHeaders.title"
        :sectionPrimaryTitle="$page.gyroHeaders.title"
        :sectionMenuItems="$page.gyroContent.edges"
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
      }
    }
  }
  info: metadata {
    menu {
      title
      description
    }
    siteUrl
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
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { name: 'description', content: `${this.$page.info.menu.description}` }
      ]
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
    this.menuSectionTitles.push(this.$page.extrasHeaders.title)
    this.menuSectionTitles.push(this.$page.friesHeaders.title)
    this.menuSectionTitles.push(this.$page.gyroHeaders.title)
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
