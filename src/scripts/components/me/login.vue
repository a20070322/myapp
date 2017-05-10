<template lang="html">
    <div class="m-login">
        <login-header/>
        <h2 class="yo-ico logo">&#xe61f;</h2>
        <ul class="yo-tab yo-tab-login">
          <li class="item item-x-ico" @click="isShowbtn(true)" v-bind:class="{ active: isShow }">
            <span>手机号</span>
          </li>
          <li class="item item-x-ico" @click="isShowbtn(false)" v-bind:class="{ active: !isShow }">
            <span>动态码</span>
          </li>
        </ul>
        <div class="login_form" v-if="isShow">
            <div class="input">
                <label>+86</label>
                <div>
                    <input type="text" placeholder="请输入手机号">
                    <span class="yo-ico">&#xf077;</span>
                </div>
            </div>
            <div class="input login_mima">
                <div>
                    <input type="text" placeholder="请输入密码">
                    <span class="yo-ico">&#xf077;</span>
                </div>
            </div>
            <div class="input button">
                <input type="button" value="提交">
            </div>
        </div>
        <div class="login_form" v-else>
            <div class="input">
                <label>+86</label>
                <div>
                    <input type="text" placeholder="请输入手机号">
                    <span class="yo-ico">&#xf077;</span>
                </div>
            </div>
            <div class="input login_mima">
                <div>
                    <input type="text" placeholder="请输入短信验证码">
                    <button>获取动态验证码</button>
                </div>
            </div>
            <div class="input button">
                <input type="button" value="提交">
            </div>
        </div>
<!--         <span class="zhuce">注册</span> -->

        <router-link tag="span" to="/register"  class="zhuce">
          注册
        </router-link>
        <div class="weixin">
            <span class="yo-ico">&#xe619;</span>
            <b>微信登录</b>
        </div>
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
                selected:1,
                isShow:true
            }
        },
        props:{

        },
        methods: {
            isShowbtn:function(bl){
                this.isShow=bl
            }

        }
      }
</script>
