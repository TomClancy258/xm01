<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <tab-bar/>
  </div>
</template>

<script>
  import TabBar from "components/content/tabbar/TabBar"
  export default {
    name:"app",
    components:{
      TabBar
    }
  }
</script>

<style>

</style>
