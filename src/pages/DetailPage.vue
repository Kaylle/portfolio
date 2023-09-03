<template>
  <q-dialog v-model="sharePopup">
    <q-card class="bg-secondary text-white">
      <q-card-section>
        share
      </q-card-section>
    </q-card>
  </q-dialog>
  <q-page class="q-pa-lg bg-dark text-white">
    <div class="container">
      <div class="flex items-center q-my-lg no-wrap">
        <h5 class="text-h5">{{card.title}}</h5>
        <q-space/>
        <q-btn
          round
          dark
          color="primary"
          dense
          @click="share"
        >
          <PhShare color="white" :size="18"/>
        </q-btn>
      </div>
      <q-carousel
        swipeable
        animated
        v-model="slide"
        thumbnails
        infinite
      >
        v-for="(n,i) in card.image"
        :key="i"
        :name="i"
        :img-src="n"
        <q-carousel-slide
          v-for="(n,i) in card.images"
          :key="i"
          :name="i"
          :img-src="n"
        />
      </q-carousel>
      <p class=" q-mt-lg text-grey">
        {{card.description}}
      </p>
      <div class="q-gutter-sm flex reverse-wrap">
        <q-badge v-for="badge in card.badges" :key="badge" rounded>
          {{badge}}
        </q-badge>
      </div>
      <div class="flex q-mt-md">
        <q-btn
          :disable="!getPrevSlug()"
          color="primary"
          no-caps
          :to="getPrevSlug()"
        >
          <PhArrowLeft color="white" :size="18"/>
          <span class="q-ml-md">Назад</span>
        </q-btn>
        <q-space/>
        <q-btn
          :disable="!getNextSlug()"
          color="primary"
          no-caps
          :to="getNextSlug()"
        >
          <span class="q-mr-md">Далее</span>
          <PhArrowRight color="white" :size="18"/>
        </q-btn>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { PhArrowLeft, PhArrowRight, PhShare } from "@phosphor-icons/vue";
import { ref } from "vue";
import { data } from "boot/api"
import { useRoute } from "vue-router";

const route = useRoute()
const id = route.params.id
const projects = data
const card = data.find(e=>e.slug == id)
const slide = ref(0)
const sharePopup = ref(false)

const getPrevSlug = () => {
  let previousItem = projects.find(e=>e.id==card.id-1)
  if (previousItem) return '/project/' + previousItem.slug
}
const getNextSlug = () => {
  let previousItem = projects.find(e=>e.id==card.id+1)
  if (previousItem) return '/project/' + previousItem.slug
}

const share = () => {
  try {
    navigator.share(route.path)
  } catch (e) {
    sharePopup.value = true
  }
}
</script>
