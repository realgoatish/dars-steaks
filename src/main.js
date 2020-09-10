// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// import '~/assets/normalize.css'
import '~/assets/global-styles.css'
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {

  head.meta.push({
    property: `og:locale`,
    content: `en_US` 
  })

  head.meta.push({
    property: 'og:site_name',
    content: `Dar's Steaks`
  })
  
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
