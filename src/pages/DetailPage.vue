<template>
  <q-page>
    <SharePopup
      v-model="sharePopup"
      :card="card"
    />
    <ImagesPreviewPopup
      v-model="showPhoto"
      :card="card"
      :carousel="preview"
    />
    <div class="hero-section">
      <div class="absolute-top-right element-top"/>
      <div class="absolute-top-right element-right"/>
      <div class="flex items-center q-mb-lg no-wrap">
        <h2>
          {{ card.title }}
        </h2>
        <q-space/>
        <q-btn
          class="no-shrink"
          padding="12px"
          color="dark"
          dense
          @click="share"
          icon="eva-share-outline"
        />
      </div>
      <CarouselSection
        :card="card"
      />
      <div class="q-gutter-sm flex q-pt-lg">
        <q-btn
          v-if="card.linkToSite"
          :href="card.linkToSite"
          target="_blank"
          label="Go to website"
          no-caps
          no-wrap
          color="dark"
          class="q-mt-md"
        />
        <q-btn
          v-if="card.linkToGit"
          :href="card.linkToGit"
          target="_blank"
          label="GitHub"
          no-caps
          no-wrap
          color="dark"
          class="q-mt-md"
        />
        <q-btn
          v-if="card.linkToFigma"
          :href="card.linkToFigma"
          target="_blank"
          label="Figma"
          no-caps
          no-wrap
          color="dark"
          class="q-mt-md"
        />
      </div>
      <div class="row q-col-gutter-md">
        <div class="col-12 col-md-8">
          <p class="q-mt-lg">
            {{ card.description }}
          </p>
          <div class="q-gutter-sm flex">
            <q-chip
              v-for="badge in card.badges"
              :key="badge"
              rounded
              color="primary"
              :label="badge"
            />
          </div>
        </div>
      </div>
      <div class="flex q-mt-md">
        <q-btn
          :disable="isBtnDisabled('prev')"
          color="primary"
          no-caps
          @click="getSlug('prev')"
          label="Previous"
          icon="eva-arrow-left-outline"
        />
        <q-space/>
        <q-btn
          :disable="isBtnDisabled('next')"
          color="primary"
          no-caps
          @click="getSlug('next')"
          label="Next"
          icon-right="eva-arrow-right-outline"
        />
      </div>
    </div>
    <ContactSection/>
  </q-page>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { projectsData } from "boot/api"
import { useRoute, useRouter } from "vue-router"
import { useMeta, useQuasar } from "quasar"
import SharePopup from "components/SharePopup.vue"
import ImagesPreviewPopup from "components/ImagesPreviewPopup.vue"
import ContactSection from "components/ContactSection.vue"
import CarouselSection from "components/CarouselSection.vue"

const $q = useQuasar()
const route = useRoute()
const router = useRouter()
const projects = projectsData
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

const getData = (slug) => {
  slide.value = 0
  card.value = projects.find(e=>e.slug === slug)
  console.log(slug)
}

const share = () => {
  let shareData = {
    url: window.location.href,
    text: card.value.description,
    title: card.value.title
  }
  try {
    if ($q.screen.width < 500)
      navigator.share(shareData)
    else
      sharePopup.value = true
  } catch (e) {
    sharePopup.value = true
  }
}

watch(() => route.params.id, () => {
  getData(route.params.id)
})

useMeta(() => {
  return {
    title: `${card.value?.title} | Kate Kurkina | Front-end developer's portfolio`,
    meta: {
      description: {
        name: 'description',
        content: card.value?.description
      }
    }
  }
})

onMounted(() => {
  getData(route.params.id)
})
</script>
