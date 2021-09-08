<template>
    <section id="pricing" class="bg-gray-100 py-8">
      <div class="container mx-auto px-2 pt-4 pb-12 text-gray-800">
        <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Importez vos réunions depuis
        </h1>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <br />
        <br />

        <table class="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-300 text-gray-900">
          <tr class="bg-gray-100">
            <td class="px-4 py-3">
              <div class="tooltip">
                <span class="tooltiptext">Google Drive</span>
                  <img src="/tools-img/Drive-icon.png">
              </div>
            </td>
            <td class="px-4 py-3">
              <div class="tooltip">
                <span class="tooltiptext">Dropbox</span>
                  <img src="/tools-img/dropbox-icon.png">
              </div>
            </td>
            <td class="px-4 py-3">
              <div class="tooltip">
                <span class="tooltiptext">Votre appareil</span>
                  <img src="/tools-img/Filesystem-network-local-icon.png">
              </div>
            </td>
            <td class="px-4 py-3">
              <div class="tooltip">
                <span class="tooltiptext">Microphone</span>
                  <img src="/tools-img/Microphone-icon.png">
              </div>
            </td>
            <td class="px-4 py-3">
              <div class="tooltip">
                <span class="tooltiptext">Microsoft OneDrive</span>
                  <img src="/tools-img/Microsoft-OneDrive-icon.png">
              </div>
            </td>
          </tr>
        </table>
      </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Integrations',
    setup() {

    },
})
</script>

<style scoped>
/* Tooltip container */
.tooltip {
  position: relative;
  display: inline-block;
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: #555;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;

  /* Position the tooltip text */
  position: absolute;
  z-index: 1;
  bottom: -24%;
  left: 50%;
  margin-left: -60px;

  /* Fade in tooltip */
  opacity: 0;
  transition: opacity 0.3s;
}

/* Tooltip arrow */
.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: -35%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color:  transparent transparent #555 transparent;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
</style>
