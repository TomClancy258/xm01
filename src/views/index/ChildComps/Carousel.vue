<template>
  <div class="carousel slide"
       data-ride="false"
       data-interval="5000"
       data-wrap="true"
       data-pause="hover"
       id="myCarousel">
    <div class="carousel-inner">
      <div class="carousel-item " v-for="imgData,i in imgList" :class="i==0?'active':''">
        <a :href="imgData.link">
          <img :src="imgData.image" class="d-block w-100" alt="" @load="imgCarouselLoad()" />
        </a>
      </div>
      <a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </a>
      <a class="carousel-control-next" href="#myCarousel" data-slide="next">
        <span class="carousel-control-next-icon"></span>
      </a>
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
    </div>
  </div>
</template>

<script>
  import "assets/js/bs/jquery.js"
  import "assets/js/bs/bootstrap.bundle.js"
  export default {
    name: "Carousel",
    props:{
      imgList:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
        isImgLoad:false
      }
    },
    methods:{
      imgCarouselLoad(){
        if(!this.isImgLoad){
          this.$emit("indexImgCarouselLoad")
          this.isImgLoad=true
        }
      }
    }
  }
</script>

<style scoped>
  @import "~assets/css/bs/bootstrap.css";
  #myCarousel{
    margin-top: 44px;
  }
</style>