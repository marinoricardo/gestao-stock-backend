import Vue from 'vue'
import Vuex from 'vuex'
import Products from './modules/Products/Products'
import Prime from './modules/Prime/prime'
import loader from './modules/loader/loader'
import auth from './modules/auth/auth'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        Products,
        Prime,
        loader,
        auth
    }
})