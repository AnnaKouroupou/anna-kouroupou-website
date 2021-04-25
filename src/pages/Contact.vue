<template>
  <Layout>
    <div class="container">
      <div class="about-me-header">
        <g-image
          :src="$page.aboutMe.photo"
          alt="anna kouroupou"
          class="thumbnail"
        />
        <div class="about-me-titles">
          <h1 class="about-me-title">Hello!</h1>
          <h1 v-html="$page.aboutMe.title" class="about-me-title" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {};
</script>

<style scoped>
.about-me-header {
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  padding: 2rem 0 4rem 0;
}
.about-me-header .thumbnail {
  width: 100%;
  margin-bottom: 2rem;
}
.about-me-titles {
  margin-bottom: 1rem;
}
.about-me-title {
  font-size: 3rem;
  margin: 0 0 1rem 0;
  padding: 0;
}

.about-me-title:last-of-type {
  margin-bottom: 0;
}

@media (min-width: 920px) {
  .about-me-header {
    flex-direction: row;
  }
  .about-me-header .thumbnail {
    width: 400px;
    margin-bottom: 8rem;
  }
  .about-me-titles {
    padding: 3rem 3rem 0;
    background-color: white;
    margin-left: -4rem;
  }
}
</style>

