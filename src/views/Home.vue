<template>
    <div class="">
        <hero />
        <product-list />
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useStore } from 'vuex';
import Hero from '../components/Hero.vue';
import ProductList from '../components/ProductList.vue';
const store = useStore()

onMounted(() => {
    store.commit("getIsTrendingProducts")
})
</script>

<style lang="scss" scoped>

</style>