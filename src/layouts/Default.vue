<template lang="pug">
  div(class="layout")
    div(class="section header")
      div(class="container")
        header(class="flex")
          section(class="left flex")
            g-image(:alt="$static.header.logoAltText" :src="$static.header.logo")
            section(class="social-icons flex")
              a(:href="$static.header.facebookLink")
                g-image(:alt="$static.header.facebookAltText" :src="$static.header.facebookIcon")
              a(:href="$static.header.instagramLink")
                g-image(:alt="$static.header.instagramAltText" :src="$static.header.instagramIcon")
              a(:href="$static.header.emailLink")
                g-image(:alt="$static.header.emailAltText" :src="$static.header.emailIcon")
          g-image(:alt="$static.header.hamburgerMenuAltText" :src="$static.header.hamburgerMenu")

          //- nav(class="nav")
          //-   g-link(class="nav__link" to="/") Home
          //-   g-link(class="nav__link" to="/menu/") Menu
    slot
</template>

<static-query>
query {
  metadata {
    siteName
  }
  header: globalLayout (path: "/markdowns/global-layout/header/content") {
    logo(
      quality: 90
      width: 405
      height: 120
    )
    logoAltText
    hamburgerMenu(
      quality: 60
      width: 36
      height: 24
    )
    hamburgerMenuAltText
    instagramIcon
    instagramLink
    instagramAltText
    facebookIcon
    facebookLink
    facebookAltText
    emailIcon
    emailLink
    emailAltText
  }
}
</static-query>

<style scoped>

/* .layout {

} */
/*
color: #004BAD <== Menu Section Titles Blue
color: #542825 <== Menu Item Descriptions burnt red
color: #EC2825 <== Dar's Steaks letters red
*/

.left {
  width: 15rem;
  flex-flow: column nowrap;
}

.social-icons {
  padding-top: 0.8rem;
  width: 115px; /* Want a fixed width here because relative width makes it expand and contract awkwardly in the layout */
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}

.social-icons a {
  display: block;
}

.social-icons img {
  display: block;
  height: 100%;
}

/* set padding and background color with .section class coupled with .header class (describing the section) */
.section.header {
  padding: 1rem;
  background: #000000;
  color: #1F85B7;
}

.header a {
  color: white;
}

.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* .nav__link {
  margin-left: 20px;
} */

/* @media (min-width: 960px) {
  nav.nav {
    display: none;
  }
} */
</style>
