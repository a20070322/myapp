<template>
  <div class="m-index">
    <section id="section" @scroll="menu" >
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
    import Vue from "vue";
   export default{
      data(){
        return {
          scroll:0
        }
      },
      
      methods:{
        menu(){
          this.scroll = document.getElementById("section").scrollTop;
          console.log(this.scroll)

          //这部分有问题，需要设全局状态管理（把scroll存到状态池，然后在头部的页面设置透明度变化，），实现滚动条滚动时，透明度变化。
          var Header = document.getElementById("Header");
          if( this.scroll<=10 ){
              Header.style.background="transparent"
          }else if( this.scroll<=20 ){
              Header.style.background="rgba(240,12,180,0.2)"
          }else if( this.scroll<=30 ){
              Header.style.background="rgba(240,12,180,0.4)"
          }else if( this.scroll<=40 ){
              Header.style.background="rgba(240,12,180,0.6)"
          }else if( this.scroll<=50 ){
              Header.style.background="rgba(240,12,180,0.8)"
          }else{
              Header.style.background="rgba(240,12,180,1)"
          }

        }
      },

      mounted(){
        window.addEventListener('scroll',this.menu)
      }
    }
    
   
</script>
