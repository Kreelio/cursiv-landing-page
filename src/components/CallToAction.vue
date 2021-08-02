<template>
    <section class="container mx-auto text-center py-6 mb-12">
      <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
        Testez dès maintenant!
      </h1>
      <button class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
        Cliquez-ici !
      </button>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'CallToAction',
})
</script>
