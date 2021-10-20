<template>
  <div class="todo-container">
    <div class="todo-wrap">
<!--      <Header :addTodo="addTodo"/>-->
<!--      <Header @addTodo="addTodo"/>&lt;!&ndash;绑定事件监听，用来代替函数&ndash;&gt;-->
      <Header ref="header"/>
      <List :todos="todos"/>
<!--      <Footer :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAllTodos="selectAllTodos" :isAllCheck="isAllCheck"/>-->
      <Footer>
        <input type="checkbox" v-model="isAllCheck" slot="checkAll"/>
        <span slot="count"></span>
        <button class="btn btn-danger" v-show="completeSize" @click="deleteCompleteTodos" slot="delete">清除已完成任务</button>
      </Footer>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import List from "./components/List.vue";
import Footer from "./components/Footer.vue";
import storageUtil from "./util/storageUtil.js";

export default {
  components: {Footer, List, Header},
  methods:{
    addTodo(todo){
      this.todos.unshift(todo)
    },
    deleteTodo(index){
      this.todos.splice(index,1)
    },
    // 删除所有选中的todo
    deleteCompleteTodos(){
      this.todos = this.todos.filter(todo => !todo.complete)
    },
    // 全选或者全部选
    selectAllTodos(isCheck){
      this.todos.forEach(todo => todo.complete=isCheck)
    }
  },
  mounted(){//执行异步代码
    //给Header绑定addTodo事件监听
    // this.$on('addTodo') //给APP绑定的监听
    this.$refs.header.$on('addTodo',this.addTodo)
  },
  computed:{
    completeSize(){
      return this.todos.reduce((preTotal,todo) => preTotal + (todo.complete?1:0),0)
    },
    isAllCheck:{
      get(){
        return this.completeSize===this.todos.length && this.completeSize>0
      },
      set(value){ //value是checkbox最新的值
        this.selectAllTodos(value)
      }
    }
  },
  data(){
    return{
      // 从localStorage读取todos
      // todos:JSON.parse(window.localStorage.getItem('todos_key') || '[]')
      todos:storageUtil.readTodos()
      // todos:[
      //   {
      //     title:'chifan',
      //     complete:false,
      //   },{
      //     title:'shuijiao',
      //     complete: true,
      //   },{
      //     title:'coding',
      //     complete: false,
      //   }
      // ]
    }
  },
  watch:{ // 监视
    todos:{
      deep:true,// 深度监视
      handler:function (value) { //处理的回调函数
        // 将todos最新的值的json数据，保存到localStorage
        // window.localStorage.setItem('todos_key',JSON.stringify(value))
        storageUtil.saveTodos(value)
      }
      // handler:storageUtil.saveTodos(value)
    }
  }
}

</script>

<style>
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
