<template>
  <div class="hero-section">
    <div class="absolute-top-right element-top"/>
    <div class="absolute-top-right element-right"/>
    <div class="row q-col-gutter-lg text-black">
      <div class="col-12 col-md-8">
        <div class="column q-gutter-lg">
          <h1>
            {{ title }}
          </h1>
          <p>
            Here I present the projects I've worked on throughout my journey
            as a <b>front-end developer</b>. My portfolio includes a variety
            of projects I've built for both <b>clients and personal use</b>. I
            believe that every project I work on should be <b>unique</b> and
            <b>tailored to the client's needs</b>. I hope you'll enjoy
            browsing through my work and find something that <b>inspires or
            interests you</b>!
          </p>
          <slot/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String
})
</script>
