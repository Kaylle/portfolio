<template>
  <q-dialog
    @show="getData"
    transition-show="fade"
    transition-hide="fade"
    full-width
    full-height
  >
    <q-card class="fullscreen bg-black text-white">
      <q-toolbar>
        <span class="q-mr-md">
          {{ preview.currentIndex }}/{{ preview.total }}
        </span>
        <q-btn
          flat
          dense
          padding="6px"
          @click="switchPreview('prev')"
          icon="eva-arrow-left-outline"
        />
        <q-btn
          flat
          dense
          padding="6px"
          @click="switchPreview('next')"
          icon-right="eva-arrow-right-outline"
        />
        <q-space/>
        <q-btn
          flat
          dense
          padding="6px"
          v-close-popup
          icon="eva-close"
        />
      </q-toolbar>
      <q-img
        class="full-width"
        :src="preview.image"
        fit="contain"
      />
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  card: Object,
  carousel: Number
})

const preview = ref({
  currentIndex: 1,
  total: 0,
  image: ''
})

const switchPreview = (type) => {
  let searchId
  type === 'prev' ? searchId = -1 : searchId = 1
  if (preview.value.total === preview.value.currentIndex && type === 'next')
    preview.value.currentIndex = 1
  else if (preview.value.currentIndex === 1 && type === 'prev')
    preview.value.currentIndex = preview.value.total
  else
    preview.value.currentIndex += searchId
  preview.value.image = props.card.images[preview.value.currentIndex-1]
}

const getData = () => {
  preview.value = {
    currentIndex: props.carousel + 1,
    total: props.card.images.length,
    image: props.card.images[props.carousel]
  }
}
</script>

<style lang="scss" scoped>
.q-toolbar {
  background: black !important;
}

.q-img {
  height: calc(100vh - 100px);
}
</style>
