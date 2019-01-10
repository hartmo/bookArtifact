<template>
  <div class="header">
    <div class="header-top">
      <div class="logo">
        <img src="@/assets/images/logo.png"
             alt="">
      </div>
      <div class="search">
        <input type="text"
               placeholder="搜索书名或作者"
               v-model="searchText">
        <span @click="search"
              class="btn"></span>
      </div>
    </div>
    <ul class="bar">
      <li :class="[{'active':item.path === path}]"
          v-for="(item,index) in barArr" @click="routerFun(item.path)"
          :key="index">{{item.name}}</li>
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
