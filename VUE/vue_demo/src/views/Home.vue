<template>
  <div>
    <h2>Home</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link to="/home/news">News</router-link>
          <router-link to="/home/message">Message</router-link>
        </li>
      </ul>
    </div>
    <div>
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
import News from "./News";
import Message from "./Message";
export default {
  components: {News,Message}
}

</script>

<style>

</style>
