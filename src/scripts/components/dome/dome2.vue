<template>
  <div>
      dome
  </div>
</template>
<script>
import Vue from "vue"
import utilAxios from '../../utils/axios'
  export default {
    mounted: function () {
      let that = this
      // Content-Type  application/json;charset=UTF-8
      // let obj={"Content-Type":"application/json","X-Prov":"110000","X-Terminal":"3","X-City":"110000","X-Key":"4f4ddc3cd3bfd3cd3c8ca7d892f86c31"}
      // let data={"first_category": "100","index": 0,"limit": 16}
      // // let data = "category_id=100&pageNo=1&pageSize=10"
      // console.log(data)
      // axios.post('/api/goods/m-limit',data,{headers:obj}).then(res=>{ console.log(res) }).catch(err=>{ console.log(err) })
      utilAxios.post({
        url:'/api/goods/m-limit',
        method:'POST',
        headers:{"Content-Type":"application/json","X-Prov":"110000","X-Terminal":"3","X-City":"110000","X-Key":"4f4ddc3cd3bfd3cd3c8ca7d892f86c31"},
        data:{"first_category": "100","index": 0,"limit": 16},
        callback:function(res){
          console.log(res)
        }
      })
      utilAxios.get({
        url:'http://zzyapp.applinzi.com/api/class.php?type=search',
        method:'GET',
        callback:function(res){
          console.log(res)
        }
      })
  }
  };
</script>