<template lang="pug">
  div(class="layout")
    div(class="section header")
      div(class="container")
        header(class="flex")
          strong
            g-link(to="/") {{ $static.metadata.siteName }}
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
}
</static-query>

<style scoped>

/* .layout {

} */

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
