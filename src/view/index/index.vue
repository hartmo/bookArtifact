<template>
  <div>
    <header-view></header-view>
    <div class="warp-index">
      <div class="left">
        <category v-model="statistics.male" title="男生"></category>
        <category v-model="statistics.female" title="女生"></category>
        <category v-model="statistics.press" title="出版"></category>
      </div>
      <div class="right">
        <div class="banner">

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
