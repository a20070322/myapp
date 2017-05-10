<template lang="html">

	<div class="m-home">	
	
		<div class="header-a" id="header">
			<router-link tag="div" to="/location" active-class="active" class="regret yo-ico">
				<b>&#xe61b;</b>
				<i>定位</i>
			</router-link>	
			<router-link tag="div" to="/search" active-class="active" class="title">
				<span class="fdj yo-ico">&#xe611;</span>
				<input type="text" class="search" placeholder="智利帝王蟹" />
			</router-link>			
			<span class="affirm yo-ico">
				<b>&#xe631;</b>
				<i>扫一扫</i>
			</span>
		</div>

		<mt-loadmore :top-method="loadTop" ref="loadmore" @top-status-change="handleTopChange">	
		<mt-swipe :auto="4000">
		  <mt-swipe-item :key="index" v-for="(item,index) in dataSource">
			<img :src="item.img_id" alt="">
		  </mt-swipe-item>
		</mt-swipe>

		<div class="nav_list">
			<ul>
				<li v-for="(item,index) in navList" :key="index">
					<span>
						<img :src="item.img_id" alt="">
					</span>
					<strong>
						{{item.label}}
					</strong>
				</li>
			</ul>
		</div>

		<div class="mxtop">
			<div class="mxTop_ico">
				<img src="/static/images/mxTop.jpg" alt="">
			</div>
			<div class="laba"></div>
		    <div class="txtLunbo" id="txtLunbo">
				<ul>
					<li v-for="(item,index) in mxTop" :key="index">
						{{item.title}} {{item.url}} 
					</li>
				</ul>
			</div>
		</div>

		<div class="hd">
			<ul class="hd_con">
				<li v-for="(item,index) in hdList" :key="index">
					<div class="img_con">
						<img :src="item.img_id" alt="">
						<span class="act_label"><img :src="item.act_label" alt=""></span>
					</div>
					<div class="hd_right">
						<i>{{item.goods_name}}</i>
						<b>{{item.goods_slogan}}</b>
						<p>{{item.goods_spec}}</p>
						<strong>￥{{item.price/100}}</strong>
						<button>立即抢购</button>
					</div>										
				</li>
			</ul>

		</div>
		</mt-loadmore>
	</div>

</template>


<script>

import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui'
import { Loadmore } from 'mint-ui';
Vue.component(Loadmore.name, Loadmore);
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
import utilAxios from '../../utils/axios'
	export default {
		data() {
			return {
				dataSource: [],
				mxTop:[],
				navList:[],
				hdList:[],
				topStatus: '',
			}
		},
		mounted: function () {
			let that = this
			utilAxios.get({
				url: 'api/index/v1/m-banner',
				method: 'POST',
				callback: function (res) {
					that.dataSource = that.dataSource.concat(res.data.data.banner)
					//console.log(res);
					// that.mxTop = that.mxTop.concat(res.data.data.headline)
					let arr = that.mxTop.concat(res.data.data.headline)
					arr[arr.length] = arr[0]
					that.mxTop = arr;
					//console.log(arr[0]);
				}
			})
			utilAxios.get({
				url: 'api/index/v1/m-nav',
				method: 'POST',
				callback: function (res) {
					that.navList = that.navList.concat(res.data.data.nav)
					//console.log(res);
				}
			})
			utilAxios.get({
				url: 'api/index/v1/m-activity',
				method: 'POST',
				callback: function (res) {
					that.hdList = that.hdList.concat(res.data.data.item)
				}
			})
		},
		methods:{
			loadTop() { 				
  				this.$refs.loadmore.onTopLoaded();
			},
			handleTopChange(status) {
       			this.topStatus = status;
      		}
      		
		}
	}

</script>
