<template>
  <div class="tab-bar-item text-center" @click="routerClick()">
    <div class="item-icon" v-show="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div class="item-icon" v-show="isActive">
      <slot name="item-icon-active"></slot>
    </div>
    <div class="item-text" :style="this.colorActive">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props:{
      path:String
    },
    computed:{
      isActive(){
        return this.$route.path==this.path
      },
      colorActive(){
        return this.isActive?{color:'red'}:{}
      }
    },
    methods:{
      routerClick(){
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
  @import "~assets/css/bs/bootstrap.css";
  .item-text{
    font-size: 14px;
    margin-top: -2px;
  }
  img{
    vertical-align: middle;
  }
</style>