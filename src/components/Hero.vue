<template>
    <div class="pt-24">
      <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
          <h1 class="my-4 text-4xl font-bold leading-tight">
            Votre scribe numérique
          </h1>
          <p class="leading-normal text-2xl mb-8">
             Plateforme clés en main de transcription et sous-titrage.
          </p>
        </div>
        <div class="flex flex-col w-full md:w-3/5 py-6 text-center" style="height: 512px">
          <svg-icon name="illustration" class=" w-full md:w-5/5 z-10 h-full" />
        </div>
      </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import SvgIcon from './SvgIcon.vue'
export default defineComponent({
  components: { SvgIcon },
  name: 'Hero',
})

</script>
