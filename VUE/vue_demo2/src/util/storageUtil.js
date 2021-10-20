/*
* 使用localStorage存储数据的工具模块
* 1.函数
* 2.对象
* 需要向外暴露一个功能还是多个功能
* */

export default {
  saveTodos(todos){
    window.localStorage.setItem('todos_key',JSON.stringify(value))
  },
  readTodos(){
    return JSON.parse(window.localStorage.getItem('todos_key') || '[]')
  },
}
