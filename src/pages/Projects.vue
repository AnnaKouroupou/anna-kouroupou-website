<template>
  <Layout>
    <div class="container">
      <div class="categories">
        <div class="label">Categories</div>
        <div class="category-options">
          <button
            :class="{ selected: category === selectedCategory }"
            :key="category"
            v-for="category in categories"
            v-html="category"
            v-on:click="onCategoryChanged(category)"
          ></button>
        </div>
      </div>
      <ProjectsGrid :projects="projects" />
    </div>
  </Layout>
</template>

<page-query>
query Journal {
	projects: allProjectPost {
    edges {
      node {
        id
        date (format: "YYYY")
        title
        categories
        thumbnail (quality: 90)
        wide
        path
      }
    }
  }
}
</page-query>

<script>
import ProjectsGrid from "@/components/ProjectsGrid";

export default {
  components: {
    ProjectsGrid,
  },
  data: function () {
    return {
      selectedCategory: "",
    };
  },
  methods: {
    onCategoryChanged: function(category) {
      if (this.selectedCategory === category) {
        this.selectedCategory = "";
        return;
      }

      this.selectedCategory = category;
    }
  },
  computed: {
    projects: function () {
      if (!this.selectedCategory) {
        return this.$page.projects.edges;
      }

      const p = this.$page.projects.edges.filter((edge) =>
        edge.node.categories.includes(this.selectedCategory)
      );
      return p;
    },
    categories: function () {
      function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
      }

      const c = this.$page.projects.edges
        .map((e) => e.node.categories)
        .reduce((arr, c) => [...arr, ...c], [])
        .filter(onlyUnique)
        .sort();
      return c;
    },
  },
};
</script>

<style scoped>
.container.journal {
  max-width: 720px;
}
.journal-hero {
  padding: 4rem 0;
  text-align: center;
  color: var(--color-base-1);
}
.journal-header {
  font-size: 3rem;
  font-weight: 700;
  padding: 0;
  margin: 0;
}
.categories {
  margin-bottom: 4rem;
}
.category-options {
  display: flex;
}

.category-options > button:not(:first-of-type) {
  margin-left: 0.5rem;
}

.category-options > button {
  text-decoration: none;
  color: var(--color-cont);
  background: rgb(214, 214, 214);
  outline: none;
  border: 0;
  font-size: 0.8rem;
  padding: 0.4rem 0.8rem;
  border-radius: 0.3rem;
  cursor: pointer;
  transition: opacity 0.25s ease;
  font-size: 500;
  letter-spacing: 0.035em;
}

.category-options > button.selected {
  color: var(--color-base);
  background: var(--color-main);
}

.category-options > button:hover {
  color: var(--color-base);
  background: var(--color-main);
}
</style>
