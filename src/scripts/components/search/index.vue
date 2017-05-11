<template lang="html">
<div style="height:100%">
  <div class="m-search">
		<div class="s_head  yo-search yo-search-a">
		      <p class="s_p  yo-ico" onclick="window.history.go(-1)" >&#xf07d;</p>

		      <label class="action">
		        <span class="s_s yo-ico">&#xe611;</span>
		        <input type="text"  v-model="keywords" class="input input-shrink" placeholder="输入搜索关键字...">
		      </label>

		      <span class="search" @click="search">搜索</span>
		
				
			
	    </div>
	</div>
    


   <!--  <div class="result">
      <router-link :key="index" :to="`/detail/${item.id}`" tag="dl" v-for="(item, index) in list">
        <dt>
          <img v-lazy.container="item.images.large"/>
        </dt>
        <dd>
          <h1 v-html="item.title"></h1>
          <p v-html="item.original_title"></p>
          <p v-html="(item.directors[0] && item.directors[0].name) || ''"></p>
        </dd>
        <dd class="yo-badge" v-html="item.rating.average"></dd>
      </router-link>
    </div> -->
  
 
	<div class="s_box">
		<p class="s_f yo-ico">&#xe611;</p>
		<p class="s_h_s">热门搜索</p>
	</div>

	<div class="s_list">
		<ul class="s_ul">
			<router-link tag="li" :to="`/s_list/${index}`" v-for="(i,index) in list" key={index}>
			{{i}}
			</router-link>
		</ul>
	</div>
 </div>
</template>







<script>
import Vue from 'vue'

import { Indicator } from 'mint-ui';

import utilAxios from '../../utils/axios'

export default {
  data(){
    return {
      keywords: '',
      list: []
    }
  },

  props: ['onchange'],

  methods: {
    search: function () {
    	//console.log(0)
      let that = this

      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });

      
    }
    
},
    
    // cancel: function () {
    //   this.keywords = ''
    // }
  

  mounted: function () {
  	let that = this
  	utilAxios.post({
        url: '/api/goods/search-words',
        method: 'POST',
        callback: function (res) {
        	//console.log(res.data.data)
        	that.list= res.data.data.hot_words.split(",")
           
          console.log(res.data.data.hot_words)
          Indicator.close()
        }
      })
    // this.onchange('搜索')
  }
}
</script>

<style lang="css">
</style>
