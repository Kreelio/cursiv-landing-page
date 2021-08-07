<template>
  <div>
    <main-content />
    <faq />
    <integrations />
    <testimonies />
    <footer-waves />
    <call-to-action />
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import MainContent from '../components/MainContent.vue'
import Faq from '../components/Faq.vue'
import Integrations from '../components/Integrations.vue'
import Testimonies from '../components/Testimonies.vue'
import FooterWaves from '../components/FooterWaves.vue'
import CallToAction from '../components/CallToAction.vue'

export default defineComponent({
  name: 'Home',
  components: {
    MainContent,
    Testimonies,
    Faq,
    Integrations,
    FooterWaves,
    CallToAction,
  },
})
</script>

<style>
.gradient {
  background: linear-gradient(90deg, #CD5711 0%, #FCA73D 100%);
}
</style>