<template>
  <div>
    <p>ID:{{$route.params.id}}</p>
    <ul>
      <li>id:{{messageDetail.id}}</li>
      <li>title:{{messageDetail.title}}</li>
      <li>content:{{messageDetail.content}}</li>
    </ul>

  </div>
</template>

<script>

  export default {
    data(){
      return{
        messageDetail:{},
      }
    },
    mounted() {
      setTimeout(()=>{
        const allMessagesDetail = [
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
        this.allMessagesDetail = allMessagesDetail
        const id = this.$route.params.id*1
        this.messageDetail = allMessagesDetail.find(detail=>detail.id===id)
      },100)
    },
    watch:{
      $route:function (value) {//路由路径（param）发生了改变
        const id = value.params.id*1
        this.messageDetail = this.allMessagesDetail.find(detail=>detail.id===id)
      }
    }
  }

</script>

<style>

</style>
