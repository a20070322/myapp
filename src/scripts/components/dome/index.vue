<template>
  <div class="m-index">
    <header class="yo-header yo-header-a">
      <span class="regret yo-ico">&#xf07e;</span>
      <h2 class="title">榜单 《 电影 《 豆瓣</h2>
    </header>
    <section>
      <router-view></router-view>
    </section>
    <nav>
      <ul>
        <li class="active yo-ico">&#xe6b8;<b>首页</b></li>
        <li class="yo-ico">&#xe7da;<b>搜索</b></li>
        <li class="yo-ico">&#xe78b;<b>我的</b></li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    
  }
</script>
