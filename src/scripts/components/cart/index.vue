<template lang="html">
 <!--  <div class="cart" v-if>
  	<header>
		购物车
  	</header>
  	<section class="carbox">
     <router-link to="/" active-class="active">
      <img src="../../../assets/c_w.gif" alt="">
      <p class="c_w_p">购物车还没有商品噢，快去买鲜吧...</p>
     </router-link> 

     
  	</section>
  	
  </div> -->


   <div class="carts" v-else>
    <header>
    购物车
    <span class="c_span">编辑</span>
    </header>
    <section>
     <ul class="c_ul">
        <li>
          <div class="L"><input type="radio" class="c_dan"></div>
          <div class="C"><img src="" alt="" class="imgs"></div>
          <div class="R">
            <span>跨境</span>
            <p>新西兰和牛</p>
            规格<span></span>
            <p>生冻</p>
            ￥<p>188</p>
          </div>

         



        </li>
     </ul>

     
    </section>
    
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
