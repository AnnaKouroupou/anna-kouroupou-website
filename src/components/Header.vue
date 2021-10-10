<template>
  <header class="header">
    <div class="container">
      <div class="left">
        <g-link :to="{ name: 'home' }" class="home-link">
          <img
            src="../../static/logo_v2.svg"
            :alt="settings.site_name"
            class="logo"
          />
        </g-link>
      </div>
      <button class="mobile-menu" v-on:click="toggleMobileMenu">menu</button>
      <nav class="nav right">
        <g-link class="nav__link" to="/contact">about me</g-link>
        <g-link class="nav__link" to="/journal">news & more</g-link>
        <g-link class="nav__link" to="/projects">projects</g-link>
        <g-link class="nav__link button" to="/products">products</g-link>
      </nav>
    </div>
    <div v-if="isMobileMenuOpen" class="container container-mobile">
      <nav class="mobile-nav">
        <g-link class="nav__link" to="/contact">about me</g-link>
        <g-link class="nav__link" to="/journal">news & more</g-link>
        <g-link class="nav__link" to="/projects">projects</g-link>
        <g-link class="nav__link" to="/products">products</g-link>
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
}
.header > .container:not(.container-mobile) {
  /* height: 6rem; */
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: 100%;
  border-bottom: 1px solid #ececec;
}
.home-link {
  text-decoration: none;
}
.logo {
  height: 3rem;
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
  color: var(--color-main);
}

.nav__link {
  color: #9b23ea;
}
.nav__link.button {
  padding: 0.7rem 1rem;
  border-radius: 10px;
  color: white;
  background-image: linear-gradient(to left top, #5f72bd 0%, #9b23ea 100%);
}
.nav__link.button.active {
  border: none;
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
