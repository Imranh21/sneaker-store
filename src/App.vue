<template>
  <div class="bg-gray-100">
    <navbar />
    <router-view />

  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  components: { Navbar },
  setup () {
    

    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>