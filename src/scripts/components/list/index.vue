<template lang="html">
  <div class="list">
    <header>
     <router-link to="/classify" active-class="active">
        <p class="l_pp  yo-ico">&nbsp;&#xf07d;</p>
     </router-link> 
		<div class="l_head">
			<span class="l_span yo-ico">&#xe611;</span>
			<input type="text">
		</div>
     <router-link to="/cart" active-class="active">
    <p class="l_p yo-ico">&#xe768;&nbsp;&nbsp;</p>
     </router-link> 
    </header>
    <section>
		<ul class="l_ul">
     <router-link to="/detail" active-class="active">
			<li v-for="">
				<img src="" alt="">
				<div class="l_ds">
					<b>加拿大波士顿活龙虾</b>
					<p>产地直踩 鲜活饱满</p>
          <i>￥218</i>
				</div>
			</li>
      </router-link> 
		</ul>
    </section>
  </div>
</template>

<script>
import utilAxios from '../../utils/axios'
export default {
mounted: function () {
      let that = this
      let type = that.$route.params.id
      utilAxios.get({
        url: 'api/goods/m-limit',
        method: 'POST',
        data:{
        	'first_category':'100',
        	'index':'0',
        	'limit':'16'
        },
        callback: function (res) {
        	//console.log(res.data)
          // that.title = res.data.title
          // that.list = that.list.concat(res.data.subjects)
        }
      })
    }

}

</script>

<style lang="css">
</style>
