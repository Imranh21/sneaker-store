import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import Product from '../views/Product.vue'


const routes = [
    {
        name: "Home",
        path: "/",
        component: Home
    },
    {
        name: "Cart",
        path: "/cart",
        component: Cart
    },
    {
        name: "Product",
        path: "/product/:id",
        component: Product
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router