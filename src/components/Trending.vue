<template>
    <div class="w-11/12 m-auto pb-10">
        <div>
            <h1 class="text-xl font-bold my-4">Trending Products</h1>
        </div>
        <div class=" m-auto flex flex-row flex-nowrap gap-6 overflow-scroll  sm:w-4/5">
            <card v-for="product in products" :key="product.id" :product="product" />
        </div>

    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import Card from './Card.vue'

const store = useStore()
const products = computed(() => store.state.trendingProducts)
// const products = ref(null)
// onMounted(() => {
//     products.value = store.state.trendingProducts
// })
</script>

<style lang="scss" scoped>

</style>