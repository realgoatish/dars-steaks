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
  }
}

</page-query>

<script>

import MenuSection from '~/components/menu/MenuSection.vue'

export default {
  data() {
    return {
      menuSectionTitles: [],
      currentSection: null
    }
  },
  created() {
    // Get data from page query, filter for "Headers" of each menu section, get title for each and push into array for display
    const eachMenuSectionHeader = Object.entries(this.$page).filter(item => item[0].includes('Headers'))
    for (const header of eachMenuSectionHeader) {
      this.menuSectionTitles.push(header[1].title)
    }
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

<style>

  .menu-page-content h1 {
    color: #004BAD;
    text-shadow: 1px 1px 2px #1F85B7;
  } 

  .menu-page-content h2 {
    color: #000;
    text-shadow: 1px 1px 2px #f9c3c0;
  }

</style>