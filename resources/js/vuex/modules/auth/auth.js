import axios from 'axios';
import { URL_BASE } from '../../../configs/configs';
export default {
    namespaced: true,

    state: {
        user: {}
    },

    mutations: {

    },

    actions: {
        loginUser({ commit }, user){
            commit('loader/CHANGE_LOADING', true, { root: true })
            axios.post(`${URL_BASE}/login`, {
                email: user.email,
                password: user.password
            })
            .then(response => {
                if(response.data.token){
                    localStorage.setItem("TOKEN", response.data.token)
                    console.log("ENTROU")
                    window.location.replace("/products")
                
                }
            })
            .finally(() => {
                commit('loader/CHANGE_LOADING', false, { root: true })
            })
        }
    },

    getters: {

    }



}