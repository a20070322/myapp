<template lang="html">
    <div class="m-login">
        <login-header title="注册"/>
        <h2 class="yo-ico logo">&#xe61f;</h2>
        <div class="login_form register">
            <div class="input">
                <label>+86</label>
                <div>
                    <input type="text" placeholder="请输入手机号" v-model="phone">
                    <span class="yo-ico" @click="dele('phone')">&#xf077;</span>
                </div>
            </div>
            <div class="input login_mima">
                <div>
                    <input type="text" placeholder="请输入短信验证码" v-model="yzm">
                    <button @click="getNum" v-text="huoqu" :class="[{buttonyzm:yzmpd}]">获取动态验证码</button>
                </div>
            </div>
            <div class="input login_mima">
                <div>
                    <input type="password" placeholder="请输入密码" v-model="password">
                    <span class="yo-ico" @click="dele('password')">&#xf077;</span>
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
                password:"",
                phone:"",
                yzm:"",
                yzmpd:false,
                huoqu:"获取动态验证码"
            }
        },
        props:{

        },
        methods: {
            dele:function(type){
                eval(`this.${type}=null`)
            },
            getNum:function(){
                if(this.yzmpd){
                    return
                }
                if(/^1[34578]\d{9}$/.test(this.phone)){
                    let that=this;
                    let tmp =60
                    this.yzmpd=true
                    let timmer=setInterval(function(){
                        tmp=(tmp-1)
                        that.huoqu=tmp+"秒后重新获取"
                        if(tmp <= 0){
                            that.yzmpd=false
                            that.huoqu="获取动态验证码"
                            clearInterval(timmer)
                        }
                    },1000)
                }else{
                    alert("请填写正确的手机号")
                }
            }
        }
      }
</script>