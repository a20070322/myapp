<template lang="html">
  <div class="dl_detail">
    <div class="det_head">

    </div>
    <div class="">
      <div @click="tap" v-model="isClick">
        <span v-if="isClick">编辑</span>
        <span v-else>完成</span>
      </div>
      <ul>
        <li v-for="(item,index) in arr"  @click="cli(index)" key="index">
          <div v-show="arr[index]" style="display:inline-isClickock;" @click.stop="eve(index)">对号</div><span v-show="isClick">数量</span>
          {{arr[index]}}
        </li>
      </ul>
      <span @click="all" v-model="b">全选</span>
    </div>
  	</section>
  </div>
</template>
<script>
import utilsAxios from '../../utils/axios'
export default {
  data(){
    return{
      list_Arr:[{
        "Content-Type":"application/json",
        "X-Key":"d746a2b00e110695c1facd72b64ff663",
        "X-City":"110000",
        "X-Prov":"110000",
        "X-Terminal":"4"
      }],
      isClick:true,
      b:true,
      arr:[true,true,true,true,true,true]
    }
  },
  methods:{
    tap:function(){
      this.isClick = !this.isClick
    },
    cli:function(index){
      if (this.isClick) {
        window.location.href = "http://localhost:8080/#/detail/0100000120"
      }else{
        this.arr[index] = !this.arr[index]
      }
    },
    all:function(){
      if(this.b){
        for(let i=0;i<this.arr.length;i++){
          this.arr[i] = false
        }
        this.b=!this.b
      }else{
        for(let i=0;i<this.arr.length;i++){
          this.arr[i] = true
        }
        this.b=!this.b
      }
    },
    eve:function(index,event){
      this.$set(this.arr,index,!this.arr[index]);
    }
  },
  mounted:function(){
    let _this = this
    console.log(typeof _this.$route.params.id)
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
</style>
