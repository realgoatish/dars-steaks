<template lang="pug">
  Layout
    article(class="home-page-content flex")
      figure(class="mobile-image-wrapper")
        g-image(
          :src="$page.heroImage.image"
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
    content
  }
  sectionTwo: homePage (path: "/markdowns/home-page/section-two/content") {
    image(
      width: 500
      height: 500
      quality: 90
      fit: outside
    )
    content
  }
  sectionThree: homePage (path: "/markdowns/home-page/section-three/content") {
    image(
      width: 500
      height: 500
      quality: 90
      fit: outside
    )
    content
  }
  heroImage: homePage (path: "/markdowns/home-page/hero-image") {
    image(
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
      title: `${this.$page.info.home.title}`,
      link: [
        {
          rel: 'canonical', href: `${this.$page.info.siteUrl}${this.$route.fullPath}`
        }
      ]
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
