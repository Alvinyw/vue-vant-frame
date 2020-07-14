<template>
  <div class="agreement-view">
    <NavBar
      :class="['header']"
      title=" "
      :left-arrow="true"
      :fixed="true"
      @click-left="$router.go(-1)"
    />
    <div class="agreement-content">
      <div class="marsk"></div>
      <!-- <img v-lazy="agreementSrc" alt="协议" /> -->
      <div id="imgWrapper"></div>
      <transition name="van-fade">
        <p v-show="ifShowSignature" class="signature">{{ merchantName }}</p>
      </transition>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "AgreementIndex",
  data() {
    return {
      imgEle: "",
      startDate: new Date(),
      endDate: "",
      ifCreatedImg: false
    };
  },
  computed: {
    ifShowSignature() {
      const _s = this.$route.query.showSignature || "";
      return _s.toString() === "true" && this.ifCreatedImg;
    },
    merchantName() {
      return this.$session.getAppInfo()["merchantName"] || "";
    }
  },
  mounted() {
    const _this = this;
    this.$loading.show();
    this.imgEle = new Image();
    this.ifCreatedImg = false;
    this.imgEle.onload = function() {
      $("#imgWrapper").append(_this.imgEle);
      _this.ifCreatedImg = true;
      _this.endDate = new Date();
      const _time = _this.endDate.getTime() - _this.startDate.getTime();
      const _delayTime = _time < 1000 ? 1000 : 0;
      setTimeout(function() {
        _this.$loading.hide();
      }, _delayTime);
    };
    this.imgEle.onerror = function() {
      _this.$notify({ type: "danger", message: "协议加载失败！" });
      _this.$loading.hide();
    };
    this.imgEle.src = this.$route.query.agreementSrc;
    this.imgEle.alt = "协议";
  }
};
</script>

<style lang="scss">
.agreement-view {
  .agreement-content {
    img {
      width: 96vw;
      margin: 0 2vw;
      pointer-events: none;
    }
  }
}
</style>
<style lang="scss" scoped>
.agreement-view {
  width: 100%;
  .agreement-content {
    position: relative;
    margin-top: 110px;
    background-color: #fff;
    .marsk {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }
    .signature {
      width: 90%;
      position: absolute;
      // top: 72vw;
      // left: 6vw;

      top: 404px;
      left: 50%;
      margin-left: -320px;
      z-index: 1;
      color: #333;
      font-weight: bold;
      text-align: left;
      text-indent: 7em;
      line-height: 1.7;
    }
  }
}
</style>
