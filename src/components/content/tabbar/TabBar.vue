<template>
  <div id="tab-bar" class="d-flex justify-content-around bg-light fixed-bottom">
    <tab-bar-item path="/index">
      <img src="~assets/img/tabbar/index.svg" slot="item-icon"/>
      <img src="~assets/img/tabbar/index_active.svg" slot="item-icon-active"/>
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img src="~assets/img/tabbar/category.svg" slot="item-icon"/>
      <img src="~assets/img/tabbar/category_active.svg" slot="item-icon-active"/>
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/shop">
      <img src="~assets/img/tabbar/shop.svg" slot="item-icon"/>
      <img src="~assets/img/tabbar/shop_active.svg" slot="item-icon-active"/>
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/mine">
      <img src="~assets/img/tabbar/mine.svg" slot="item-icon"/>
      <img src="~assets/img/tabbar/mine_active.svg" slot="item-icon-active"/>
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </div>
</template>

<script>
  import TabBarItem from "components/common/tabbar/TabBarItem"

  export default {
    name: "TabBar",
    components: {
      TabBarItem
    },
    methods: {}
  }
</script>

<style scoped>
  @import "~assets/css/bs/bootstrap.css";

  #tab-bar {
    height: 44px;
    border-top: 1px #80bdff solid;
    z-index: 1;
  }
</style>