<template>
  <footer class="footer">
    <div class="container">
      <span v-html="settings.footer" />
      <div class="footer-socials">
        <span>facebook</span>
        <span>instagram</span>
        <span>pinterest</span>
        <span>youtube</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      settings: require("../../data/theme.json"),
    };
  },
};
</script>

<style scoped>
.footer {
  font-size: 0.8rem;
  padding: 6rem 0;
}
.footer .container {
  display: flex;
  justify-content: space-between;
}
.footer-socials span {
  margin-left: 1rem;
  font-weight: bold;
}
</style>
