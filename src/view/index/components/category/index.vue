<template>
  <div class="box boy_box">
    <div class="box_title">
      <span class="title" :class=[icon]>{{title}}</span>
      <span class="more">更多</span>
    </div>
    <ul class="box_content">
      <li v-for="(boy,key,index) in value"
          :key="index">
        <a>
          <div>{{ boy.name }}</div>
          <div>{{ boy.bookCount }}</div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script type="text/babel">
  import vm from "./vm.js";
  export default vm;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "./index.scss";
</style>
