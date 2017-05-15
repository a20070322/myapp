<template>
<div class="m-yue">
	<header class="yo-header yue-header yo-header-a">
		<h2 class="title">余额充值</h2>
		<a class="regret yo-ico" @click="back"></a>
	</header>
	<div class="yue_con">
		<div class="yuea">
			<div class="yuez">
				余额:<span>￥<i>0</i></span>		
			</div>
			<div class="mx"></div>
			<div class="iii"></div>
		</div>

		<div class="czje">
			<div class="zdy">
				<span></span>
				<p>自定义充值</p>
			</div>

			<div class="xzje">
				<input type="text" placeholder="请输入充值金额" />
				<button class="ok">充值</button>
			</div>

			<div class="dsq">
				<div class="dsq1 dsq_con"></div>
				<div class="dsq2 dsq_con"></div>
				<div class="dsq3 dsq_con"></div>
				<div class="dsq4 dsq_con"></div>
			</div>
		</div>
	</div>
</div>
</template>
<script>
	export default {
		methods: {
    		back: function () {
      			this.$router.go(-1)
    		}
  		}
	}
</script>