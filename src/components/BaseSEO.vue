

<static-query>
query {
  defaultInfo: metadata {
    siteUrl
    siteName
    siteDescription
  }
  zeppole: allMenuContent(
    filter: {
      fileInfo: {
        directory: {
          eq: "markdowns/menu/zeppole"
        }
      }
    }, sortBy: "number", skip: 1, order: ASC) {
    edges {
      node {
        itemImage(
          width: 500
          height: 500
          quality: 90
          fit: outside
        )
      }
    }
  }
}
</static-query>

<script>
export default {
  name: 'BaseSEO',
  mounted() {
    console.log(this.$page)
  },
  metaInfo() {
    return {
      meta: [
        { key: "description", name: "description", content: this.meta.description },
        { property: "og:title", content: this.meta.title },
        { property: "og:description", content: this.meta.description },
        { property: "og:image", content: this.meta.image },
        { property: "og:url", content: this.meta.siteUrl },
      ]
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
        siteUrl: `${this.$static.defaultInfo.siteUrl}${this.$route.fullPath}`,
        image: `${this.$static.defaultInfo.siteUrl}${this.$static.zeppole.itemImage }`,
        title: "THIS IS THE DEFAULT TITLE",
        description: "THIS IS THE DEFAULT DESCRIPTION"
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
        meta.image = homePage.heroImage.image.src
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
        meta.image = `${this.$static.defaultInfo.siteUrl}${menuPage.steaksContent.edges[menuPage.steaksContent.edges.findIndex(x => x.node.itemName === 'Hot Chester')].node.itemImage.src}`
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