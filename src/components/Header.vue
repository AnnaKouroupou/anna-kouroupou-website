<template>
  <header class="header">
    <div class="container">
      <div class="left">
        <g-link :to="{ name: 'home' }" class="home-link">
          <img
            src="../../static/logo.svg"
            :alt="settings.site_name"
            class="logo"
          />
        </g-link>
      </div>
      <button class="mobile-menu" v-on:click="toggleMobileMenu">menu</button>
      <nav class="nav right">
        <g-link class="nav__link" to="/projects">Projects</g-link>
        <g-link class="nav__link" to="/journal">News & More</g-link>
        <g-link class="nav__link" to="/contact">About Me</g-link>
      </nav>
    </div>
    <div v-if="isMobileMenuOpen" class="container container-mobile">
      <nav class="mobile-nav">
        <g-link class="nav__link" to="/projects">Projects</g-link>
        <g-link class="nav__link" to="/journal">News & More</g-link>
        <g-link class="nav__link" to="/contact">About Me</g-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMobileMenuOpen: false,
      logo: require("../../static/logo.svg"),
      settings: require("../../data/theme.json"),
    };
  },
  methods: {
      toggleMobileMenu: function() {
          this.isMobileMenuOpen = !this.isMobileMenuOpen;
      }
  }
};
</script>

<style scoped>
.header {
  position: relative;
  z-index: 10;
  background-color: white;
}
.header > .container:not(.container-mobile) {
  /* height: 6rem; */
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}
.home-link {
  text-decoration: none;
}
.logo {
  height: 1.5rem;
}
.site-name {
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-decoration: none;
  text-transform: uppercase;
}
.nav {
  display: none;
}
.nav > * {
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  margin-top: 4px;
  margin-right: 3rem;
  padding-bottom: 4px;
  border-bottom: 1px solid;
  border-color: transparent;
  transition: border 0.15s;
}
.nav > *:last-of-type {
  margin: 0;
}
.nav > *:hover {
  border-color: var(--color-main);
}
.nav > .active {
  border-color: var(--color-main);
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: white;
  padding: 2rem 1rem;
}
.mobile-nav > * {
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  margin-top: 1rem;
  padding: 0.5rem 0.2rem;
  border-bottom: 1px solid;
  border-color: transparent;
  transition: border 0.15s;
}

.mobile-nav > *:first-of-type {
  margin-top: 0;
}
.mobile-nav > .active {
  border-color: var(--color-main);
}
.mobile-menu {
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  border: none;
  background-color: white;
}

@media (min-width: 860px) {
  .nav {
    display: block;
  }

  .mobile-menu {
    display: none;
  }
}
</style>
