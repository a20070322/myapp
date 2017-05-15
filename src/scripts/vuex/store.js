import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let store=new Vuex.Store({
    state:{
        user:false
    },
    mutations:{
        change:(state,payload)=>{
            state.user=payload.user
        }
    }
})
export default store