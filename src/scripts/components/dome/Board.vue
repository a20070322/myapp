<template lang="html">
  <!-- <div class="swiper">
    <img src="https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2456570038.jpg" alt="">
  </div> -->
  <mt-swipe :auto="2000">
    <mt-swipe-item v-for="(item,index) in dataSource" :key="index">
      <img :src="item.images.large" alt="">
    </mt-swipe-item>
  </mt-swipe>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui'
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

import utilAxios from '../utils/axios'

export default {
  data() {
    return {
      dataSource: []
    }
  },

  mounted: function () {
    let that = this
    utilAxios.get({
      url: 'http://localhost:9000/swiper',
      method: 'get',
      callback: function (res) {
        that.dataSource = that.dataSource.concat(res.data.subjects)
      }
    })
  }
}
</script>
