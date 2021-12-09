import {createStore} from 'vuex'
import products from '../data'
const store = createStore({
    state: {
        products: products,
        cart: [],
        trendingProducts: [],
        productDetails: []
        // isAddToCart: false
    },
    getters: {
        getCartItems: (state) => {
            return state.cart
        },
        getTotal: (state) => {
            let total = 0
            state.cart.forEach(item => {
                total += item.product.price * item.quantity
            })
            return total
        },
        getProduct: (state) => {
            return state.productDetails
        },
        getCartItemCount: (state) => {
            return state.cart.length
        },
        getIsTrendingProducts: (state) => {
            return state.trendingProducts
        }
        
    },
    mutations: {
        getIsTrendingProducts: (state) => {
            state.trendingProducts = state.products.filter(item => {
                return item.isTrending
            })
        },
        // adding product to cart
        addToCart: (state, payload) => {
            const check = state.cart.every((item) => item.product.id !== payload.product.id)
            if(check){
                state.cart.push(payload)
            } else {
                state.cart.forEach(item => {
                    if(item.product.id === payload.product.id){
                        item.quantity++
                    }
                })
            }
        },
        removeFromCart: (state, payload) => {
            state.cart = state.cart.filter(item => item.product.id !== payload)
        },

        fetchAProduct: (state, payload) => {
            const product = state.products.find(item => item.id === payload)
            state.productDetails = product
        },

        increaseQuantity: (state, payload) => {
            state.cart.filter(item => {
                if(item.product.id === payload){
                    item.quantity += 1
                }
            })
        },
        decreaseQuantity: (state, payload) => {
            state.cart.filter(item => {
                if(item.product.id === payload){
                    if(item.quantity !== 1){
                        item.quantity -= 1
                    }
                }
            })
        }
    },
    actions: {
        addToCartAction: ({commit}, payload) => {
            commit("addToCart", payload)
        },
        getAProduct: ({commit}, payload) => {
            commit("fetchAProduct", payload)
        }
    }
})

export default store