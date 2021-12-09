<template>
    <div class="w-full bg-gray-100">
        <div class="w-11/12 m-auto flex justify-between py-6 sm:w-10/12">
            <router-link to="/">
            <div>
                <p class="text-2xl font-bold">Sneakers</p>
            </div>
            </router-link>

            <router-link to="/cart">
                <div class=" relative">
                    <i class="fas fa-shopping-cart text-gray-600 text-xl"></i>
                    <div class="bg-blue-900 w-5 h-5 text-sm text-white grid place-items-center rounded-full absolute -top-2 -right-4 ">
                        <p>{{cartCount}}</p>
                    </div>
                </div>
            </router-link>
        </div>

    </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {

    setup () {
        const store = useStore()
        const cartCount = computed(() => store.getters.getCartItemCount)

        return {cartCount}
    }
}
</script>

<style lang="scss" scoped>

</style>