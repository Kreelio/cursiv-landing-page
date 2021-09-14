<template>
  <div class="leading-normal tracking-normal text-white gradient" style="font-family: 'Source Sans Pro', sans-serif;">
    <nav-bar />
    <hero />
    <header-waves />
    <main>
      <slot/>
    </main>
    <page-footer />
  </div>
</template>
<script lang="ts">

import { defineComponent } from 'vue'
import NavBar from '../components/NavBar.vue'
import Hero from '../components/Hero.vue'
import HeaderWaves from '../components/HeaderWaves.vue'
import PageFooter from '../components/PageFooter.vue'

export default defineComponent({
  name: 'LayoutDefault',
  components: {
    HeaderWaves,
    NavBar,
    Hero,
    PageFooter,
  },
})
</script>

<style>
.gradient {
  background: linear-gradient(90deg, #CD5711 0%, #FCA73D 100%);
}
</style>