<template>
  <div id="faq" class="bg-white border-b py-8">
    <div
      class="
        w-full
        my-2
        text-5xl
        font-bold
        leading-tight
        text-center text-gray-800
      "
    >
      FAQ
    </div>
    <dl
      class="
        mt-8
        mx-auto
        max-w-screen-sm
        lg:max-w-screen-lg
        flex flex-col
        lg:flex-row lg:flex-wrap
      "
    >

      <div
        v-for="item in questions"
        :key="item.q"
        class="lg:w-1/2"
      >
        <div
          class="
            question-and-answer
            select-none
            cursor-pointer
            border-2
            mx-8
            my-3
            px-6
            py-4
            rounded-lg
            text-sm
            group
          "
        >
          <dt class="question">
            <div class="flex justify-between">
              <div class="text-gray-600 font-semibold">
                {{ item.q }}
              </div>
              <div>
                <svg
                  fill="currentColor"
                  class="
                    question-chevron
                    group-hover:bg-gray-500
                    h-5
                    block
                    text-gray-600
                    bg-gray-400
                    rounded-full
                    p-1
                  "
                  viewBox="0 0 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <g
                    stroke="currentColor"
                    stroke-width="1"
                    fill="currentColor"
                    fill-rule="evenodd"
                  >
                    <g>
                      <polygon
                        points="9.29289322 12.9497475 10 13.6568542 15.6568542 8 14.2426407 6.58578644 10 10.8284271 5.75735931 6.58578644 4.34314575 8"
                      ></polygon>
                    </g>
                  </g>
                </svg>
                <svg
                  fill="currentColor"
                  class="
                    question-chevron
                    hidden
                    group-hover:bg-gray-500
                    h-5
                    block
                    text-gray-600
                    bg-gray-400
                    rounded-full
                    p-1
                  "
                  viewBox="0 0 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <g
                    stroke="currentColor"
                    stroke-width="1"
                    fill="currentColor"
                    fill-rule="evenodd"
                  >
                    <g>
                      <polygon
                        points="10.7071068 7.05025253 10 6.34314575 4.34314575 12 5.75735931 13.4142136 10 9.17157288 14.2426407 13.4142136 15.6568542 12"
                      ></polygon>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </dt>
          <dd class="answer hidden mt-2 leading-snug text-gray-700">
            {{ item.a }}
          </dd>
        </div>
      </div>
    </dl>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SvgIcon from "./SvgIcon.vue";

export default defineComponent({
  components: { SvgIcon },
  name: "Faq",
  data() {
    return {
      questions: [
        {
          q: 'Combien coûte une transcription',
          a: 'Cursiv étant actuellement en Beta, l\'ensemble des fonctionnalités sont temporairement disponibles gratuitement.'
        },
        {
          q: 'Pourquoi la taille des fichiers est limitée a 128Mo',
          a: 'Dans le cadre de la Beta publique, ces quotas sont présents pour éviter les abus. Dans le cadre d\'un besoin particulier, vous pouvez nous contacter directement a l\'adresse contact@cursiv.io pour débloquer ces limitations, nous nous ferons un plaisir d\'étudier ensemble votre projet.'
        },

      ]
    }
  },
  mounted() {
    let elements = document.getElementsByClassName('question-and-answer')
    let f = (ei: number) => {
      return () => {
        elements[ei].querySelector(".answer")?.classList.toggle('hidden')
        elements[ei].querySelector(".question-chevron")?.classList.toggle('hidden')
      }
    }

    for (let i = 0; i < elements.length; i++) {
      elements[i].addEventListener("click", f(i))
    }
  },
});
</script>
