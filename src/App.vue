<template>
  <layout-default>
    <home />
  </layout-default>
</template>

<script lang="ts">

// import { defineComponent } from 'vue'
import LayoutDefault from './layouts/LayoutDefault.vue';
import Home from './pages/Home.vue'
export default {
  name: 'App',
  components: {
    LayoutDefault,
    Home,
  },
}
</script>

<style>
.gradient {
  background: linear-gradient(90deg, #CD5711 0%, #FCA73D 100%);
}
</style>
