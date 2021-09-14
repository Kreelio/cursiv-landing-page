<template>
        <footer class="bg-white">
      <div class="container mx-auto px-8">
        <div class="w-full flex flex-col md:flex-row py-4">
          <div class="flex-1 mb-6 text-black">
            <a class="text-gray-800 no-underline hover:no-underline font-bold text-xl lg:text-2xl" href="#">
              <svg-icon name="logo" class="h-8 fill-current inline" viewBox="0 0 512.005 512.005" />
              Cursiv
              <a
                href="https://www.iubenda.com/privacy-policy/42361767"
                class="iubenda-black iubenda-embed"
                title="Privacy Policy"
              >Privacy Policy</a>
            </a>
          </div>
        </div>
      </div>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'PageFooter',
    setup() {
        
    },
})
</script>

<style>
	.copyright {
		font-size: .8em;
		margin: 0 auto;
	}
</style>