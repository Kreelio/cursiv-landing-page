<template>
  <section class="border-b py-8 testimonial">
      <div class="container mx-auto flex flex-wrap pt-4 pb-12">
        <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-black-800">
          Temoignage
        </h1>
      <div class="justify-center testimonial-block">
        <div class="square-image">
          <img src="/images/otis.jpg" alt="Otis" />
        </div>
        <blockquote>
          <p>
            Vous savez, moi je ne crois pas qu’il y ait de bonne ou de mauvaise
            situation.
          </p>
          <p class="author">Otis - Scribe.</p>
        </blockquote>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Testimonies',
})
</script>

<style scoped>
.testimonial {
	margin: 0;
}

.testimonial-block {
  max-width: 750px;
  width: 98%;
  margin: 0 auto;
}

blockquote {
	padding: 18px 25px;
	margin: 0;
	quotes: "\201C""\201D""\2018""\2019";
	font-style: italic;
}
.author {
  display: block;
  font-weight: bold;
  margin: 10px 0 0 0;
  font-size: .85em;
  font-style: normal;
}
p {
  display: inline;
}

blockquote:before {
	color: #ccc;
	content: open-quote;
	font-size: 4em;
	line-height: 0.1em;
	margin-right: 0.25em;
	vertical-align: -0.4em;
}

.square-image {
	width: 150px;
	height: 150px;
	overflow: hidden;
	margin: 25px auto 0 auto;
	position: relative;
	border-radius: 200px;
}
.square-image	img {
		position: absolute;
		left: -1000%;
		right: -1000%;
		top: -1000%;
		bottom: -1000%;
		margin: auto;
		width: 300px;
	}
</style>
