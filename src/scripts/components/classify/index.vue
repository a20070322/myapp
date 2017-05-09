<template lang="html">
  <div class="classify">
    <header>
		<div class="c_head yo-ico">&#xe61f;</div>
    </header>
    <section>
 	<ul class="c_ul">
			<router-link tag="li" to="/list/${index}" key={index} v-for="(x,index) in data" >
				<img :src="x.icon" alt="">
				<div class="c_ds">
					<b>{{x.category_name}}</b>
					<p>{{x.sub_category}}</p>
				</div>
				<p class="c_p yo-ico">&#xf07f;</p>
				
			</router-link>
	</ul>
    </section>
  </div>
</template>

<script>
import Vue from "vue"
import utilAxios from '../../utils/axios'
export default {
	data(){
		return{
			data:[]
		}
	},
	mounted: function () {
		let that = this
		utilAxios.get({
			url: 'api/category/m-list',
			method: 'POST',
			data:"",
			callback: function (res) {
			 // console.log(res.data.data.category);
			  that.data=res.data.data.category
			  // that.dataSource = that.dataSource.concat(res.data.subjects)
			}
		})
	}
}


</script>

<style lang="css">
</style>
