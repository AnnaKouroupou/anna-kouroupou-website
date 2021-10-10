<template>
  <div class="layout" :class="{ 'sticky-header': $route.path === '/' }">
    <Header />
    <slot/>
    <LatestJournals :journals="$static.journals.edges" />
    <Footer />
  </div>
</template>

<static-query>
query Posts {
  journals: allJournalPost (perPage: 3) {
    edges {
      node {
        id
        path
        title
        date (format: "D MMMM YYYY")
      }
    }
  }
}
</static-query>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import LatestJournals from "@/components/LatestJournals"

export default {
  components: {
    Header,
    Footer,
    LatestJournals,
  }
}
</script>


<style>
* {
  box-sizing: border-box;
}

body {
  --color-main: #9b23ea;
  --color-base: rgb(255, 255, 255);
  --color-base-1: rgb(243, 243, 243);
  --color-contrast: rgb(0, 0, 0);
  --color-contrast-1: rgb(43, 43, 43);
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding: 0;
  font-size: 16px;
  background: var(--color-base);
  color: var(--color-contrast);
  transition: background 0.5s ease;
}

body.dark {
  --color-base: rgb(0, 0, 0);
  --color-base-1: rgb(43, 43, 43);
  --color-contrast: rgb(255, 255, 255);
  --color-contrast-1: rgb(243, 243, 243);
}

h1 {
  letter-spacing: -0.01em;
}

.layout {
  padding: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(to bottom, #ffffff 40%, #9b23ea1f 150%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

@media (min-width: 860px) {
  .container {
    padding: 0 6rem;
  }
}

a {
  color: inherit;
}

img {
  max-width: 100%;
}

.label {
  display: block;
  font-weight: 700;
  margin-bottom: 0.5rem;
}
</style>
