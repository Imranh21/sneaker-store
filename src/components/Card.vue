<template>
    <div class="bg-white flex flex-col rounded-md overflow-hidden">
        <div class="w-full flex-auto">
            <img class="w-full h-36 bg-cover sm:h-44" :src="product.image" />
        </div>
        <div class="p-4 flex flex-col">
            <div class="flex justify-between">
                <router-link :to="{name: 'Product', params: {id: product.id}}">
                <p class="text-md">{{product.name}}</p>
                <p class="text-lg font-bold">${{product.price}}</p>
                </router-link>
            </div>
            <button class="py-2 mt-2 bg-green-300 rounded-md text-white" @click="addToCart(product)">add to cart</button>
        </div>
       
        
        
    </div>
</template>

<script setup>
import { useStore } from "vuex"

const store = useStore()
defineProps({
    product: Object
})

const addToCart = (product) => {
    store.commit("addToCart", {product: product, quantity: 1})
}

</script>
