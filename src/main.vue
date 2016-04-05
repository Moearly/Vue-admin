<template>
  <div class="page page-current">
      <router-view transition="fade" transition-mode="out-in" keep-alive></router-view>
  </div>
</template>

<script>

export default {
  data () {
    return {
      isIndex: true
    }
  }
}
</script>

<style>
</style>
