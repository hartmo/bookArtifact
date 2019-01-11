<template>
  <div class="banner-warp"
       @mouseenter="enter"
       @mouseleave="leave">
    <div class="banner-image-warp">
      <transition name="fade">
        <div class="banner-box"
             v-for="(item,index) in bannerArr"
             :key="index"
             @click="router(item)"
             v-if="index === showIndex">
          <img :src="item.img"
               alt="">
        </div>
      </transition>
    </div>
    <div class="btn-arr" v-show="BannerBtn">
      <div class="left" @click="bannerClick(-1)">&lt;</div>
      <div class="right" @click="bannerClick(1)">&gt;</div>
    </div>
    <ul class="banner-list">
      <li v-for="(item,index) in bannerArr.length"
          :key="index"
          @mouseleave="leave"
          @mouseenter="enter(index)"
          :class="[{'active' : index === showIndex}]"></li>
    </ul>
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
