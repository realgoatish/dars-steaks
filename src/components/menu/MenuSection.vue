<template lang="pug">

  article
    h1 {{ sectionPrimaryTitle }}
    //
      8.25.2020 this template only applies to main menu subtext
    template(v-if="sectionPrimarySubtext")
      div
        p {{ sectionPrimarySubtext }}
    //
      Template for the Menu Nav which displays links to show different menu sections onclick
    template(v-if="menuNav")
      div
        a(
          v-on:click="showSection"
          v-for="(item, index) in sectionNames"
          :key="index"
          :class="{ highlighted: isActive === item }"
          href="#"
        ) {{ item }}
    //
      Template for Steaks section subheaders ("Choose Protein..." & "Choose Roll...")
    template(v-if="chooseProtein")
      div
        h2 {{ chooseProtein }}
        h2 {{ chooseRoll }}
    //
      Basic template for menu item content - item name, description (optional), price
    template(v-if="sectionMenuItems")
      section
        div(
          v-for="(item, index) in sectionMenuItems"
          :key="index"
        )
          h3(
            v-if="item.node.itemName"
            ) {{ item.node.itemName }}
          h3(
            v-if="item.node.arrayItems"
          ) {{ item.node.arrayItems.join(", ")}}
          h4 {{ item.node.price }}
          p(
            v-if="item.node.description"
          ) {{ item.node.description }}


  
</template>

<script>

export default {
  name: 'MenuSection' ,
  data() {
    return {
      isActive: null
    }
  },
  props: {
    sectionPrimaryTitle: {
      type: String,
      required: true
    },
    sectionPrimarySubtext: {
      type: String
    },
    menuNav: {
      type: Boolean
    },
    sectionNames: {
      type: Array
    },
    chooseProtein: {
      type: String
    },
    chooseRoll: {
      type: String
    },
    sectionMenuItems: {
      type: Array
    }
  },
  methods: {
    showSection(item) {
      this.$emit('show-section', item.target.childNodes[0].data)
      this.isActive = item.target.childNodes[0].data
    }
  }
}

</script>