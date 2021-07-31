<template>
  <div class="leading-normal tracking-normal text-white gradient" style="font-family: 'Source Sans Pro', sans-serif;">
    <nav-bar />
    <hero />
    <header-waves />
    <main-content />
    <pricing />
    <faq />
    <integrations />
    <equipe />
    <footer-waves />
    <temoignage />
    <page-footer />
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import NavBar from './components/NavBar.vue'
import Hero from './components/Hero.vue'
import HeaderWaves from './components/HeaderWaves.vue'
import MainContent from './components/MainContent.vue'
import Pricing from './components/Pricing.vue'
import Faq from './components/Faq.vue'
import Integrations from './components/Integrations.vue'
import Temoignage from './components/Temoignage.vue'
import Equipe from './components/Equipe.vue'
import FooterWaves from './components/FooterWaves.vue'
import PageFooter from './components/PageFooter.vue'

export default defineComponent({
  name: 'App',
  components: {
    HeaderWaves,
    NavBar,
    Hero,
    MainContent,
    Equipe,
    Pricing,
    Temoignage,
    Faq,
    Integrations,
    FooterWaves,
    PageFooter,
  },

 
})
</script>

<style>
.gradient {
  /* background: linear-gradient(90deg, #ADB6FF 0%, #D4E09B 100%); */
  background: linear-gradient(90deg, #CD5711 0%, #FCA73D 100%);
  /* background: linear-gradient(90deg, #2c3e50 0%, #82A3A3 100%); */
}
</style>
