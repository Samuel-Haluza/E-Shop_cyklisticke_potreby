import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import CartView from '../views/CartView.vue'

const router = createRouter({
  history: createWebHistory('/E-Shop_cyklisticke_potreby/'),
  routes: [
    { path: '/', component: HomeView },
    { path: '/products', component: ProductsView },
    { path: '/products/:id', component: () => import('../views/ProductDetailView.vue') },
    { path: '/cart', component: CartView },
    { path: '/about', component: () => import('../views/AboutView.vue') },
    { path: '/contact', component: () => import('../views/ContactView.vue') }
  ]
})

export default router