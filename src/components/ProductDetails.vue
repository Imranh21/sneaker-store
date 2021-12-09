<template>
    <div class="w-full ">
        <div class="w-10/12 m-auto py-20">
            <div class="flex flex-col sm:flex-row">
                <div class="sm:w-6/12">
                    <img :src="product.image" />
                </div>
                <div class="flex flex-col sm:ml-10">
                    <p class="text-green-600 text-xl uppercase font-bold mt-4">{{product.brand}}</p>
                    <p class="text-2xl text-black">{{product.name}}</p>
                    
                    <p class="text-gray-600 my-2 w-80">{{product.des}}</p>
                    <p class="font-bold text-2xl my-2 text-black">${{product.price}}</p>
                    <div class="flex justify-start my-4">
                        <div class="flex flex-1 mr-2 justify-evenly items-center bg-white rounded-md">
                            <button @click="decrement" class="text-green-600">-</button>
                            <p>{{quantity}}</p>
                            <button @click="increment" class="text-green-600">+</button>
                        </div>
                        <button @click="addToCart(product)" class="text-green-800 bg-green-300 py-2 px-10 rounded-md">
                            add to cart
                        </button>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";

const store = useStore()
defineProps({
    product: Object
})
const quantity = ref(1)

const increment = () => {
    quantity.value += 1  
}
const decrement = () => {
    if(quantity.value !== 0){
        quantity.value -= 1
    }
}

const addToCart = (value) => {
    store.commit("addToCart", {product: value, quantity: quantity.value})
}

</script>
