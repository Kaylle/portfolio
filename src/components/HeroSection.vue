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
          <p v-html="$t('description')"/>
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
