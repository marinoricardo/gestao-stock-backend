import axios from 'axios';
import { URL_BASE } from '../../../configs/configs';
export default {
    
    state: {
        itens: {},
        categorias: {}
    },
    mutations: {
        LOAD_PRODUCTS(state, products){
            state.itens = products
        },
        LOAD_CATEGORY(state, categoria){
            state.categorias = categoria
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
        getCategory({ commit },context){
            // context.commit('CHANGE_LOADING', true)
            commit('loader/CHANGE_LOADING', true, { root: true })
            axios.get(`${URL_BASE}/categorias`).then(response => {
                commit('LOAD_CATEGORY', response)
            })
            .finally(() => {
                commit('loader/CHANGE_LOADING', false, { root: true })
            })
        },
        


        storeProducts({commit}, params){
            commit('loader/CHANGE_LOADING', true, { root: true })
            return new Promise((resolve, reject) => {
                axios.post(`${URL_BASE}/produtos`, params)
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