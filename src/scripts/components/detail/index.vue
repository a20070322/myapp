<template lang="html">
  <div class="dl_detail">
    <div class="det_head">
      <span class="det_back">︿</span>

    </div>
  </div>
</template>
<script>
import utilsAxios from '../../utils/axios'
export default {
  data(){
    return{
      list_Arr:[{"Content-Type":"application/json","X-Prov":"110000","X-Terminal":"4","X-City":"110000","X-Key":"54bf11a09f9c1460c29cfe00f88f6b23",
"Accept-Encoding":"gzip;q=1.0,compress;q=0.5","HOST":"api.maixian.com","Accept":	"*/*","Accept-Language":"zh-Hans-CN;q=1.0","Content-Length":"28","Connection":"keep-alive","User-Agent":"MaiXianAPP/2.0.2 (com.maixian.MaiXianNew; build:2.1.2; iOS 10.3.1) Alamofire/3.5.1"}]
    }

  },
  mounted:function(){
    let _this = this
    utilsAxios.post({
      url:'/api/goods/detail',
      method:'POST',
      headers:_this.list_Arr[0],
      data:{
        'sku_item_no':_this.$route.params.id
      },
      callback:function(res){
        console.log(res.data)
      }
    })
  }
}
</script>

<style lang="css">
.det_back{
  display: inline-block;
  transform: rotate(-90deg);
}
</style>
