<template lang="html">
    <div class="m-login">
        <login-header/>
        <h2 class="yo-ico">&#xe61f;</h2>
        <ul class="yo-tab yo-tab-login">
          <li class="item item-x-ico item-on">
            <span>手机号</span>
          </li>
          <li class="item item-x-ico">
            <span>动态码</span>
          </li>
        </ul>
    </div>
</template>
<script>
    import Vue from 'vue'
    import LoginHeader from './login-header.vue'
    Vue.component('login-header',LoginHeader)
    import { Navbar, TabItem } from 'mint-ui';
    Vue.component(Navbar.name, Navbar);
    Vue.component(TabItem.name, TabItem);


    export default {
        data(){
            return{
                selected:1
            }
        },
        props:{

        },
        methods: {

        }
      }
</script>