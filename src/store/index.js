import Vuex from 'vuex'
import Vue from 'vue'
import {IndexAll as ConfigIndexAll} from "../api/sys.config";
import {Info as UserInfo} from "../api/sys.user";
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        config: {},
        user: {},
        loading: true
    },
    mutations: {
        init (state,config) {
            state.config = config
            state.loading = false
        },
        initUser(state,user){
            if (user) state.user = user
        }
    },
    actions: {
        init(context){
            ConfigIndexAll().then(
                res => {
                    context.commit('init',res)
                }
            )
        },
        initUser(context){
            UserInfo().then(
                res => {
                    context.commit('initUser',res)
                }
            )
        }
    },
})
