<template>
  <q-page class="q-pt-md q-pb-xl">
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
      <div
        class="q-pa-xs"
        style="border-radius: 10px;background:linear-gradient(147deg, #A36ADD50, #D0719A50, #F29D8950, #EDD4C350)"
      >
        <div class="full-width flex items-center q-mb-xs q-px-md no-wrap overflow-hidden">
          <div
            class="flex items-center no-wrap"
            style="gap: 8px"
          >
            <div
              v-for="n in 3"
              :key="n"
              class="bg-primary"
              style="padding: 6px;border-radius: 100px"
            />
            <q-icon
              size="16px"
              name="eva-arrow-back-outline"
            />
            <q-icon
              size="16px"
              color="grey"
              name="eva-arrow-forward-outline"
            />
          </div>
          <q-space/>
          <div
            class="flex items-center q-pa-sm no-wrap"
            style="border-radius: 10px;background: #2D303913;gap: 48px"
          >
            <q-icon
              name="eva-lock-outline"
            />
            <span
              v-if="$q.screen.width>1024"
              class="text-caption"
            >
              {{ card.title }}
            </span>
            <span v-else class="text-caption">
              link
            </span>
            <q-icon
              name="eva-link-2-outline"
            />
          </div>
          <q-space/>
          <div
            class="flex items-center no-wrap"
            style="gap: 8px"
          >
            <q-icon
              size="16px"
              name="eva-sync-outline"
            />
            <q-icon
              size="16px"
              name="eva-download-outline"
            />
            <q-icon
              size="16px"
              name="eva-plus-outline"
            />
          </div>
        </div>
        <q-carousel
          swipeable
          transition-prev="slide-right"
          transition-next="slide-left"
          animated
          v-model="slide"
          arrows
          navigation
          navigation-icon="eva-radio-button-off"
          navigation-active-icon="eva-radio-button-on"
          next-icon="eva-arrow-right-outline"
          prev-icon="eva-arrow-left-outline"
          control-color="grey"
          control-type="regular"
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
      </div>
      <div class="q-gutter-sm flex q-pt-lg">
        <q-btn
          v-if="card.linkToSite"
          :href="card.linkToSite"
          target="_blank"
          label="Ссылка на действующий сайт"
          no-caps
          no-wrap
          color="grey"
          class="q-mt-md"
        />
        <q-btn
          v-if="card.linkToGit"
          :href="card.linkToGit"
          target="_blank"
          label="Ссылка на репозиторий"
          no-caps
          no-wrap
          color="grey"
          class="q-mt-md"
        />
        <q-btn
          v-if="card.linkToFigma"
          :href="card.linkToFigma"
          target="_blank"
          label="Ссылка на Figma"
          no-caps
          no-wrap
          color="grey"
          class="q-mt-md"
        />
      </div>
      <p class=" q-mt-lg text-grey">
        {{ card.description }}
      </p>
      <div class="q-gutter-sm flex">
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
  // eslint-disable-next-line vue/no-side-effects-in-computed-properties
  slide.value=0
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

<style lang="scss">
@import "src/css/quasar.variables";

.q-carousel {
  border-radius: 10px;
  background: transparent;
  height: 508px;
  & .q-carousel__thumbnail {
    position: relative;
    &:before {
      display: inline-block;
      background: black;
      width: 100px;
      height: 100px;
      position: absolute;
      top: 0;
      left: 0;
      content: "";
    }
  }
}

@media (max-width: 1024px) {
  .q-carousel {
    height: 323px;
  }
}

@media (max-width: 765px) {
  .q-carousel {
    height: 48vw;
  }
}
</style>
