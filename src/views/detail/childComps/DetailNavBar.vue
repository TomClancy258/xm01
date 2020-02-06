<template>
  <div id="detail-navbar">
    <nav-bar>
      <img src="~assets/img/common/back.svg" slot="left" @click="backRouter()"/>
      <div slot="center" class="center">
        <div v-for="item,i in navbartext"
             class="text"
             @click="changeActive(i)" :class="{'item-active':currentIndex==i}">
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar"
  export default {
    name: "DetailNavBar",
    props:{
      navbartext:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
        currentIndex:0
      }
    },
    components:{
      NavBar
    },
    methods:{
      backRouter(){
        this.$router.back()
      },
      changeActive(i){
        this.currentIndex=i
      }
    }
  }
</script>

<style scoped>
  #detail-navbar{
    position: relative;
    z-index:9;
  }
  .center{
    display: flex;
  }
  .text{
    flex: 1;
    color:white;
  }
  .item-active{
    color:red;
  }
</style>