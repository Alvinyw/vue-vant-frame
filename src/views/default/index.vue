<template>
  <div class="notFoundIndex">
    <img src="../../assets/images/error_image.png" alt class="init-image" />
    <h3 class="init-title">咦？初始化应用失败！</h3>
    <p class="init-detail">很抱歉，访问页面失败，请稍后再试</p>

    <!-- 
    <van-button
      class="button-back"
      type="primary"
      @click="$router.go(-1)"
    >返回商户站点</van-button>-->
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/not_found.scss";
</style>
