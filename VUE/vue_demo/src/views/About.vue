<template>
  <div>
    <h2>About</h2>
    <p>{{msg}}</p><br>
    <input type="text" v-model="a">
  </div>
</template>

<script>
export default {
  props:{
    msg:String,
  }
}

</script>

<style>

</style>
