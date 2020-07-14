<template>
  <div class="main">
    <div class="g_flex-auto">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../Footer";

export default {
  name: "Main",
  components: { Footer }
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  min-height: $_100vh;
  .g_flex-auto {
    position: relative;
  }
}
</style>
