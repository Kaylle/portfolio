<template>
  <q-page class="q-pa-lg bg-dark text-white">
    <SharePopup
      v-model="sharePopup"
      :card="card"
    />
    <ImagesPreviewPopup
      v-model="showPhoto"
      :card="card"
      :carousel="preview"
    />
    <span class="hidden">
      {{ id }}
    </span>
    <div class="container">
      <div class="flex items-center q-my-lg no-wrap">
        <div class="column">
          <h5 class="text-h5">
            {{ card.title }}
          </h5>
          <q-btn
            v-if="card.linkToSite"
            :href="card.linkToSite"
            target="_blank"
            label="Ссылка на действующий сайт"
            no-caps
            no-wrap
            color="primary"
            class="q-mt-md"
          />
          <q-btn
            v-if="card.linkToGit"
            :href="card.linkToGit"
            target="_blank"
            label="Ссылка на репозиторий"
            no-caps
            no-wrap
            color="primary"
            class="q-mt-md"
          />
          <q-btn
            v-if="card.linkToFigma"
            :href="card.linkToFigma"
            target="_blank"
            label="Ссылка на Figma"
            no-caps
            no-wrap
            color="primary"
            class="q-mt-md"
          />
        </div>
        <q-space/>
        <q-btn
          round
          dark
          color="primary"
          dense
          @click="share"
          icon="eva-share-outline"
        />
      </div>
      <q-carousel
        swipeable
        transition-prev="slide-right"
        transition-next="slide-left"
        animated
        v-model="slide"
        thumbnails
        infinite
      >
        <q-carousel-slide
          v-for="(n,i) in card.images"
          :key="i"
          :name="i"
          :img-src="n"
          @click="openImage(i)"
        />
      </q-carousel>
      <p class=" q-mt-lg text-grey">
        {{ card.description }}
      </p>
      <div class="q-gutter-sm flex reverse-wrap">
        <q-badge
          v-for="badge in card.badges"
          :key="badge"
          rounded
          :label="badge"
        />
      </div>
      <div class="flex q-mt-md">
        <q-btn
          :disable="isBtnDisabled('prev')"
          color="primary"
          no-caps
          @click="getSlug('prev')"
          label="Назад"
          icon="eva-arrow-left-outline"
        />
        <q-space/>
        <q-btn
          :disable="isBtnDisabled('next')"
          color="primary"
          no-caps
          @click="getSlug('next')"
          label="Далее"
          icon-right="eva-arrow-right-outline"
        />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { computed, ref } from "vue";
import { data } from "boot/api"
import { useRoute, useRouter } from "vue-router";
import { useMeta, useQuasar } from "quasar";
import SharePopup from "components/SharePopup.vue";
import ImagesPreviewPopup from "components/ImagesPreviewPopup.vue";

const $q = useQuasar()
const route = useRoute()
const router = useRouter()
const projects = data
const slide = ref(0)
const sharePopup = ref(false)
const showPhoto = ref(false)
const preview = ref(1)

const card = ref({
  images: [],
  id: 0,
  description: '',
  title: ''
})

const isBtnDisabled = (type) => {
  let searchId
  type === 'prev' ? searchId = -1 : searchId = 1
  return !projects.find(e=>e.id === card.value.id + searchId)
}

const getSlug = (type) => {
  let searchId
  type === 'prev' ? searchId = -1 : searchId = 1
  let item = projects.find(e=>e.id === card.value.id + searchId)
  if (item)
    router.push(`/project/${item.slug}`)
}

const id = computed(()=>{
  getData(route.params.id)
  return route.params.id
})

const getData = (slug) => {
  card.value = data.find(e=>e.slug === slug)
}

const openImage = (index) => {
  preview.value = index
  showPhoto.value = true
}

const share = () => {
  let data = {
    url: window.location.href,
    text: card.value.description,
    title: card.value.title
  }
  try {
    if ($q.screen.width < 500)
      navigator.share(data)
    else
      sharePopup.value = true
  } catch (e) {
    sharePopup.value = true
  }
}

useMeta(() => {
  return {
    title: `Портфолио фронт-енд разработчика - Екатерина Куркина | ${card.value.title}`,
    meta: {
      description: {
        name: 'description',
        content: card.value.description
      }
    }
  }
})
</script>
