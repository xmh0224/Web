/*
* 路由器模块
* */
import Vue from 'vue'
import VueRouter from 'vue-router'
import About from "../views/About";
import Home from "../views/Home";
import Message from "../views/Message";
import News from "../views/News";
import MessageDetail from "../views/MessageDetail";

// 声明使用插件
Vue.use(VueRouter);

export default new VueRouter({
  // n个路由
  routes: [
    {
      path:'/',
      redirect:'/about',// 重定向
    },
    {
      path:'/about',
      component:About,
    },
    {
      path:'/home',
      component:Home,
      children:[
        {
          // path:'/message', // path最左侧的/永远代表根路径
          path:'/home/message',
          component:Message,
          children:[
            {
              path:'/home/message/detail/:id',//占位符
              component:MessageDetail,
            }
          ]
        },
        {
          path:'news',// 或者省去斜杠
          component:News,
        },
        {
          path:'',
          redirect:'/home/News'
        },
      ],
    },
  ]
})

