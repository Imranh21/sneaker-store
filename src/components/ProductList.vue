<template>
    <div class="w-full py-20">
        
        <h1 class="w-11/12 m-auto mb-4 font-bold text-2xl sm:w-10/12">Popular</h1>
        <div class="w-11/12 m-auto grid grid-cols-2 gap-3 sm:grid-cols-4 sm:w-10/12 sm:gap-6">
            <card v-for="product in products" :key="product.id" :product="product"/>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import {useStore} from 'vuex'
import Card from './Card.vue'



const store = useStore()
const products = computed(() => store.state.products)


</script>

<style lang="scss" scoped>

</style>