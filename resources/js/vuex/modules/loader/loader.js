export default {
    namespaced: true,
    
    state: {
        loading: false
    },

    mutations: {
        CHANGE_LOADING(state, status) {
            state.loading = status
        }
    },

    // actions: {

    //     showLoader({commit}) {
    //         commit('CHANGE_LOADING', true)
    //     },
        
    //     closeLoader({commit}) {
    //         commit('CHANGE_LOADING', false)
    //     }
    // }
}