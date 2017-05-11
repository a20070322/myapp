<template lang="html">

  <div class="list">
    <header class="yo-search yo-search-a">
       <router-link to="/classify" active-class="active">
          <p class="l_pp  yo-ico">&#xf07d;</p>
       </router-link> 
       <router-link to="/search" active-class="active" tag="div" class="l_head action">
			     <span class="l_span yo-ico">&#xe611;</span>
			      <input type="text"   class="input input-shrink" placeholder="输入搜索关键字...">
      </router-link> 
      <router-link to="/cart" active-class="active">
        <p class="l_p yo-ico">&#xe768;</p>
      </router-link> 
    </header>
    <section>
		  <ul class="l_ul">
        <router-link to="/" v-for="(j,index) in list" tag="li" >
				  <img :src="j.img_id" alt="">
				  <div class="l_ds">  
					   <b>{{j.goods_name}}</b>
					   <p>{{j.goods_slogan}}</p>
             <i>￥{{j.floor_price/100}}</i>
				  </div>
        </router-link> 
		  </ul>
     
    </section> 
  </div>
 
</template>

<script>
import utilAxios from '../../utils/axios'

import Vue from 'vue'



export default {
  data(){
    return{
      list:[],
      url_Arr:["苹果","蟹","厄瓜多尔白虾","阿根廷红虾","波龙","生蚝","鲍鱼","牛奶","肉","螺"],
      headers_Arr:[
            {"Content-Type":"application/json","X-Prov":"370000","X-Terminal":"3","X-City":"371600","X-Key":"6ad432c6f1dde0dc4ee39ef37e3b7d00"},
            {"Content-Type":"application/json","X-Prov":"370000","X-Terminal":"3","X-City":"371600","X-Key":"6d813eeed7e24d169d103608ec3e1cba"},
            {"Content-Type":"application/json","X-Prov":"370000","X-Terminal":"3","X-City":"371600","X-Key":"d5e734d745e90ff4483f832db6e47d16"},
            {"Content-Type":"application/json","X-Prov":"370000","X-Terminal":"3","X-City":"371600","X-Key":"7ed572780f0f1517c842ef20158cb504"},
            {"Content-Type":"application/json","X-Prov":"370000","X-Terminal":"3","X-City":"371600","X-Key":"5875c40213796fca203d995949c02d5e"},
            {"Content-Type":"application/json","X-Prov":"370000","X-Terminal":"3","X-City":"371600","X-Key":"70170f601e4820680e5ccffd8125dc9f"},
            {"Content-Type":"application/json","X-Prov":"370000","X-Terminal":"3","X-City":"371600","X-Key":"a4fe8a312e4f5b9af3ac63c05223b622"},
            {"Content-Type":"application/json","X-Prov":"370000","X-Terminal":"3","X-City":"371600","X-Key":"54dd20099c538904bea31516f8c700b5"},
            {"Content-Type":"application/json","X-Prov":"370000","X-Terminal":"3","X-City":"371600","X-Key":"22abf9178ab811cf6dfc23c4b86ed49a"},
            {"Content-Type":"application/json","X-Prov":"370000","X-Terminal":"3","X-City":"371600","X-Key":"14b391fa61c54ad9dca5bb9ffef8bae8"}
      ]
    }
  },
  mounted:function () {
    let that = this
    let type = that.$route.params.id
    utilAxios.post({
      url:'api//goods/search',
      method:'POST',
      headers:that.headers_Arr[that.$route.params.id],
      data:{"content":that.url_Arr[that.$route.params.id],"index": 0,"limit": 16},
      callback:function(res){
        // console.log(res.data.data.item)
        that.list = res.data.data.item
       // console.log(that.list)
      }
    })
  }
}




</script>

<style lang="css">
</style>
