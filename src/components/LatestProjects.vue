<template>
  <div class="projects">
    <div
      :class="{ project: true }"
      v-for="item in projects"
      :key="item.node.id"
    >
      <g-link :to="item.node.path" class="project-link">
        <g-image
          :src="item.node.photos[0]"
          :alt="item.node.title"
          class="thumbnail"
        />
        <div class="project-details">
          <h3 class="project-title">{{ item.node.title }}</h3>
          <div class="categories">
            <span
              class="category"
              v-for="(item, index) in item.node.categories"
              :key="index"
              >{{ item }}</span
            >
          </div>
        </div>
      </g-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    projects: {
      type: Array,
      required: true,
    },
    small: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.projects {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;
}
.project {
  grid-column: auto / span 3;
  text-align: center;
}
.project-link {
  text-decoration: none;
}
.thumbnail {
  background-color: #f3f3f3;
  height: 380px;
  object-fit: cover;
  transition: all 0.15s ease;
}
.project-details {
  margin-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.project-title {
  text-align: start;
  font-size: 1rem;
  color: var(--color-contrast);
  margin: 0 2rem 0 0;
}
.project.project-link-to-more {
  display: flex;
  justify-content: center;
  align-items: center;
}
.project.project-link-to-more:hover {
  background: var(--color-base-1);
}
.project.project-link-to-more .project-link {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.project.project-link-to-more .project-link span {
  font-size: 2rem;
  font-weight: normal;
  color: var(--color-main);
}
.categories {
  font-size: 0.8rem;
  color: var(--color-contrast-1);
}
.category {
  margin-right: 0.8rem;
}
.category:last-of-type {
  margin: 0;
}
.project:hover .thumbnail {
  transform: scale(1.02);
  box-shadow: 0 20px 40px -20px rgba(0, 0, 0, 0.25);
}

@media (min-width: 920px) {
  .thumbnail {
    height: 560px;
  }
  .project {
    grid-column: auto / span 1;
  }
}
</style>
