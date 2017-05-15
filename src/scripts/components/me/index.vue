<template lang="html">
	<div class="me">
		<!-- 头部 -->
		<div class="yo-header yo-header-a">
			<h2 class="title">我的买鲜</h2>
			<span class="regret yo-ico" @click="showsheet">&#xe651;</span>
			<mt-actionsheet :actions="actions" v-model="sheetVisible">
  			</mt-actionsheet>
		</div>
		<!-- info -->
		<router-link class="info" to="/login">
			<div><img src="/static/images/1.jpg"></div>
			<span>登录/注册</span>
		</router-link>
		<!-- collection -->
		<div class="collect">
			<div>
				<span class="yo-ico">&#xe639;</span>
				<h3>收藏的商品</h3>
			</div>
			<div>
				<span class="yo-ico">&#xe61d;</span>
				<h3>签到</h3>
			</div>
		</div>
		<!-- 订单等 -->
		<div class="me_center">
			<div class="me_box">
				<div class="title">
					<h2>全部订单</h2>
					<h3>查看全部订单 ></h3>
				</div>
				<div class="choose">
					<div>
						<span class="yo-ico">&#xe50c;</span>
						<h3>待付款</h3>
					</div>
					<div>
						<span class="yo-ico">&#xe683;</span>
						<h3>待发货</h3>
					</div>
					<div>
						<span class="yo-ico">&#xe656;</span>
						<h3>待收货</h3>
					</div>
					<div>
						<span class="yo-ico">&#xe632;</span>
						<h3>待评价</h3>
					</div>
				</div>
			</div>
			<div class="me_box">
				<div class="title">
					<h2>我的钱包</h2>
					<h3></h3>
				</div>
				<div class="choose">
					<div>
						<span class="yo-ico">&#xe7b3;</span>
						<h3>账户余额</h3>
					</div>
					<router-link to="./me-youhui" class="little"> <!-- 其他跳转看这里 -->
						<span class="yo-ico">&#xe6e6;</span>
						<h3>优惠券</h3>
					</router-link>
					<div>
						<span class="yo-ico">&#xe6d6;</span>
						<h3>积分</h3>
					</div>
					<div>
						<span class="yo-ico">&#xf008b;</span>
						<h3>礼品卡</h3>
					</div>
				</div>
			</div>
			<div class="server">
				<div>
					<h2>服务与反馈</h2>
					<h3>></h3>
				</div>
				<div>
					<h2>在线客服</h2>
					<h3>></h3>
				</div>
			</div>
			<div class="server about">
				<div>
					<h2>关于买鲜</h2>
					<h3>></h3>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Vue from "vue";
	//引入Header组件，定义一个组件名
    import Header from './me-header.vue'
    Vue.component('Header', Header)
    //action sheet
    import { Actionsheet } from 'mint-ui';
	Vue.component(Actionsheet.name, Actionsheet);

	export default {
		data(){
			return {
				title:"我的买鲜",
				actions:[{name:"拍照",method:""},{name:"从相册中选择",method:""}],
				sheetVisible:false,
				closeOnClickModal:true

			}
		},
		methods :{
			showsheet:function(){
				this.sheetVisible=true;
			}
		}
	}
</script>

<style lang="css">
</style>
