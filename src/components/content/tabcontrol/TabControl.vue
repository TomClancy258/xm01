<template>
  <div id="tab-control">
    <div class="d-flex justify-content-around">
      <div v-for="t,i in titles" @click="changeType(i)" :class="currentIndex==i?'title-active':''">
        {{t}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props:{
      titles:{
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
    methods:{
      changeType(i){
        this.currentIndex=i
        this.$emit("indexgetType",i)
      }
    }
  }
</script>

<style scoped>
  /*@import "~assets/css/bs/bootstrap.css"*/
  .title-active{
    border-bottom: 1px solid red;
  }
  #tab-control div{
    padding:5px;
  }
  #tab-control{
    /*position: sticky;*/
    /*top:44px;*/
    background-color: #ffffff;
  }
</style>