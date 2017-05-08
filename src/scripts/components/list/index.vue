<template lang="html">
  <div class="list">
    <header>
		<p class="l_p  yo-ico">11</p>
		<div class="l_head">
			<span class="yo-ico">&#xe611;</span>
			<input type="text">
		</div>
    <p class="iconfont icon-gouwuche1">22</p>
    </header>
    <section>
		<ul class="l_ul">
			<li v-for="">
				<img src="" alt="">
				<div class="l_ds">
					<b>加拿大波士顿活龙虾</b>
					<p>产地直踩 鲜活饱满</p>
          <i>￥218</i>
				</div>
				
				
			</li>
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
