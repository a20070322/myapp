<template lang="html">
	<div class="me-info">
		<!-- 头部组件 -->
		<div class="box">
			<Header :title="title" :isShowBack="false"/>
		</div>
		<!-- 内容部分 -->
		<div class="con">
			<mt-actionsheet
			  :actions="actions"
			  v-model="sheetVisible">
			</mt-actionsheet>

			<div class="head">
				<h2>头像</h2>
				<div>
					<img src="/static/images/5.jpg" alt="" />
					<span class="yo-ico">&#xf07f;</span>
				</div>
			</div>
			<div class="name">
				<h2>昵称</h2>
				<div>
					<h3>rock</h3>
					<span class="yo-ico">&#xf07f;</span>
				</div>
			</div>
			<div class="name">
				<h2>性别</h2>
				<div @click="sex">
					<h3>{{sex1}}</h3>
					<span class="yo-ico">&#xf07f;</span>
				</div>
			</div>
			<div class="name date">
				<h2>出生日期</h2>
				<div>
					<h3>{{burntime}}</h3>
					<span class="yo-ico">&#xf07f;</span>
				</div>
			</div>
			<div class="name">
				<h2>地址管理</h2>
				<div>
					<span class="yo-ico">&#xf07f;</span>
				</div>
			</div>
			<div class="name">
				<h2>实名认证</h2>
				<div>
					<span class="yo-ico">&#xf07f;</span>
				</div>
			</div>
			<div class="name">
				<h2>账户安全</h2>
				<div>
					<span class="yo-ico">&#xf07f;</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import Vue from 'vue'

    import { Actionsheet } from 'mint-ui';
	Vue.component(Actionsheet.name, Actionsheet);
	
	export default {
		data() {
			return {
				title:"个人信息",
				sex1:"保密",
				burntime:"2000-01-01",
				actions:[{name:"男",method:"btn(nan)"},{name:"女",method:"btn(nv)"}],
				closeOnClickModal:true,
				sheetVisible:false			}
		},
		methods:{
			sex:function(){
				this.sheetVisible=true
			},
			btn:function(sex){
				this.sex1=sex
				alert()
			}
		}
	}
</script>