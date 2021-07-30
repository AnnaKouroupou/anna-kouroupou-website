<template>
  <Layout>
    <div class="container">
      <Hero />
      <LatestProjects :projects="items" />
    </div>
  </Layout>
</template>

<page-query>
query Posts {
	projects: allProjectPost {
    edges {
      node {
        id
        date (format: "YYYY")
        title
        showInHomePage
        categories
        photos
        path
      }
    }
  },
	products: allProductPost {
    edges {
      node {
        id
        date (format: "YYYY")
        title
        showInHomePage
        categories
        photos
        path
      }
    }
  },
}
</page-query>

<script>
import Hero from "@/components/Hero";
import LatestProjects from "@/components/LatestProjects";

export default {
  components: {
    Hero,
    LatestProjects,
  },
  computed: {
    items: function() {
      const projects = this.$page.projects.edges.filter((edge) => edge.node.showInHomePage);
      const products = this.$page.products.edges.filter((edge) => edge.node.showInHomePage);
      const data = [...products, ...projects];
      return data;
    },
  }
};
</script>
