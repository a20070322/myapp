<template lang="html">
  <div class="list">
    <header>
       <router-link to="/classify" active-class="active">
          <p class="l_pp  yo-ico">&nbsp;&#xf07d;</p>
       </router-link> 
       <router-link to="/search" active-class="active" tag="div" class="l_head">
			     <span class="l_span yo-ico">&#xe611;</span>
			     <input type="text" value="搜索" >
      </router-link> 
      <router-link to="/cart" active-class="active">
        <p class="l_p yo-ico">&#xe768;&nbsp;&nbsp;</p>
      </router-link> 
    </header>
    <section>
		  <ul class="l_ul">
        <router-link to="/"  v-for="(item,index) in list" tag="li" key="index">
				  <img :src="item.img_id" alt="">
				  <div class="l_ds">  
					   <b>{{item.goods_name}}</b>
					   <p>{{item.goods_slogan}}</p>
             <i>￥{{item.floor_price/100}}</i>
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
      url_Arr:["100","101","102","103","104","105"],
      headers_Arr:[
          {"Content-Type":"application/json","X-Prov":"110000","X-Terminal":"3","X-City":"110000","X-Key":"4f4ddc3cd3bfd3cd3c8ca7d892f86c31"},
          {"Content-Type":"application/json","X-Prov":"370000","X-Terminal":"3","X-City":"371600","X-Key":"32856658ec67733f5153bb93e45190a3"},
          {"Content-Type":"application/json","X-Prov":"370000","X-Terminal":"3","X-City":"371600","X-Key":"7d78da178399f68b993fed461448e66f"},
          {"Content-Type":"application/json","X-Prov":"370000","X-Terminal":"3","X-City":"371600","X-Key":"b82e1f47e0b697860cedae138e2f9eba"},
          {"Content-Type":"application/json","X-Prov":"370000","X-Terminal":"3","X-City":"371600","X-Key":"45c00313450bd6b9611231a78bb789d2"},
          {"Content-Type":"application/json","X-Prov":"370000","X-Terminal":"3","X-City":"371600","X-Key":"bbc881b37efc7eb4b9f9a7e24cbf57c5"},]
    }
  },
  
mounted: function () {
      let that = this
      let type = that.$route.params.id
      utilAxios.post({
        url:'api/goods/m-limit',
        method:'POST',
        headers:that.headers_Arr[that.$route.params.id],
        data:{"first_category":that.url_Arr[that.$route.params.id],"index": 0,"limit": 16},
        callback:function(res){
          that.list = res.data.data.item
         // console.log(res.data.data.item)
        }
      })
    }

}

</script>

<style lang="css">
</style>
