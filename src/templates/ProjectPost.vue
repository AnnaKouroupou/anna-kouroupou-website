<template>
  <Layout>
    <div class="project">
      <div class="container">
        <div class="project-header">
          <div class="project-details">
            <g-image
              :src="$page.post.thumbnail"
              :alt="$page.post.title"
              class="thumbnail"
            />

            <div class="project-info">
              <h1 class="project-title" v-html="$page.post.title" />

              <div class="categories-container">
                <div class="categories">
                  <span class="label">Categories</span>
                  <span
                    class="category"
                    v-for="(category, index) in $page.post.categories"
                    :key="index"
                    v-text="category"
                  />
                </div>
              </div>

              <div class="year-container">
                <span class="label">Year</span>
                <div v-html="$page.post.date" />
              </div>

              <div class="out-of-stock">
                <span>Out of Stock</span>
              </div>

              <div class="contact-us">
                <a href="mailto:info@kouroupou.com" class="button">ask me about the product</a>
              </div>
            </div>
          </div>
        </div>

        <div v-html="$page.post.content" class="content" />
      </div>
    </div>
    <LatestJournals :journals="$page.journals.edges" />
  </Layout>
</template>

<page-query>
query ProjectPost ($path: String!) {
  post: projectPost (path: $path) {
    title
    thumbnail (quality: 90)
    date (format: "YYYY")
    content
    categories
  },
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
</page-query>

<script>
import LatestJournals from "@/components/LatestJournals"

export default {
  components: {
    LatestJournals
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
    };
  },
};
</script>

<style scoped>
.project-header {
  padding: 2rem 0 4rem 0;
}
.project-title {
  font-size: 4rem;
  margin: 0 0 2rem 0;
  padding: 0;
}
.project-details {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 4rem;
  font-size: 0.8rem;
}
.project-info {
  display: flex;
  flex-direction: column;
}
.thumbnail {
  height: 400px;
  object-fit: contain;
}
.project-info > div {
  margin-top: 2rem;
}
.project-info > div:first-of-type {
  margin: 0;
}
.category:after {
  content: ", ";
}
.category:last-of-type:after {
  content: "";
}
.out-of-stock span {
  padding: 0.5rem 0.8rem;
  color: #ef233c;
  border: 2px solid #ef233c;
  border-radius: 0.3rem;
}
.contact-us {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: flex-start;
}
.button {
  text-decoration: none;
  color: var(--color-base);
  background: var(--color-main);
  outline: none;
  border: 0;
  font-size: 0.8rem;
  padding: 0.8rem 1.6rem;
  border-radius: 0.3rem;
  cursor: pointer;
  transition: opacity 0.25s ease;
  font-size: 500;
  letter-spacing: 0.035em;
}
.button:hover {
  opacity: 0.6;
}
.button:focus {
  border: 1px solid var(--color-base-1);
}
@media (min-width: 920px) {
  .project-details {
    grid-template-columns: 2fr 1fr;
  }
}
</style>
