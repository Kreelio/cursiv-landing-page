<template>
    <section id="equipe" class="bg-gray-100 py-8">
      <div class="container mx-auto px-2 pt-4 pb-12 text-gray-800">
        <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Equipe
        </h1>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <br />
        <br />

        <table class="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-300 text-gray-900">
          <tr class="text-left border-b border-gray-300">
            <th class="px-4 py-3">Germain</th>
            <th class="px-4 py-3">Adrien</th>
            <th class="px-4 py-3">Zadkiel</th>
          </tr>
          <tr class="bg-gray-100 border-b border-gray-300">
            <td><img src="./assets/germain.png"></td>
            <td><img src="./assets/adrien.png"></td>
            <td><img src="./assets/zadkiel.png"></td>
          </tr>
          <tr class="bg-gray-100 border-b border-gray-300">
            <td class="px-4 py-3">Développeur</td>
            <td class="px-4 py-3">Infrastructure</td>
            <td class="px-4 py-3">Développeur</td>
          </tr>

        </table>
      </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Equipe',
})
</script>
