<template>
  <Layout>
    <div class="container">
      <Hero />
      <LatestProjects :projects="$page.projects.edges" />
    </div>
  </Layout>
</template>

<page-query>
query Posts {
	projects: allProjectPost (perPage: 3){
    edges {
      node {
        id
        date (format: "YYYY")
        title
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
};
</script>
