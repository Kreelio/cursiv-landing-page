<template>
  <LayoutDefault>
    <RouterView/>
  </LayoutDefault>
</template>

<script lang="ts">

// import { defineComponent } from 'vue'
import LayoutDefault from './layouts/LayoutDefault.vue';

export default {
  name: 'App',
  components: {
    LayoutDefault,
  },
}
</script>

<style>
.gradient {
  background: linear-gradient(90deg, #CD5711 0%, #FCA73D 100%);
}
</style>