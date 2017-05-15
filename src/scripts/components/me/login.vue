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
                    <input type="text" placeholder="请输入手机号" v-model="username">
                    <span class="yo-ico" @click="dele('username')">&#xf077;</span>
                </div>
            </div>
            <div class="input login_mima">
                <div>
                    <input type="password" placeholder="请输入密码" v-model="password">
                    <span class="yo-ico" @click="dele('password')">&#xf077;</span>
                </div>
            </div>
            <div class="input button">
                <input type="button" value="提交" @click="submit(1)">
            </div>
        </div>
        <div class="login_form" v-else>
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
                    <button @click="getNum" v-text="huoqu" :class="[{buttonyzm:yzmpd}]"></button>
                </div>
            </div>
            <div class="input button">
                <input type="button" value="提交" @click="submit(2)">
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
    import utilAxios from '../../utils/axios'
    import store from '../../vuex/store.js'
    export default {
        data(){
            return{
                selected:1,
                isShow:true,
                username:"",
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
            isShowbtn:function(bl){
                this.isShow=bl
            },
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
                    let params=new URLSearchParams()
                    let phone=this.phone;
                    params.append('mobile',phone);
                    utilAxios.post({
                        url:'http://zzyapp.applinzi.com/phone/phone.php',
                        method:'POST',
                        header:{'Content-Type': 'application/x-www-form-urlencoded'},
                        data:params,
                        callback:function(res){
                          console.log(res)
                          localStorage.mobile=res.data.mobile;
                          localStorage.mobile_code=res.data.mobile_code;
                        }
                    })
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
            },
            submit:function(type){
                let that = this
                let params=new URLSearchParams()
                if(type==1){
                    let username=this.username;
                    let password=this.password;
                    params.append('type', '2');
                    params.append('phone', username);
                    params.append('password',password);
                }else if(type==2){
                    let phone=this.phone;
                    let yzm=this.yzm;
                    if(phone==localStorage.mobile){
                        if(yzm==localStorage.mobile_code){
                            params.append('type', '1');
                            params.append('phone',localStorage.mobile);
                        }
                    }
                }
                utilAxios.post({
                url:'http://zzyapp.applinzi.com/phone/login.php',
                method:'POST',
                header:{'Content-Type': 'application/x-www-form-urlencoded'},
                data:params,
                callback:function(res){
                  console.log(res)
                }
              })
            }
        },
        mounted:function(){
            console.log(store)
        }
      }
</script>
