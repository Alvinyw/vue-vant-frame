<template>
  <Main class="homeView">
    <van-nav-bar title="首页" left-arrow @click-left="$router.go(-1)" />
  </Main>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  mounted() {
    // this.$loading.show()
  },
  methods: {}
};
</script>