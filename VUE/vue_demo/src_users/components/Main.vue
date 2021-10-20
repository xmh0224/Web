<template>
  <div class="row">
    <h2 v-show="firstView">输入用户名搜索</h2>
    <h2 v-show="loading">Loading……</h2>
    <h2 v-show="errorMsg">{{errorMsg}}</h2>
    <div v-for="(user,index) in users" class="card" :key="index">
      <a :href="users.url" target="_blank">
        <img :src="user.avatar_url" style='width: 100px'/>
      </a>
      <p class="card-text">{{ user.name }}</p>
    </div>
  </div>

</template>

<script>
import PubSub from "pubsub-js";
import axios from 'axios';

export default {
  data () {
    return {
      firstView: true,
      loading: false,
      users: null,//[{url:'',name:'',avatar_url:''}]
      errorMsg:'',
    }
  },
  mounted() {
    // 订阅消息
    PubSub.subscribe('search',(message,searchName)=>{ // 说明需要发ajax请求进行搜索
      // 更新状态（请求中）
      this.firstView = false
      this.loading = true
      this.users = []
      this.errorMsg = ''
      // 发ajax请求
      const url = `https://api.github.com/search/users?q=${searchName}`
      axios.get(url).then(
        response => {
          // 成功，发送成功状态
          this.loading = false
          this.users = response.data.items.map(item => ({
            url:item.html_url,
            avatar_url:item.avatar_url,
            name:item.login,
          }))
        })
        .catch(error=>{
        // 失败，发送失败状态
          this.loading = false
          this.errorMsg = '请求失败'
      })
    })
  }
}

</script>

<style>
.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
