import axios from 'axios';
import { URL_BASE } from '../../../configs/configs';
export default {
    
    state: {
        itens: {}
    },
    mutations: {
        LOAD_PRIMES(state, products){
            state.itens = products
        }
    },
    actions: {
        getPRIMES({ commit },context){
            
            // context.commit('CHANGE_LOADING', true)
            commit('loader/CHANGE_LOADING', true, { root: true })
            axios.get(`${URL_BASE}/prime-rate`).then(response => {
                
                commit('LOAD_PRIMES', response)
                console.log("PRIME RATE",response.data)
            })
            .finally(() => {
                commit('loader/CHANGE_LOADING', false, { root: true })
            })
        },
        


        storePRIMES({commit}, params){
            commit('loader/CHANGE_LOADING', true, { root: true })
            return new Promise((resolve, reject) => {
                axios.post(`${URL_BASE}/prime-rate`, params)
                .then(response => resolve())
                .catch(error => reject(error))
                .finally(() => {
                    commit('loader/CHANGE_LOADING', false, { root: true })
                })

            })


        },

        loadPRIMES({commit}, id){
            commit('loader/CHANGE_LOADING', true, { root: true })
            return new Promise((resolve, reject) => {
                axios.get(`${URL_BASE}/prime-rate/${id}`)
                .then(response => resolve(response.data))
                .catch(error => reject(error))
                .finally(() => {
                    commit('loader/CHANGE_LOADING', false, { root: true })
                })

            })
        },

        updatePRIMES({commit}, params){
            commit('loader/CHANGE_LOADING', true, { root: true })
            return new Promise((resolve, reject) => {
                axios.put(`${URL_BASE}/prime-rate/${params.id}`, params)
                .then(response => resolve(response.data))
                .catch(error => reject(error))
                .finally(() => {
                    commit('loader/CHANGE_LOADING', false, { root: true })
                })

            })
        },

        // destroyProduct({commit}, id){
        //     // commit('loader/CHANGE_LOADING', true, { root: true })
        //     return new Promise((resolve, reject) => {
        //         axios.delete(`${URL_BASE}/PRIMES/${id}`)
        //         .then(response => resolve())
        //         .catch(error => reject(error))
        //         .finally(() => {
        //             commit('loader/CHANGE_LOADING', false, { root: true })
        //         })

        //     })
        // }

    },
    getters: {

    }
}