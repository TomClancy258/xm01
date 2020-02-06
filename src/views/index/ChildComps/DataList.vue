<template>
  <div id="data-list" class="d-flex flex-wrap justify-content-around mt-3">
    <div v-for="item in list" class="card text-center data-width mb-3" @click="itemClick(item.iid)">
      <img v-if="item.show!==undefined" :src="item.show.img" class="card-img-top" @load="imgLoad()"/>
      <img v-else :src="item.image" class="card-img-top" @load="imgLoad()"/>
      <div class="card-body py-1">
        <p class="card-text text-truncate m-0" :title="item.title">
          {{item.title}}
        </p>
        <span class="price">
          {{item.price}}
        </span>
        <span>
          {{item.cfav}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DataList",
    props:{
      list:{
        type:Array,
        default(){
          return []
        }
      }
    },
    methods:{
      imgLoad(){
        // console.log("图片加载完成")
        this.$bus.$emit("itemImgLoad")
      },
      itemClick(iid){
        this.$router.push("/detail/"+iid)
      }
    }
  }
</script>

<style scoped>
  @import "~assets/css/bs/bootstrap.css";
  .price{
    color:red;
  }
  .data-width{
    width:49%;
  }
  #data-list{
    padding:0 1.2%;
  }
</style>