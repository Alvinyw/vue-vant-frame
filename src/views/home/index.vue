<template>
  <div class="homeView">
    <van-nav-bar title="首页" left-arrow @click-left="$router.go(-1)" />
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {}
};
</script>