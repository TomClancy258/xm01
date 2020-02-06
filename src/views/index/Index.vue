<template>
  <div id="index">
    <nav-bar>
      <div slot="center">
        购物街
      </div>
    </nav-bar>
    <tab-control :titles="['流行','新款','精选']"
                 @indexgetType="getType"
                 ref="tabControl1" v-show="isTabControlShow" class="tab-control1"/>
    <scroll class="content"
            ref="scroll"
            :probeType="3"
            :pullUpLoad="true"
            @pullingUp="loadMore"
            @scroll="contentScroll">
      <carousel :imgList="imgList"
                @indexImgCarouselLoad="indexImgCarouselLoad"/>
      <recommend-view :recommend="recommend" @recommendViewImgLoad="recommendViewImgLoad" ref="recommendView"/>
      <tab-control :titles="['流行','新款','精选']"
                   @indexgetType="getType"
                   ref="tabControl2"/>
      <data-list :list="types[type].list"/>
    </scroll>

    <back-top @click.native="backTopClick()" v-show="isShowBackTop" />
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar"
  import Carousel from "./ChildComps/Carousel"
  import RecommendView from "./ChildComps/RecommendView"
  import TabControl from "components/content/tabcontrol/TabControl"
  import DataList from "./ChildComps/DataList"
  import Scroll from "components/common/scroll/Scroll"
  import BackTop from "components/content/backTop/BackTop"

  import {getImg,getListByTitle} from "network/index";

  import {debounce} from "common/utils"

  export default {
    name: "Index",
    data(){
      return{
        imgList:[],
        recommend:[],
        types:{
          pops:{page:0,list:[]},
          news:{page:0,list:[]},
          sells:{page:0,list:[]}
        },
        type:'pops',
        isShowBackTop:false,
        tabControlTop:0,
        recommendViewTop:0,
        isTabControlShow:false,
        saveY:0,
        itemImgLoader:null
      }
    },
    components:{
      RecommendView,
      NavBar,
      Carousel,
      TabControl,
      DataList,
      Scroll,
      BackTop
    },
    created() {
      this.indexgetImg()
      this.indexgetListByTitle('pop')
      this.indexgetListByTitle('new')
      this.indexgetListByTitle('sell')

    },
    mounted(){
      // this.$bus.$on("itemImgLoad",()=>{
      //   this.$refs.scroll.refresh()
      // })
      const refresh=debounce(this.$refs.scroll.refresh,200)
      this.itemImgLoader=()=>{
        refresh()
      }
      this.$bus.$on("itemImgLoad",this.itemImgLoader)
    },
    methods:{
      indexgetImg(){
        getImg().then(res=>{
          this.imgList=res.data.banner.list
          this.recommend=res.data.recommend.list
        })
      },
      indexgetListByTitle(type){
        const t=type+'s'
        this.types[t].page++
        getListByTitle(type,this.types[t].page).then(res=>{
          this.types[t].list.push(...res.data.list)
        })
      },
      getType(type){
        switch (type) {
          case 0:this.type='pops';break;
          case 1:this.type='news';break;
          case 2:this.type='sells';break;
        }
        this.$refs.tabControl1.currentIndex=type
        this.$refs.tabControl2.currentIndex=type
      },
      backTopClick(){
        this.$refs.scroll.scrollToP(0,0)
      },
      contentScroll(position){
        this.isShowBackTop=(-position.y)>1000

        this.isTabControlShow=(-position.y)>this.tabControlTop
      },
      loadMore(){
        // console.log(this.type)
        this.types[this.type].page++
        const t=this.type.substr(0,this.type.length-1)
        getListByTitle(t,this.types[this.type].page).then(res=>{
          this.types[this.type].list.push(...res.data.list)
        })
        this.$refs.scroll.finishPullUp()
        // this.$refs.scroll.scroll.refresh()
      },
      indexImgCarouselLoad(){
        this.tabControlTop=this.$refs.tabControl2.$el.offsetTop
      },
      recommendViewImgLoad(){
        this.tabControlTop=this.$refs.tabControl2.$el.offsetTop
      }
    },
    activated() {
      this.saveY=this.$refs.scroll.scrollToP(0,this.saveY,0)
      this.$refs.scroll.refresh()
    },
    deactivated() {
      this.saveY=this.$refs.scroll.getScrollY()

      this.$bus.$off('itemImgLoad',this.itemImgLoader)
    }
  }
</script>

<style scoped>
  /*.content{*/
    /*overflow: hidden;*/
    /*height: calc(100vh - 88px);*/
    /*margin-top:44px;*/
  /*}*/

  .content{
    overflow: hidden;
    position: absolute;
    top:44px;
    bottom: 44px;
    left: 0;
    right: 0;
  }
  .tab-control1{
    position: relative;
    z-index: 9;
  }
</style>