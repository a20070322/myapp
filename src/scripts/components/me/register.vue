<template lang="html">
    <div class="m-login">
        <login-header title="注册"/>
        <h2 class="yo-ico logo">&#xe61f;</h2>
        <div class="login_form register">
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
            <div class="input login_mima">
                <div>
                    <input type="text" placeholder="请输入密码">
                    <span class="yo-ico">&#xf077;</span>
                </div>
            </div>
            <div class="input button">
                <input type="button" value=立即注册>
            </div>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue'
    import LoginHeader from './login-header.vue'
    Vue.component('login-header',LoginHeader)

    export default {
        data(){
            return{

            }
        },
        props:{

        },
        methods: {

        }
      }
</script>