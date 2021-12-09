<template>
    <div class="w-full h-screen">
        <div  class="w-11/12 m-auto flex flex-col items-start sm:flex-row sm:w-11/12">
            <div  class="bg-white w-full p-4 rounded-md sm:flex-1 sm:mr-10">
                <div class="bg-gray-50 p-4 mt-2 " v-for="item in cartItems" :key="item.product.id">
                    <div class="flex relative items-center">
                        <div>
                            <img class="w-20" :src="item.product.image" />
                        </div>
                        <div class="flex flex-1 ml-10">
                            <div class="">
                                <p>{{item.product.name}}</p>
                                <div class="flex w-36 py-2 justify-evenly bg-white my-2">
                                    <button @click="decrease(item.product.id)" class="text-green-600">-</button>
                                    <p>{{item.quantity}}</p>
                                    <button @click="increase(item.product.id)" class="text-green-600">+</button>
                                </div>
                                <i @click="removeItem(item.product.id)" class="absolute cursor-pointer top-2 right-2 fas fa-trash"></i>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="bg-white w-full rounded-md sm:w-4/12 my-10">
                <div class="py-6 px-4 flex flex-col">
                    <div class="flex-1">
                        <h1 class="text-2xl">Total</h1>
                        <h2 class="font-bold text-xl">${{cartTotal}}</h2>
                    </div>
                    
                    <button class="bg-green-200 mt-10 py-2 rounded-md text-green-700">Checkout</button>
                </div>
            </div>
        </div>
        
        
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";

const store = useStore()

const cartItems = computed(() => store.state.cart)
const cartTotal = computed(() => store.getters.getTotal)

const increase = (payload) => {
    store.commit("increaseQuantity", payload)
}
const decrease = (payload) => {
    store.commit("decreaseQuantity", payload)
}
const removeItem = (payload) => {
    store.commit("removeFromCart", payload)
}

</script>

<style lang="scss" scoped>

</style>