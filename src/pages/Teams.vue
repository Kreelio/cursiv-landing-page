<template>
  <div>
    <team />
    <footer-waves />
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import Team from '../components/Team.vue'
import FooterWaves from '../components/FooterWaves.vue'

export default defineComponent({
  name: 'Teams',
  components: {
    Team,
    FooterWaves,
  },
})
</script>

<style>
.gradient {
  background: linear-gradient(90deg, #CD5711 0%, #FCA73D 100%);
}
</style>