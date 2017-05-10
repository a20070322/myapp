<template lang="html">
  <div class="l_details">
    <div class="sec_icon" v-for="(item,index) in dataSource">
      <div class="dl_head">
        <img :src="dataSource[index].banner.sale_label" >
      </div>
      <router-link :to="`/details/${index}`" tag="div" class="dl_banner">
      <!-- <div class="dl_banner"> -->
        <img :src="dataSource[index].banner.category_img">
      <!-- </div> -->
      </router-link>
      <div class="dl_inn">
        <router-link :to="`/detail/${index}`" tag="div" class="dl_sku" v-for="(item,index) in dataSource[index].sku" key="index">
        <!-- <div class="dl_sku" v-for="(item,index) in dataSource[index].sku"> -->
          <img :src="item.category_img" v-if="item.category_img" class="c_img">
          <img :src="item.img_id" class="img_id">
          <p class="sku_title">{{item.goods_name}}</p>
          <p class="sku_spec">{{item.goods_spec}}</p>
          <p class="sku_price">{{"￥"+item.price/100}}</p>
        <!-- </div> -->
        </router-link>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      dataSource:[]
    }
  },
  mounted:function(){
    let _this = this
    utilsAxios.get({
      url:'api/index/v1/m-category',
      method:'POST',
      callback(res){
        // console.log(res.data.data.category)
        _this.dataSource = res.data.data.category

    }})
  }
}
import utilsAxios from '../../utils/axios.js'
import Vue from 'vue'

</script>

<style lang="css">
</style>
