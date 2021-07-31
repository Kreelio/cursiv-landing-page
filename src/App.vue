<template>
  <div class="leading-normal tracking-normal text-white gradient" style="font-family: 'Source Sans Pro', sans-serif;">
    <nav-bar />
    <hero />
    <header-waves />
    <main-content />
    <faq />
    <integrations />
    <team />
    <footer-waves />
    <testimonies />
    <page-footer />
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import NavBar from './components/NavBar.vue'
import Hero from './components/Hero.vue'
import HeaderWaves from './components/HeaderWaves.vue'
import MainContent from './components/MainContent.vue'
import Faq from './components/Faq.vue'
import Integrations from './components/Integrations.vue'
import Testimonies from './components/Testimonies.vue'
import Team from './components/Team.vue'
import FooterWaves from './components/FooterWaves.vue'
import PageFooter from './components/PageFooter.vue'

export default defineComponent({
  name: 'App',
  components: {
    HeaderWaves,
    NavBar,
    Hero,
    MainContent,
    Team,
    Testimonies,
    Faq,
    Integrations,
    FooterWaves,
    PageFooter,
  },

 
})
</script>

<style>
.gradient {
  background: linear-gradient(90deg, #CD5711 0%, #FCA73D 100%);
}
</style>
