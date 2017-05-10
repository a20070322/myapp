<template>
  <div class="m-index">
    <section>
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
  export default {
    
    
  }
</script>
