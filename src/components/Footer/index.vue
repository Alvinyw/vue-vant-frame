<!-- 协议页面不显示 footer --> 
<template>
  <footer class="app-footer">*我是底部信息栏</footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
.app-footer {
  width: 100vw;
  height: 120px;
  background-color: #f9f9f9;
  padding: 26px 90px 0;
  box-sizing: border-box;
  color: #bbbbbb;
  font-size: 22px;
  text-align: center;
  line-height: 1.5;
}
</style>
