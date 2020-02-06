<template>
  <div id="top-carousel">
    <div class="carousel slide"
         data-ride="carousel"
         data-interval="5000"
         data-wrap="true"
         data-pause="hover"
         id="top-img">
      <div class="carousel-inner">
        <div v-for="item,i in topImg" :class="['carousel-item',{active:i==0}]">
          <img :src="item" class="d-block w-75 mx-auto" style="height: 300px;"/>
        </div>
        <a class="carousel-control-prev" href="#top-img" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#top-img" data-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>
        <ol class="carousel-indicators">
          <li v-for="item,i in topImg" data-target="#top-img" :data-slide-to="i" :class="{active:i==0}"></li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
  import "assets/js/bs/jquery"
  import "assets/js/bs/bootstrap.bundle"
  export default {
    name: "TopCarousel",
    props:{
      topImg:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  @import "~assets/css/bs/bootstrap.css";
  #top-img{
  }
</style>