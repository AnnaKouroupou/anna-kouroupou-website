<template>
  <footer class="footer">
    <div class="container">
      <span v-html="settings.footer" />
      <div class="footer-socials">
        <a :href="settings.youtube_url"
          ><font-awesome style="color: #c4302b" :icon="['fab', 'youtube']"
        /></a>
        <a :href="settings.facebook_url"
          ><font-awesome style="color: #3b5998" :icon="['fab', 'facebook']"
        /></a>
        <a :href="settings.instagram_url"
          ><font-awesome style="color: #bc2a8d" :icon="['fab', 'instagram']"
        /></a>
        <a :href="settings.pinterest_url"
          ><font-awesome style="color: #e60023" :icon="['fab', 'pinterest']"
        /></a>
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
  align-items: center;
  justify-content: space-between;
  flex-direction: column-reverse;
  width: 100%;
}
.footer-socials {
  margin-bottom: 2rem;
  font-size: 1.4rem;
}
.footer-socials a:not(:first-of-type) {
  margin-left: 1.4rem;
}

@media (min-width: 860px) {
  .footer-socials {
    margin-bottom: 0;
    font-size: 1.2rem;
  }
  .footer-socials a:not(:first-of-type) {
    margin-left: 0.8rem;
  }
  .footer .container {
    flex-direction: row;
  }
}
</style>
