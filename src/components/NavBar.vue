<template>
  <nav id="header" class="fixed w-full z-30 top-0 text-white z-50">
    <div
      class="
        w-full
        container
        mx-auto
        flex flex-wrap
        items-center
        justify-between
        mt-0
        py-2
      "
    >
      <div class="pl-4 flex items-center">
        <a
          class="
            toggleColour
            text-white
            no-underline
            hover:no-underline
            font-bold
            text-2xl
            lg:text-4xl
          "
          href="#"
        >
          <svg-icon
            name="logo"
            class="h-8 fill-current inline"
            viewBox="0 0 512.005 512.005"
          />
          Cursiv
        </a>
      </div>
      <div class="block lg:hidden pr-4">
        <button
          id="nav-toggle"
          class="
            flex
            items-center
            p-1
            text-pink-800
            hover:text-gray-900
            focus:outline-none
            focus:shadow-outline
            transform
            transition
            hover:scale-105
            duration-300
            ease-in-out
          "
        >
          <svg
            class="fill-current text-blue-900 h-6 w-6"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        class="
          w-full
          flex-grow
          lg:flex
          lg:items-center
          lg:w-auto
          hidden
          mt-2
          lg:mt-0
          bg-white
          lg:bg-transparent
          text-black
          p-4
          lg:p-0
          z-20
        "
        id="nav-content"
      >
        <ul class="list-reset lg:flex justify-end flex-1 items-center">
          <li class="mr-3">
            <a
              href="#features"
              class="
                toggleColour
                inline-block
                text-white
                no-underline
                hover:text-gray-800 hover:text-underline
                py-2
                px-4
              "
              >Fonctionnalités</a
            >
          </li>
          <li class="mr-3">
            <a
              href="#faq"
              class="
                toggleColour
                inline-block
                text-white
                no-underline
                hover:text-gray-800 hover:text-underline
                py-2
                px-4
              "
              >FAQ</a
            >
          </li>
        </ul>
        <button
          id="navAction"
          class="
            mx-auto
            lg:mx-0
            hover:underline
            bg-white
            text-grey-800
            font-bold
            rounded-full
            mt-4
            lg:mt-0
            py-4
            px-8
            shadow
            opacity-75
            focus:outline-none
            focus:shadow-outline
            transform
            transition
            hover:scale-105
            duration-300
            ease-in-out
          "
        >
          <a href="https://app.cursiv.io">Connexion</a>
        </button>
      </div>
    </div>
    <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
  </nav>
</template>

<script lang="ts">
// @ts-nocheck
import { defineComponent } from "vue";
import SvgIcon from "./SvgIcon.vue";

function checkParent(t, elm) {
  while (t.parentNode) {
    if (t == elm) {
      return true;
    }
    t = t.parentNode;
  }
  return false;
}

export default defineComponent({
  components: { SvgIcon },
  name: "NavBar",
  mounted() {
    var scrollpos = window.scrollY;
    var header = document.getElementById("header");
    var navcontent = document.getElementById("nav-content");
    var navaction = document.getElementById("navAction");
    // var brandname = document.getElementById("brandname");
    var toToggle = document.querySelectorAll(".toggleColour");

    document.addEventListener("scroll", function () {
      /*Apply classes for slide in bar*/
      scrollpos = window.scrollY;

      if (scrollpos > 10) {
        // console.log('HEY', navaction)
        header.classList.add("bg-white");
        navaction.classList.remove("bg-white");
        navaction.classList.add("gradient");
        navaction.classList.remove("text-gray-800");
        navaction.classList.add("text-white");
        //Use to switch toggleColour colours
        for (var i = 0; i < toToggle.length; i++) {
          toToggle[i].classList.add("text-gray-800");
          toToggle[i].classList.remove("text-white");
        }
        header.classList.add("shadow");
        navcontent.classList.remove("bg-gray-100");
        navcontent.classList.add("bg-white");
      } else {
        header.classList.remove("bg-white");
        navaction.classList.remove("gradient");
        navaction.classList.add("bg-white");
        navaction.classList.remove("text-white");
        navaction.classList.add("text-gray-800");
        //Use to switch toggleColour colours
        for (var i = 0; i < toToggle.length; i++) {
          toToggle[i].classList.add("text-white");
          toToggle[i].classList.remove("text-gray-800");
        }

        header.classList.remove("shadow");
        navcontent.classList.remove("bg-white");
        navcontent.classList.add("bg-gray-100");
      }
    });

    var navMenuDiv = document.getElementById("nav-content");
    var navMenu = document.getElementById("nav-toggle");

    document.onclick = check;
    function check(e) {
      var target = (e && e.target) || (event && event.srcElement);

      //Nav Menu
      if (!checkParent(target, navMenuDiv)) {
        // click NOT on the menu
        if (checkParent(target, navMenu)) {
          // click on the link
          if (navMenuDiv.classList.contains("hidden")) {
            navMenuDiv.classList.remove("hidden");
          } else {
            navMenuDiv.classList.add("hidden");
          }
        } else {
          // click both outside link and outside menu, hide menu
          navMenuDiv.classList.add("hidden");
        }
      }
    }
  },
});
</script>

<style scoped>
</style>
