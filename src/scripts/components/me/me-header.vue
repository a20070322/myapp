<template lang="html">
	<!-- 头部 -->
	<header class="yo-header yo-header-a">
		<span class="affirm yo-ico" v-if="isShowBack">添加</span>
		<h2 class="title">{{title}}</h2>
		<span class="regret yo-ico" @click="back">&#xf07d;</span>
	</header>
</template>

<script>
let vm = {
  data(){
    return {
    }
  },

  props: {
    title: {
      type: String,
      required: true
    },
    isShowBack: {
      type: Boolean,
      required: false //不传默认没有，不显示
    }
  },

  methods: {
    //点击返回
    back: function () {
      this.$router.go(-1)
    }
  },

  mounted: function () {
    // console.log(0);
  },

  updated: function () {
    // console.log(1);
  }
}
window.vm = vm
export default vm
</script>
