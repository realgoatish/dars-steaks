<template lang="pug">
  div(class="layout")
    div(class="section header")
      div(class="container")
        header(class="flex")
          div.test
            g-image(alt="Example image" :src="$static.header.logo")
          nav(class="nav")
            g-link(class="nav__link" to="/") Home
            g-link(class="nav__link" to="/menu/") Menu
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
    )
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

div.test {
  width: 15rem;
}

/* set padding and background color with .section class coupled with .header class (describing the section) */
.section.header {
  padding: 2rem;
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
  /* margin-bottom: 20px;
  height: 80px; */
}

.nav__link {
  margin-left: 20px;
}
</style>
