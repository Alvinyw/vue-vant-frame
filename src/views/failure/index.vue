<template>
  <div class="resultView">
    <van-nav-bar
      :title="$route.query.name ? $route.query.name : '失败'"
      left-arrow
      @click-left="$router.go(-1)"
    />

    <section class="result-container">
      <img
        class="result-icon"
        src="../../assets/images/common_defeat.svg"
        alt
      />
      <p class="result-remark">{{ $route.query.result ? $route.query.result : "失败" }}</p>
      <p class="result-detail">{{ $route.query.detail }}</p>
    </section>

    <van-button
      type="primary"
      class="button-back"
      @click="$router.go(-1)"
    >重试</van-button>
  </div>
</template>

<script>
export default {
  name: 'Failure',
};
</script>

<style lang="scss" scoped>
@import '../../styles/result_view.scss';
</style>
