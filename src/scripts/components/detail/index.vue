<template lang="html">
<div class="dl_detail">
  <div class="det_head">
    <span class="det_back" onclick="history.go(-1)">︿</span>
    <p>{{dataSource.goods_name}}</p>
    <div class="yo-ico share">&#xe632;</div>
  </div>
  <div style="height:0.01rem;opacity:0"></div>
  <div class="det_con">
    <div class="det_c_con">
      <mt-swipe :auto="4000" :show-indicators="true">
  		  <mt-swipe-item :key="index" v-for="(item,index) in dataSource.img">
  			<img v-lazy.container="item.img_id">
  		  </mt-swipe-item>
  		</mt-swipe>
      <div class="det_city">
        <p v-text="dataSource.goods_name"></p>
        <p v-text="dataSource.goods_slogan"></p>
        <p v-text="price"></p>
        <img :src="dataSource.state_origin">
      </div>
      <div style="height:0.01rem;opacity:0"></div>
      <div class="" style="position:relative">
        <div class="det_favo" v-text="`${yh} ● ${mj}`"></div>
        <div class="det_point">•&nbsp;•&nbsp;•</div>
      </div>
      <div class="" style="text-align:center;line-height:.3rem;height:.3rem">
        正品 ● 海外 ● 冷链 ● 配送
      </div>
      <div class="det_gg" style="position:relative;text-align:center;background:#fff;height:.3rem;line-height:.3rem">
        <span v-html = "`已选规格&nbsp;&nbsp;${gg}`"></span>
        <p style="position:absolute;height:100%;top:0;right:0;width:.25rem;font-weight:500">〉</p>
      </div>
      <div style="height:0.01rem;opacity:0"></div>
      <div class="det_ps">
        <div class="ps_ico">
          <div class="ps_post" v-text = "`送至 ${ps}`"></div>
          <div class="ps_yow" v-text = "`${yow} ${msg}`"></div>
        </div>
        <p class="yo-ico ps_dw">&#xe61b;</p>
      </div>
      <div style="height:0.05rem;opacity:0"></div>
      <div class="det_comment">

      </div>
      <div class="det_foot">
        <p>继续拖动查看图文详情</p>
      </div>

    </div>
    <div class="det_nav">
      <div class="det_nav_ser yo-ico" style="color:#0091da;font-size:.16rem">&#xe61c;</br><span style="color:#888;font-size:.12rem;">客服</span></div>
      <div class="det_nav_col yo-ico" style="color:#888;font-size:.16rem">&#xe639;</br><span style="font-size:.12rem;">收藏</span></div>
      <div class="det_nav_car yo-ico" style="color:#888;font-size:.16rem">&#xe768;</br><span style="font-size:.12rem;">购物车</span></div>
      <div class="det_nav_cho">选择商品规格</div>
    </div>
  </div>
  <transition name="fold">
    <div v-show="false" class="example"></div>
  </transition>
  <Popup show="true">
      Popup content
  </Popup>


</div>

</template>
<script>
import Vue from 'vue'
import utilAxios from '../../utils/axios'
import { Swipe, SwipeItem } from 'mint-ui'
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
import { Lazyload } from 'mint-ui'

import { Popup } from '../../../../node_modules/yo3/component/popup'

Vue.use(Lazyload)
export default {
  data(){
    return{
      // list_Arr:[{
      //   "Content-Type":"application/json",
      //   "X-Key":"d746a2b00e110695c1facd72b64ff663",
      //   "X-City":"110000",
      //   "X-Prov":"110000",
      //   "X-Terminal":"4"
      // }],
      dataSource:{},
      price:'',
      yh:'',
      mj:'',
      gg:'',
      ps:'',
      yow:'',
      msg:''

    }
  },
  methods:{

  },
  mounted:function(){
    let _this = this
    // utilsAxios.post({
    //   url:'/api/goods/detail',
    //   method:'POST',
    //   headers:_this.list_Arr[0],
    //   data:{
    //     'sku_item_no':_this.$route.params.id
    //   },
    //   callback:function(res){
    //     console.log(res.data)
    //   }
    // })
     utilAxios.get({
        url:'http://zzyapp.applinzi.com/api/class.php?type=detail',
        method:'GET',
        callback:function(res){
          _this.dataSource = res.data.data;
          console.log(res.data.data)
          _this.price ='￥' + (_this.dataSource.floor_price/100)
          _this.yh = _this.dataSource.act[0].name
          _this.mj = _this.dataSource.act[0].remark
          _this.gg = _this.dataSource.sku[0].goods_spec
          if(_this.dataSource.is_sellable == "Y"){
            _this.yow = "有货"
          }else{
            _this.yow = "无货"
          }
          _this.msg=_this.dataSource.msg.replace('$',_this.dataSource.cut_time).replace('#',_this.dataSource.date_node)

        }
      })
  }
}
</script>

<style lang="css">
.det_back{
  display: inline-block;
  transform: rotate(-90deg);
}
image[lazy=loading] {
  width: 100%;
  height: .4rem;
  margin: auto;
}

.example {
    width: 100px;
    height: 100px;
    transform: translate3d(0, -100px, 0);
}
.fold-enter-active, .fold-leave-active {
    transition: all .5s;
}
.fold-enter, .fold-leave-active {
    transform: translate3d(0, 0, 0);
}
</style>
