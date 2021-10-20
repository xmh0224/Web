<template>
  <div>
    <p class="msg">{{msg}}</p>
    <Xumianhao/>
  </div>
</template>

<script>
import Xumianhao from "./Xumianhao.vue";
export default {
  components: {Xumianhao},
 // 配置对象（与Vue一致）
  data(){// 在组件里边必须写函数
    return{
      msg:'Hello Vue!',
    }
  }
}

</script>

<style>
  .msg{
    color: red;
    font-size: 30px;
  }

</style>
