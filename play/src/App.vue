<script setup lang="ts">
// import VueSearchPopup from 'vue-search-popup'
import VueSearchPopup from '@vue-search-popup/core'

// import '../../dist/style.css'
</script>

<template>
  <div class="bg-amber-50">
    <VueSearchPopup name="1" />
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo">
    </a>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
