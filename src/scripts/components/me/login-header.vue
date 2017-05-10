<template lang="html">
    <header class="yo-header yo-header-back">
        <h2 class="title" v-text="title"></h2>
        <span class="regret yo-ico" @click="back"></span>
    </header>
</template>

<script>
export default {
    data(){
        return{
        }
    },
    props:{
        title:{
            type: String,
            //默认值
            default: ""
            //required: true
        }
    },
    methods: {
        back: function () {
            this.$router.go(-1)
    }
  }
}
</script>