<template>
  <div class="warp">
    <header-view></header-view>
    <div class="warp-box">
      <div class="box-left">
        <category-view v-model="statistics.male"
                       title="男生"
                       icon="boy_box"></category-view>
        <category-view v-model="statistics.female"
                       title="女生"
                       icon="girl_box"></category-view>
        <category-view v-model="statistics.press"
                       title="出版"
                       icon="book_box"></category-view>
      </div>
      <div class="box-right">
        <div class="box-warp">
          <div class="banner">
            <banner-view></banner-view>
          </div>
          <div class="search-all">
            <search-all-view></search-all-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/babel">
  import vm from "./vm.js";
  export default vm;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "./index.scss";
</style>
