<template>
  <div id="detail-img">
    <img v-for="item in list" :src="item" @load="detailImgLoad()"/>
  </div>
</template>

<script>
  export default {
    name: "DetailImg",
    props:{
      list:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
        count:0
      }
    },
    methods:{
      detailImgLoad(){
        if(++this.count===this.list.length)
          this.$emit('detailImgOK')
      }
    }
  }
</script>

<style scoped>
  #detail-img{
    /*text-align: center;*/
    margin-top:20px;
  }
  img{
    width:100%;
    /*margin:5px 0px;*/
  }
</style>