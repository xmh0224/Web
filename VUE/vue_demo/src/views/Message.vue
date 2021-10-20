<template>
  <div>
    <ul>
      <li v-for="(message,index) in messages" :key="message.id"><!--对象如果有标识属性就不用index（：key）-->
<!--      <a href="???">{{message.title}}</a></li>-->
        <router-link :to="`/home/message/detail/${message.id}`">{{message.title}}</router-link>
        <button @click="pushShow(message.id)">push查看</button>
        <button @click="replaceShow(message.id)">replace查看</button>
      </li>
    </ul>
    <button @click="$router.back()">回退</button>
    <router-view></router-view>
  </div>

</template>

<script>
export default {
  data(){
    return {
      messages:[],

    }
  },
  methods:{
    pushShow(id){
      this.$router.push(`/home/message/detail/${id}`)
    },
    replaceShow(id){
      this.$router.replace(`/home/message/detail/${id}`)
    },
  },
  mounted() {
    // 模拟ajax请求从后台获取数据
    setTimeout(()=>{
      const messages = [
        {
          title:'message001',
          id:1,
          content:'message001 content...'
        },
        {
          title:'message003',
          id:3,
          content:'message003 content...'
        },
        {
          title:'message005',
          id:5,
          content:'message005 content...'
        },
      ]
      this.messages = messages
    },1000)
  }
}

</script>

<style>

</style>
