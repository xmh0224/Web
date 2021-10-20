/*
入口js文件
*/
import Vue from "vue";
import App from "./App";

//声明使用插件

new Vue({
  el:'#app',
  components:{
    App
  },
  template:'<App/>'
})
