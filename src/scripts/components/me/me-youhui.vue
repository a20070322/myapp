<template>
	<div class="m-youhui">
		<div class="box">
			<Header :title="title" :isShowBack="true"/>
		</div>
		<div id="app">
    		<ul class="choose">        
        		<li @click="toggle(index)" v-for="(tab,index) in tabs" :class="{active:active===index}">
              	{{tabs[index]}}       
         		</li>
    		</ul>   
		   <tab-con v-if="active==0" num="1"></tab-con>
		   <tab-con v-if="active==1" num="2"></tab-con>
		   <tab-con v-if="active==2" num="3"></tab-con>
		</div>
		
	</div>
</template>

<script>
	import Vue from 'vue';
	//引入BoardList组件,定义一个组件名
	import tabcon from './tab.vue'
	Vue.component('tab-con',tabcon)

	export default {
		data(){
			return {
				title:"我的优惠券",
				active:0,

				tabs:["未使用","已使用","已过期"]
			}
		},
		methods:{
			toggle:function(i){    
				this.active = i
			}
		}
	}
	
	
</script>