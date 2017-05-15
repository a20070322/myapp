import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let store=new Vuex.Store({
    state:{
        user:false
    },
    mutations:{
        change:(state,user)=>{
            state.user=user
        }
    }
})
export default store