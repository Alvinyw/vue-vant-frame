<template lang="html">
  <van-overlay :show="isShowLoading" class-name="globalLoading">
    <div class="icon_wrap">
      <Loading type="spinner" size="50px" text-size="16px" vertical>加载中...</Loading>
      <!-- <lottie :options="defaultOptions" v-on:animCreated="handleAnimation" /> -->
    </div>
  </van-overlay>
</template>

<script>
// import * as loadingData from "@/assets/lottie/loading.json";
import { Loading } from "vant";
export default {
  name: "GlobalLoading",
  components: { Loading },
  data() {
    return {
      isShowLoading: false,
      animationSpeed: 1,
      anim: {}
    };
  }
  // computed: {
  //   defaultOptions() {
  //     return {
  //       animationData: loadingData
  //     };
  //   }
  // },
  // methods: {
  //   handleAnimation: function(anim) {
  //     this.anim = anim;
  //   }
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.globalLoading {
  z-index: 10000 !important;
  // background-color: rgba(255, 255, 255, 0.6);
  .icon_wrap {
    width: 300px;
    height: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -150px 0 0 -150px;
  }
}
</style>
