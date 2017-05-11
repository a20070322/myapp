<!-- <template lang="html">
  <div class="list">
    <header class="yo-search yo-search-a">
       <router-link to="/classify" active-class="active">
          <p class="l_pp  yo-ico">&#xf07d;</p>
       </router-link> 
       <router-link to="/search" active-class="active" tag="div" class="l_head action">
			     <span class="l_span yo-ico">&#xe611;</span>
			      <input type="text"   class="input input-shrink" placeholder="输入搜索关键字...">
      </router-link> 
      <router-link to="/cart" active-class="active">
        <p class="l_p yo-ico">&#xe768;</p>
      </router-link> 
    </header>
    <section>
		  <ul class="l_ul">
        <router-link to="/"  v-for="" tag="li" key="index">
				  <img :src="" alt="">
				  <div class="l_ds">  
					   <b></b>
					   <p></p>
             <i></i>
				  </div>
        </router-link> 
		  </ul>
     
    </section>
  </div>
</template>

<script>
import utilAxios from '../../utils/axios'

import Vue from 'vue'



export default {
  
// mounted: function () {
//       let that = this
//       let type = that.$route.params.id
//       utilAxios.post({
//         url:'api/goods/m-limit',
//         method:'POST',
//         headers:that.headers_Arr[that.$route.params.id],
//         data:{"first_category":that.url_Arr[that.$route.params.id],"index": 0,"limit": 16},
//         callback:function(res){
//           that.list = res.data.data.item
//          // console.log(res.data.data.item)
//         }
//       })
//     }

}

</script>

<style lang="css">
</style>
 -->