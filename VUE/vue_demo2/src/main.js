/*
入口js文件
*/
import Vue from "vue";
import App from "./App";
import './base.css';

new Vue({
  el:'#app',
  components:{
    App
  },
  template:'<App/>'
})
