<template>
    <div>
        <product-details :product="product"/>
    </div>
</template>

<script setup>
import ProductDetails from '../components/ProductDetails.vue'
import { computed, onBeforeMount, onMounted, ref } from 'vue'
import {useRoute} from 'vue-router'
import { useStore } from 'vuex'

const route = useRoute()
const store = useStore()

// const product = ref()
const product = computed(() => store.state.productDetails)

onMounted(() => {
    store.commit("fetchAProduct", route.params.id)
    // product.value = computed(() => store.state.productDetails)
})


</script>

<style lang="scss" scoped>

</style>