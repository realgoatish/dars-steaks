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
        :chooseRoll="$page.steaksHeaders.chooseRoll"
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
</template>

<page-query>

query {
  steaksHeaders: menuContent (path: "/markdowns/menu/steaks/headers") {
    title
    chooseProtein
    chooseRoll
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
  gyroHeaders: menuContent (path: "/markdowns/menu/gyro/headers") {
    title
  }
  gyroContent: allMenuContent(
    filter: {
      fileInfo: {
        directory: {
          eq: "markdowns/menu/gyro"
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
}

</page-query>

<script>

import MenuSection from '~/components/menu/MenuSection.vue'

export default {
  metaInfo() {
    return {
      title: 'Menu'
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
