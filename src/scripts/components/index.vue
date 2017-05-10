<template>
  <div class="m-index">
    <section @scroll="menu">
      <router-view></router-view>
    </section>
    <nav>
      <ul>
        <router-link tag="li" to="/home" active-class="active" class="yo-ico">
          &#xe69b;<b>首页</b>
        </router-link>
        <router-link tag="li" to="/classify" active-class="active" class="yo-ico">
          &#xe65d;<b>分类</b>
        </router-link>
        <router-link tag="li" to="/cart" active-class="active" class="yo-ico">
          &#xe768;<b>购物车</b>
        </router-link>
        <router-link tag="li" to="/me" active-class="active" class="yo-ico">
          &#xe605;<b>我的</b>
        </router-link>
      </ul>
    </nav>
  </div>
</template>

<script>

import Vue from 'vue'
  export default {
    data() {
        return {
          scroll: ''
      }
    },
    methods: {
        menu() {
            this.scroll = document.getElementsByTagName('section')[0].scrollTop;
            let scroll = this.scroll;
            //console.log(this.scroll)
            let Header = document.getElementById('header')
            //console.log(Header);
            if ( scroll == 0){
                Header.style.background = 'rgba(10,153,212,0)'
            }
            else if( 20 > scroll > 0 ) {
              Header.style.background = 'rgba(10,153,212,0.3)'
            }else if( 20<scroll<40){
              Header.style.background = 'rgba(10,153,212,0.6)'
            }else if( 40<scroll<60){
              Header.style.background = 'rgba(10,153,212,1)'
            }

        }
    },
    mounted() {
        window.addEventListener('scroll', this.menu)
    }
  }
</script>
