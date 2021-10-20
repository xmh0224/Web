<!--根组件-->
<!--其他组件单独放在components文件夹内-->
<template>
  <div>
    <img class='logo' src="./assets/logo.png" alt="logo">
    <HelloWolrd/>
    <Jiangjiajia/>
  </div>
</template>

<script>
  // 1. 引入组件
  import HelloWolrd from "./components/HelloWolrd.vue";
  import Jiangjiajia from "./components/Jiangjiajia.vue";

  export default {
    // 2. 映射组件标签
    components:{
      HelloWolrd,
      Jiangjiajia,
    }
  }

</script>

<style>
.logo{
  width: 200px;
  height: 200px;
}
</style>
