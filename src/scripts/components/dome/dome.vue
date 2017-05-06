<template>
  <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
    <ul>
      <li v-for="item in list">{{ item }}</li>
    </ul>
    <div slot="top" class="mint-loadmore-top">
      <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
      <span v-show="topStatus === 'loading'">Loading...</span>
    </div>
  </mt-loadmore>
</template>
<script>
import Vue from "vue"
import { Loadmore } from 'mint-ui';
import utilAxios from '../utils/axios'
Vue.component(Loadmore.name, Loadmore);

  export default {
    data() {
      return {
        topStatus: '',
        list:[1,2,3,4,5,6,7,8,9],
        allLoaded:true
      };
    },
    methods: {
      loadTop:function() {
        // 加载更多数据
        console.log("加载中")
        const that=this
        setTimeout(function(){
          console.log("数据添加成功");
          that.$refs.loadmore.onTopLoaded();
        }, 3000);
      },
      loadBottom:function() {
        // 加载更多数据
        console.log("第一次加载");
        this.allLoaded = false;// 若数据已全部获取完毕
        this.$refs.loadmore.onBottomLoaded();
      }
    },
    mounted: function () {
      let that = this
      utilAxios.get({
        url: 'api/index/v1/m-nav',
        method: 'POST',
        data:"",
        callback: function (res) {
          console.log(res.data);
          // that.dataSource = that.dataSource.concat(res.data.subjects)
        }
      })
  }
  };
</script>