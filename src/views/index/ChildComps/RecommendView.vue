<template>
  <div id="recommend-view" class="my-2 d-flex justify-content-around">
    <div v-for="item in recommend" class="item-width">
      <a :href="item.link">
        <img-text-item>
          <img :src="item.image" slot="item-img" class="w-100" @load="recommendViewImgLoad()" />
          <div slot="item-text">{{item.title}}</div>
        </img-text-item>
      </a>
    </div>
  </div>
</template>

<script>
  import ImgTextItem from "components/common/imgtext/ImgTextItem"
  export default {
    name: "RecommendView",
    props:{
      recommend:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
        isRecommendViewImgLoad:false
      }
    },
    components:{
      ImgTextItem
    },
    methods:{
      recommendViewImgLoad(){
        if(!this.isRecommendViewImgLoad){
          this.$emit("recommendViewImgLoad")
          this.isRecommendViewImgLoad=true
        }
      }
    }
  }
</script>

<style scoped>
  @import "~assets/css/bs/bootstrap.css";
  #recommend-view *{
    color:#1b1e21;
  }
  .item-width{
    width:23%;
  }
</style>