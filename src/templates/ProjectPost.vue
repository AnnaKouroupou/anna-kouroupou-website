<template>
  <Layout>
    <div class="project">
      <div class="container">
        <div class="project-header">
          <div class="project-details">
            <div class="project-photos">
              <div
                v-if="$page.post.photos.length > 1"
                class="project-more-photos"
              >
                <g-image
                  v-for="(photo, index) in $page.post.photos"
                  v-show="index !== currentPhotoIndex"
                  :key="photo"
                  :src="photo"
                  :alt="$page.post.title"
                  v-on:click="selectPhoto(index)"
                  class="thumbnail"
                />
              </div>
              <div
                v-if="$page.post.photos.length > 1"
                class="project-photos-divider"
              >
                <div></div>
              </div>
              <div class="project-current-photo">
                <g-image
                  :src="$page.post.photos[currentPhotoIndex]"
                  :alt="$page.post.title"
                  class="thumbnail"
                />
                <div v-on:click="openFullscreen" class="overlay">
                  <div><font-awesome :icon="['fas', 'expand']" /></div>
                </div>
              </div>
            </div>

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
                <a
                  :href="`mailto:${settings.contact_email}?subject=I'm interested about project: ${$page.post.title}`"
                  class="button"
                  >ask me about the project</a
                >
              </div>
            </div>
          </div>
        </div>

        <div v-html="$page.post.content" class="content" />
      </div>
    </div>
    <LatestJournals :journals="$page.journals.edges" />
    <div v-if="isFullscreen" class="fullscreen-photo">
      <g-image
        :src="$page.post.photos[currentPhotoIndex]"
        :alt="$page.post.title"
        class="thumbnail"
      />
      <div v-on:click="closeFullscreen" class="fullscreen-photo-close">
        <font-awesome :icon="['fas', 'times']" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ProjectPost ($path: String!) {
  post: projectPost (path: $path) {
    title
    photos
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
import LatestJournals from "@/components/LatestJournals";

export default {
  components: {
    LatestJournals,
  },
  data() {
    return {
      settings: require("../../data/theme.json"),
      currentPhotoIndex: 0,
      isFullscreen: false,
    };
  },
  methods: {
    selectPhoto(index) {
      this.currentPhotoIndex = index;
    },
    openFullscreen() {
      this.isFullscreen = true;
    },
    closeFullscreen() {
      this.isFullscreen = false;
    },
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
    };
  },
};
</script>

<style scoped>
.fullscreen-photo {
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: black;
}
.fullscreen-photo .thumbnail {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.fullscreen-photo-close {
  position: absolute;
  top: 10px;
  right: 20px;
  color: white;
  font-size: 2rem;
  cursor: pointer;
}
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
.project-photos {
  display: flex;
  flex-direction: column-reverse;
}
.project-more-photos {
  width: 100%;
  padding: 10px 0;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-shrink: 0;
  flex-grow: 0;
  overflow: auto;
}
.project-photos-divider {
  align-self: stretch;
  padding: 0 5px;
}
.project-photos-divider div {
  width: 100%;
  height: 1px;
  background-color: lightgray;
}
.project-current-photo {
  position: relative;
}
.project-current-photo .overlay {
  position: absolute;
  transition: opacity 0.15s ease;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0;
  color: white;
  font-size: 1.4rem;
}
.project-current-photo:hover .overlay {
  cursor: pointer;
  opacity: 0.4;
}
.project-current-photo .overlay div {
  padding: 5px 10px;
}
.project-more-photos .thumbnail {
  padding: 5px;
  cursor: pointer;
  object-fit: contain;
  max-height: 100%;
}
.project-current-photo .thumbnail {
  object-fit: contain;
  object-position: center;
  height: 400px;
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
  .project-more-photos {
    height: 400px;
    width: 100px;
    flex-direction: column;
  }
  .project-photos {
    flex-direction: row;
  }
  .project-photos-divider div {
    height: 100%;
    width: 1px;
  }
}
</style>
