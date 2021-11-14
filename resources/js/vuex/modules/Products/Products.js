import axios from 'axios';
import { URL_BASE } from '../../../configs/configs';
export default {
    
    state: {
        itens: {}
    },
    mutations: {
        LOAD_PRODUCTS(state, products){
            state.itens = products
        }
    },
    actions: {
        getProducts({ commit },context){
            
            // context.commit('CHANGE_LOADING', true)
            commit('loader/CHANGE_LOADING', true, { root: true })
            axios.get(`${URL_BASE}/produtos`).then(response => {
                
                commit('LOAD_PRODUCTS', response)
                console.log("PRODUTOS",response.data)
            })
            .finally(() => {
                commit('loader/CHANGE_LOADING', false, { root: true })
            })
        },
        


        storeProducts({commit}, params){
            commit('loader/CHANGE_LOADING', true, { root: true })
            return new Promise((resolve, reject) => {
                axios.post(`${URL_BASE}/products`, params)
                .then(response => resolve())
                .catch(error => reject(error))
                .finally(() => {
                    commit('loader/CHANGE_LOADING', false, { root: true })
                })

            })


        },

        loadProduct({commit}, id){
            commit('loader/CHANGE_LOADING', true, { root: true })
            return new Promise((resolve, reject) => {
                axios.get(`${URL_BASE}/products/${id}`)
                .then(response => resolve(response.data))
                .catch(error => reject(error))
                .finally(() => {
                    commit('loader/CHANGE_LOADING', false, { root: true })
                })

            })
        },

        updateProduct({commit}, params){
            commit('loader/CHANGE_LOADING', true, { root: true })
            return new Promise((resolve, reject) => {
                axios.put(`${URL_BASE}/products/${params.id}`, params)
                .then(response => resolve(response.data))
                .catch(error => reject(error))
                .finally(() => {
                    commit('loader/CHANGE_LOADING', false, { root: true })
                })

            })
        },

        destroyProduct({commit}, id){
            // commit('loader/CHANGE_LOADING', true, { root: true })
            return new Promise((resolve, reject) => {
                axios.delete(`${URL_BASE}/products/${id}`)
                .then(response => resolve())
                .catch(error => reject(error))
                .finally(() => {
                    commit('loader/CHANGE_LOADING', false, { root: true })
                })

            })
        }

    },
    getters: {

    }
}