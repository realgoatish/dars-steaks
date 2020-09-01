<template lang="pug">
  Layout
    article(class="home-page-content flex")
      figure(class="mobile-image-wrapper")
        g-image(
          :src="$page.mobileImage.itemImage"
        )
      section(class="home-page-text")
        section(class="section-one-wrapper container")
          section(
            class="section-one"
            v-html="$page.sectionOne.content"
          )
        section(class="section-two-wrapper container")
          section(
            class="section-two"
            v-html="$page.sectionTwo.content"
          )
        section(class="section-three-wrapper container")
          section(
            class="section-three"
            v-html="$page.sectionThree.content"
          )


</template>

<page-query>

query {
  sectionOne: homePage (path: "/markdowns/home-page/section-one/content") {
    content
  }
  sectionTwo: homePage (path: "/markdowns/home-page/section-two/content") {
    content
  }
  sectionThree: homePage (path: "/markdowns/home-page/section-three/content") {
    content
  }
  mobileImage: menuContent (path: "/markdowns/menu/steaks/cheesesteak") {
    itemImage(
      quality: 100
      width: 1000
      height: 560
    )
  } 
}

</page-query>

<script>


export default {
  metaInfo() {
    return {
      title: 'Hello, world!'
    }
  }
}
</script>

<style>

p {
  font-weight:600;
}

</style>

<style scoped>

/* Style contexts */

section.home-page-text {
  width: 100%;
  max-width: none;
}

section.home-page-text >>> section.container {
  width: 100%;
  max-width: none;
  padding-left: 0;
  padding-right: 0;
}

/* All <section> tags wrapping each home-page-section */
.section-one, .section-two, .section-three {
  padding-top: 2rem;
  padding-bottom: 2rem;
  max-width: none;
  width: 90%;
  margin: 0 auto;
  /* text-align: center; */
}
/* Padding between text sections */
section.home-page-text >>> section + section {
  padding-top: 3rem;
}

/* Padding between <h1>, <h2>, <p> within each text section */
section.home-page-text >>> section * + * {
  padding-top: 0.8rem;
}

/* Need to set background colors for different sections on wrappers for each */
.section-two-wrapper {
  background: #004BAD;
}

.section-three-wrapper {
  background: #ed5c02;
}

.section-two {
  color: white;
}

.section-three {
  color: #000;
}

.section-one >>> h1 {
  color: #004BAD;
  text-shadow: 1px 1px 2px #1F85B7;
}

/* .section-one >>> span {
  color: #004BAD;
  text-shadow: 5px 2px 1px #1F85B7;
} */

.section-one >>> h2 {
  color: #000;
  text-shadow: 1px 1px 2px #f9c3c0;
}

.section-one >>> p {
  color: #542825;
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
  /* color: #ff6100; */
  text-shadow: 1px 1px 2px #fff;
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

@media (min-width: 1200px) {

}


</style>
