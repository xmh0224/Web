<template>
  <div>
    <div v-if="!repoUrl">
      Loading……
    </div>
    <div v-else>
      most star repo is <a :href="repoUrl">{{repoName}}</a>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
/*在哪里使用axios就在哪里引用*/

export default {
  data(){
    return{
      repoUrl:'',
      repoName:'',
    }
  },
  mounted() {
    // 1.使用vue-resource发送ajax请求获取数据
    const url = 'https://api.github.com/search/repositories?q=vu&sort=stars'
    // this.$http.get(url).then(//返回一个promise对象
    //   response=>{
    //     //成功了
    //     const result = response.data
    //     //得到最受欢迎的repo
    //     const mostRepo = result.items[0]
    //     this.repoUrl = mostRepo.html_url
    //     this.repoName = mostRepo.name
    //   },
    //   response=>{
    //     alert('请求失败')
    //   }
    // )
    // 2.使用axios发送ajax请求
    axios.get(url).then(//返回一个promise对象
      response=>{
        //成功了
        const result = response.data
        //得到最受欢迎的repo
        const mostRepo = result.items[0]
        this.repoUrl = mostRepo.html_url
        this.repoName = mostRepo.name
      },
      response=>{
        alert('请求失败')
      })


  }

}

</script>

<style>

</style>
