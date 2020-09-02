<template lang="pug">

  article(
    class="container flex"
    :class="{ menuIntro : menuNav }"
    )
    h1 {{ sectionPrimaryTitle }}
    //
      8.25.2020 this template only applies to main menu subtext
    template(v-if="sectionPrimarySubtext")
      div
        p {{ sectionPrimarySubtext }}
    //
      Template for the Menu Nav which displays links to show different menu sections onclick
    template(v-if="menuNav")
      div(class="menuSections flex")
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
      div(class="steaksChoices")
        h2 {{ chooseProtein }}
        p {{ proteinChoices }}
        h2 {{ chooseRoll }}
        p {{ rollChoices }}
    //
      Basic template for menu item content - item name, description (optional), price
    template(v-if="sectionMenuItems")
      section(class="menuItemsWrapper")
        div(
          v-for="(item, index) in sectionMenuItems"
          :key="index"
          class="menuItem flex"
        )
          section(class="itemTextWrapper")
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
          figure(
            v-if="item.node.itemImage"
            class="itemImageWrapper"
          )
            a(
              :href="item.node.itemImage.src"
            )
              g-image(
                :alt="item.node.itemName"
                :src="item.node.itemImage"
              )
          
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
    proteinChoices: {
      type: String
    },
    chooseRoll: {
      type: String
    },
    rollChoices: {
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

<style scoped>

.container.flex {
  flex-flow: column nowrap;
}

.menuSections.flex {
  flex-flow: row wrap;
  justify-content: space-around;
}

.menuItemsWrapper {
  text-align: left;
  width: 100%;
}

.menuItem {
  border-bottom: 1px solid;
  border-color: #eae7db;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.itemImageWrapper {
  max-width: 30%;
}

.itemImageWrapper >>> a {
  display: inline-block;
}

/* .itemImageWrapper, .itemImageWrapper >>> a, .itemImageWrapper >>> img {
  border-radius: 15px;
}

.itemImageWrapper >>> img {
  border: 2px solid #EC2825;
} */


.itemTextWrapper >>> * + * {
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
}

.itemTextWrapper >>> p {
  font-size: 85%;
}

.steaksChoices {
  text-align: center;
  font-size: 80%;
  width: 100%;
}

.menuIntro >>> h1 {
  font-size: 200%;
}

.menuIntro >>> a {
  text-decoration: none;
  border: 1px solid #EC2825;
  color: #004BAD;
  background-color: inherit;
  transition: background-color .3s cubic-bezier(0.25, 0.8, 0.5, 1);
  border-radius: 2px;
  padding: 0.2rem;
  width: 10rem;
  text-align: center;
  margin-top: 0.7rem;
  font-size: 1.2rem;
}

.menuSections a:hover {
  background-color: #f9c3c0;
}

.menuSections >>> .highlighted {
  background-color: #f9c3c0;
}

@media (min-width: 960px) {
  .itemImageWrapper {
    max-width: 20%;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 60%;
    margin: 0 auto;
  }
}

</style>