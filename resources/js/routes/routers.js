import Vue from 'vue'
import VueRouter from 'vue-router'

import WelcomeComponent from '../components/WelcomeComponent'
import Login from '../components/pages/auth/Login'
import ProductCreate from '../components/pages/Products/ProductCreate'
import ProductEdit from '../components/pages/Products/ProductEdit'



Vue.use(VueRouter)

const routes = [
    { 
        path: '/', 
        component: Login, 
        name: 'login' 
    },
    { 
        path: '/products', 
        component: WelcomeComponent, 
        name: 'products'
        // children: [
        //     {path: 'create', component: ProductCreate, name: 'products.create'}
        // ]
    },
    {path: '/products/create', component: ProductCreate, name: 'products.create'},
    {path: '/products/:id/edit', component: ProductEdit, name: 'products.edit', props: true}
]

const router = new VueRouter({
    mode: 'history',
    routes
})


// router.beforeEach((to, from, next) => {
//     // console.log(to);
//     if (to.meta.auth && !store.state.auth.authenticated) {
//         // console.log('entrou 1');
//         store.commit('auth/UPDATE_URL_BACK', { route_name: to.name, params: to.params }, { root: true })

//         return router.push({name: 'login'})
//     }

//     if (to.matched.some(record => record.meta.auth) && !store.state.auth.authenticated) {
//         // console.log('entrou 2');
//         // console.log(to);
//         store.commit('auth/UPDATE_URL_BACK', { route_name: to.name, params: to.params }, { root: true })

//         return router.push({name: 'login'})
//     }

//     if (to.meta.hasOwnProperty('auth') && !to.meta.auth && store.state.auth.authenticated) {
//         // console.log('entrou 3');
//         return router.push({name: 'products'})
//     }

//     next()
// })
    

export default router