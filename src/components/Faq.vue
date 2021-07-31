<template>
    <section id="faq" class="bg-gray-100 py-8">
      <div class="container mx-auto px-2 pt-4 pb-12 text-gray-800">
        <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          FAQ
        </h1>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <br />
        <br />

        <table class="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-300 text-gray-900">
          <tr class="text-left border-b border-gray-300">
            <th class="px-4 py-3">Question</th>
            <th class="px-4 py-3">Reponse</th>
          </tr>
          <tr class="bg-gray-100 border-b border-gray-300">
            <td class="px-4 py-3">Un seul type de plan ? 128Mo / enregistrement (~2h)</td>
            <td class="px-4 py-3">Cursiv étant actuellement en développement, toutes les fonctionalités sont temporairement disponible gratuitement !</td>
          </tr>    
        </table>
      </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Faq',
})
</script>
