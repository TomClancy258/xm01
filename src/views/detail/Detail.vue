<template>
  <div id="detail">
    <detail-navbar :navbartext="navbartext"/>
    <scroll class="content"
            ref="scroll">
      <top-carousel :topImg="carouselImg"/>
      <detail-img :list="detailImg" @detailImgOK="detailGetImg"/>
      <DataList :list="tuijian"/>
    </scroll>
  </div>
</template>

<script>
  import DetailNavbar from "./childComps/DetailNavBar"
  import TopCarousel from "./childComps/TopCarousel"
  import DetailImg from "./childComps/DetailImg"

  import DataList from 'views/index/ChildComps/DataList'

  import Scroll from "components/common/scroll/Scroll"

  import {getDetail,getRecommend} from "network/detail"

  import {debounce} from "common/utils"

  export default {
    name: "Detail",
    components:{
      DetailNavbar,
      TopCarousel,
      DetailImg,
      Scroll,
      DataList
    },
    data(){
      return{
        iid:null,
        navbartext:['商品','参数','评论','推荐'],
        carouselImg:[],
        detailImg:[],
        tuijian:[],
        itemImgLoader:null
      }
    },
    created() {
      this.iid=this.$route.params.iid
      this.getDetailCarouselImg(this.iid)
      this.detailRecommend()
    },
    methods:{
      getDetailCarouselImg(iid){
        getDetail(iid).then(res=>{
          this.carouselImg=res.result.itemInfo.topImages

          this.detailImg=res.result.detailInfo.detailImage[0].list
        })
      },
      detailRecommend(){
        getRecommend().then(res=>{
          this.tuijian=res.data.list
        })
      },
      detailGetImg(){
        this.$refs.scroll.refresh()
      }
    },
    mounted(){
      const refresh=debounce(this.$refs.scroll.refresh,200)
      this.itemImgLoader=()=>{
        refresh()
      }
      this.$bus.$on("itemImgLoad",this.itemImgLoader)
    },
    destroyed() {
      this.$bus.off("itemImgLoad",this.itemImgLoader)
    }
  }
</script>

<style scoped>
  #detail{
    position:relative;
    z-index: 9;
    background: #ffffff;
  }
  .content{
    height: calc(100vh - 44px);
  }
</style>