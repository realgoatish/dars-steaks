<template lang="pug">
  div(class="layout")
    section(class="container header")
      header(class="flex")
        section(class="column flex")
          g-image(:alt="$static.images.logoAltText" :src="$static.images.logo")
          section(class="social-icons flex")
            a(
              :href="phoneLink"
              aria-label="Call Dar's Steaks (opens your native phone app)" 
              rel="nofollow"
            )
              g-image(
                :alt="$static.images.phoneAltText" 
                :src="$static.images.phoneIcon"
              )
            a(
              :href="$static.contact.googleMapsLink" 
              target="_blank" 
              aria-label="See Dar's Steaks on a map (opens in a new window)" 
              rel="nofollow noopener"
            )
              g-image(
                :alt="$static.images.mapAltText" 
                :src="$static.images.mapIcon"
              )
            a(
              :href="$static.contact.facebookLink" 
              target="_blank" 
              aria-label="Visit the Dar's Steaks Facebook Page (opens in a new window)" 
              rel="nofollow noopener"
            )
              g-image(
                :alt="$static.images.facebookAltText" 
                :src="$static.images.facebookIcon"
              )
            a(
              :href="$static.contact.instagramLink" 
              target="_blank" 
              aria-label="Visit the Dar's Steaks Instagram (opens in a new window)" 
              rel="nofollow noopener"
            )
              g-image(:alt="$static.images.instagramAltText" 
              :src="$static.images.instagramIcon"
            )
            a(
              :href="emailLink" 
              aria-label="Send Dar's Steaks an email (opens your native mail app)" 
              rel="nofollow"
            )
              g-image(
                :alt="$static.images.emailAltText" 
                :src="$static.images.emailIcon"
              )
          section(class="header-contact-info flex")
            p {{ $static.contact.phoneNumber }}
            p {{ $static.contact.streetAddress}}, #[br] {{ $static.contact.city }}, {{ $static.contact.state }} {{ $static.contact.zip }}
            p Mon & Weds - Sat: 11 AM - 8 PM
            p Sun: 11 AM - 6 PM
            p Closed Tues
            
        nav(
          class="menu__item menu__item--dropdown"
          v-on:click="toggle('ranking')"
          v-bind:class="{'open' : dropDowns.ranking.open}"
        )
          div(class="menu__link menu__link--toggle")
            g-image(
              class="hamburger-menu"
              :alt="$static.images.hamburgerMenuAltText"
              :src="$static.images.hamburgerMenu"
              aria-label="menu"
              )
            ul(class="dropdown-menu")
              li(class="dropdown-menu__item")
                g-link(class="dropdown-menu__link" to="/") Home
              li(class="dropdown-menu__item")
                g-link(class="dropdown-menu__link" to="/menu/") Menu

        nav(
          class="desktop-nav"
        )
          ul(class="desktop-nav-ul")
            li
              g-link(class="desktop-nav-link" to="/") Home
            li
              g-link(class="desktop-nav-link" to="/menu/") Menu
    
    slot
    footer(id="footer" class="flex")
      //- section(class="footer-contact-info flex")
      section(class="footer-social social-icons flex")
            a(
              :href="phoneLink"
              aria-label="Call Dar's Steaks (opens your native phone app)" 
              rel="nofollow"
            )
              g-image(
                :alt="$static.images.phoneAltText" 
                :src="$static.images.phoneIcon"
              )
            a(
              :href="$static.contact.googleMapsLink" 
              target="_blank" 
              aria-label="See Dar's Steaks on a map (opens in a new window)" 
              rel="nofollow noopener"
            )
              g-image(
                :alt="$static.images.mapAltText" 
                :src="$static.images.mapIcon"
              )
            a(
              :href="$static.contact.facebookLink" 
              target="_blank" 
              aria-label="Visit the Dar's Steaks Facebook Page (opens in a new window)" 
              rel="nofollow noopener"
            )
              g-image(
                :alt="$static.images.facebookAltText" 
                :src="$static.images.facebookIcon"
              )
            a(
              :href="$static.contact.instagramLink" 
              target="_blank" 
              aria-label="Visit the Dar's Steaks Instagram (opens in a new window)" 
              rel="nofollow noopener"
            )
              g-image(:alt="$static.images.instagramAltText" 
              :src="$static.images.instagramIcon"
            )
            a(
              :href="emailLink" 
              aria-label="Send Dar's Steaks an email (opens your native mail app)" 
              rel="nofollow"
            )
              g-image(
                :alt="$static.images.emailAltText" 
                :src="$static.images.emailIcon"
              )
      section(class="footer-copy")
        p &copy;2020 - Dar's Steaks
</template>

