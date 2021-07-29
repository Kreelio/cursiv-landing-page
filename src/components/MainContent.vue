<template>
    <section id="features" class="bg-white border-b py-8">
      <div class="container max-w-5xl mx-auto m-8">
        <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">          
          Fonctionnalité
        </h1>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div class="flex flex-wrap">
          <div class="w-5/6 sm:w-1/2 p-6">
            <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
              Automatisez la prise de notes lors de vos réunions
            </h3>
            <p class="text-gray-600 mb-8">
             Avec son moteur de reconnaissance vocale basée sur l'intelligence artificielle, Cursiv est capable de retranscrire textuellement vos réunions.
            </p>
          </div>
          <svg-icon name="scaling" class="w-full sm:w-1/2 p-6" viewBox="0 0 1177 598.5" />

        </div>
        <div class="flex flex-wrap flex-col-reverse sm:flex-row">
          <div class="w-full sm:w-1/2 p-6 mt-6">
            <svg-icon name="backup" class="w-5/6 sm:h-64 mx-auto" viewBox="0 0 1176.60617 873.97852" />
          </div>
          <div class="w-full sm:w-1/2 p-6 mt-6">
            <div class="align-middle">
              <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
                Gardez une trace de vos décisions
              </h3>
              <p class="text-gray-600 mb-8">
                Cursiv vous permet de naviguer au travers de toutes vos réunions enregistrées afin de retrouver l'information qui vous intéresse.
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap">
          <div class="w-5/6 sm:w-1/2 p-6">
            <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
              Partagez des comptes rendus à vos collaborateurs
            </h3>
            <p class="text-gray-600 mb-8">
              L'édition et la diffusion de comptes rendus vous permettent d'unifier les visions et de souligner les éléments importants d'une réunion.
            </p>  
          </div>
          <svg-icon name="analytics" class="w-full sm:w-1/2 p-6" viewBox="0 0 1177 598.5" />
        </div>
      </div>
    </section>    
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SvgIcon from './SvgIcon.vue'

export default defineComponent({
  components: { SvgIcon },
    name: 'MainContent'
})
</script>
