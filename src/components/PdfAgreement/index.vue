<template>
  <div class="agreement-view">
    <van-nav-bar :title="navBarTitle" left-arrow @click-left="$router.go(-1)" />
    <div class="agreement-content">
      <div class="pdf" v-for="item in pageCount" :key="item">
        <pdf :src="pdfSrc" :page="item" @loaded="handlePdfLoaded"></pdf>
      </div>

      <div class="secBtm">
        <van-button type="primary" class="btn_back" v-waves @click="$router.go(-1)">返回</van-button>
      </div>
    </div>
    <VanLoading :if-show-loading.sync="ifShowLoading" />
  </div>
</template>

<script>
import pdf from "vue-pdf";

export default {
  name: "PdfAgreement",
  props: {
    navBarTitle: {
      type: String,
      default: "用户协议"
    },
    // pdf 总页数
    pageCount: {
      type: Number,
      default: 0
    },
    pdfSrc: {
      type: String,
      default: ""
    }
  },
  components: {
    pdf
  },
  data() {
    return {
      ifShowLoading: true,
      currentLoadedPage: 0
    };
  },
  methods: {
    handlePdfLoaded() {
      this.currentLoadedPage++;
      if (this.currentLoadedPage === this.pageCount) {
        this.ifShowLoading = false;
      } else {
        this.ifShowLoading = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.agreement-view {
  width: 100%;

  .agreement-content {
    margin-top: 30px;
    padding-bottom: 180px;

    .pdf {
      margin-bottom: 30px;
      width: 100%;
      background-color: #fff;
    }

    .secBtm {
      width: 100vw;
      position: fixed;
      bottom: 0;
      left: 0;
      z-index: 2;
      background-color: #fff;
      padding: 40px 0;
      box-shadow: 0px -6px 14px 0px rgba(0, 0, 0, 0.08);
    }

    .btn_back {
      width: calc(100% - 60px);
      margin: 0 auto;
    }
  }
}
</style>