<static-query>
query {
  metadata {
    siteName
  }
  images: globalLayout (path: "/markdowns/global-layout/images/content") {
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
    instagramAltText
    facebookIcon
    facebookAltText
    emailIcon
    emailAltText
    phoneIcon
    phoneAltText
    mapIcon
    mapAltText
  }
  contact: globalLayout (path: "/markdowns/global-layout/contact-info/content") {
    instagramLink
    facebookLink
    email
    phoneNumber
    googleMapsLink
    streetAddress
    city
    state
    zip
  }
}
</static-query>

<script>
export default {
  data() {
    return {
      dropDowns: {
        ranking: { open: false}  
      },
      isActive: null,
      phoneLink: null,
      emailLink: null
    }
  },
  mounted() {
    let self = this
    window.addEventListener('click', function(e) {
      if (!e.target.parentNode.classList.contains('menu__link--toggle')) {
        self.close()
      }
    }, false)
    // Phone number and email are stored in CMS. Feed them into "tel..." and "mailto..." link formatting so we can v-bind in the template
    this.phoneLink = `tel:+1-${this.$static.contact.phoneNumber.replace('(', '').replace(')', '')}`,
    this.emailLink = `mailto: ${this.$static.contact.email}`
  },
  methods: {
    toggle: function(dropdownName) {
      //alert(dropdownName)
      this.dropDowns[dropdownName].open = !this.dropDowns[dropdownName].open;
    },
    close: function() {
      for (const dd in this.dropDowns) {
        this.dropDowns[dd].open = false;    
      }
    }
  }
}
  

</script>

<style scoped>


/*
color: #004BAD <== Menu Section Titles Blue
color: #1F85B7 <== Dar's Steaks Logo design Lighter blue
color: #542825 <== Menu Item Descriptions burnt red
color: #EC2825 <== Dar's Steaks Logo letters red
*/

.desktop-nav {
  display: none;
}

#footer.flex {
  padding-top: 2rem;
  padding-bottom: 2rem;
  flex-flow: column nowrap
}

.footer-social, .footer-copy {
  padding-bottom: 1rem;
}

.header a {
  color: #fff;
  text-decoration: none;
}

.dropdown-menu a {
  color: #000;
}

.column {
  width: 15rem;
  flex-flow: column nowrap;
}

.social-icons {
  padding-top: 0.8rem;
  /* width: 180px; Want a fixed width here because relative width makes it expand and contract awkwardly in the layout */
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}

.social-icons >>> a + a {
  margin-left: 1rem;
}

.social-icons a {
  display: block;
}

.social-icons img {
  display: block;
  height: 100%;
}

.header-contact-info, .footer-contact-info {
  padding-top: 0.8rem;
  text-align: center;
  color: white;
  flex-flow: column nowrap;
}

.header-contact-info {
  font-size: 85%;
}

.header-contact-info >>> a {
  text-decoration: underline;
}

.hamburger-menu {
  cursor: pointer;
}

/* set padding and background color with .header class (describing the section) */
section.header {
  max-width: none;
  background: #000000;
  color: #1F85B7;
}

/* DROPDOWN MENU STYLES */

.menu__item {
  position: relative;
}

.menu__link {
  text-transform: uppercase;
}

.open .dropdown-menu {
  display: block;
}

.dropdown-menu {
  font-size: 0.9rem;
  margin-right:2rem;
  position: absolute;
  min-width: 130px;
  top: 25px;
  right: 0;
  display: none;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
}

.dropdown-menu__item:first-child .dropdown-menu__link {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

.dropdown-menu__item:last-child .dropdown-menu__link {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}

.dropdown-menu__link {
  display: block;
  padding: 1rem;
  color: blue;
  background-color: #fafafa;
}
.dropdown-menu__link:hover {
  color: #004BAD;
  background-color: #ccc;
}

.coming-soon-banner, .footer {
  text-align: center;
}

#footer {
  color: #fff;
  background: #000;
}

.footer-copy {
  font-size: 80%;
}

@media (min-width: 1200px) {
  .menu__item--dropdown {
    display: none;
  }

  /* This width is pretty tight for any more links, but gives us a decent symmetry for now.  Make a decision */
  .desktop-nav {
    display: block;
    width: 15rem;
  }

  .desktop-nav-ul {
    display: flex;
    justify-content: space-evenly;
  }

  /* This width won't work when you add more links.  */
  .desktop-nav-ul >>> li {
    width: 40%;
  }

  .desktop-nav-ul >>> .desktop-nav-link {
    display: block;
    border: 2px solid #EC2825;
    background-color: inherit;
    transition: background-color .3s cubic-bezier(0.25, 0.8, 0.5, 1);
    border-radius: 2px;
    padding: 0.4rem;
    text-align: center;
  }

  .desktop-nav-link:hover {
    background-color: #f9c3c0;
  }

}


</style>
