<template>
  <div class="browser-wrapper">
    <ImagesPreviewPopup
      v-model="showPhoto"
      :card="card"
      :carousel="preview"
    />
    <div class="full-width flex items-center q-mb-xs q-px-md no-wrap overflow-hidden">
      <div
        class="flex items-center no-wrap gap"
        v-if="$q.screen.width>1024"
      >
        <div
          v-for="n in 3"
          :key="n"
          class="bg-secondary dot"
        />
        <q-icon
          :color="isBtnDisabled('prev')?'grey':'dark'"
          @click="getSlug('prev')"
          size="16px"
          name="eva-arrow-back-outline"
          class="cursor-pointer"
        />
        <q-icon
          :color="isBtnDisabled('prev')?'grey':'dark'"
          @click="getSlug('next')"
          size="16px"
          name="eva-arrow-forward-outline"
          class="cursor-pointer"
        />
      </div>
      <q-space/>
      <div class="flex items-center q-pa-sm no-wrap address-bar">
        <a
          style="height: 16px;line-height: 16px"
          target="_blank"
          :href="card.linkToGit ? card.linkToGit : card.linkToSite"
        >
          <q-icon
            name="eva-globe-outline"
          />
        </a>
        <span class="text-caption">
          {{ card.linkToGit ? card.linkToGit : card.linkToSite ? card.linkToSite : 'https://test.com' }}
        </span>
        <q-icon
          @click="copyLink( card.linkToGit ? card.linkToGit : card.linkToSite ? card.linkToSite : '')"
          name="eva-link-2-outline"
          class="cursor-pointer"
        />
      </div>
      <q-space/>
      <div
        v-if="$q.screen.width>1024"
        class="flex items-center no-wrap gap"
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
      control-color="primary"
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
</template>

<script setup>
import { projectsData } from "boot/api"
import { ref } from "vue"
import { useRouter } from "vue-router"
import { useQuasar, copyToClipboard } from "quasar"
import ImagesPreviewPopup from "components/ImagesPreviewPopup.vue"

const $q = useQuasar()
const router = useRouter()
const projects = projectsData
const slide = ref(0)
const showPhoto = ref(false)
const preview = ref(1)

const props = defineProps({
  card: Object
})

const copyLink = (link) => {
  copyToClipboard(link).then(() => {
    $q.notify({
      color: 'positive',
      message: 'Link copied!'
    })
  })
    .catch(() => {
      $q.notify({
        color: 'negative',
        message: 'Can`t copy link'
      })
    })
}

const isBtnDisabled = (type) => {
  let searchId
  type === 'prev' ? searchId = -1 : searchId = 1
  return !projects.find(e=>e.id === props.card.id + searchId)
}

const getSlug = (type) => {
  let searchId
  type === 'prev' ? searchId = -1 : searchId = 1
  let item = projects.find(e=>e.id === props.card.id + searchId)
  if (item)
    router.push(`/project/${item.slug}`)
}

const openImage = (index) => {
  preview.value = index
  showPhoto.value = true
}
</script>

<style lang="scss">
@import "src/css/quasar.variables";

.q-carousel {
  height: 508px;
}

.browser-wrapper {
  padding: 8px;
  border-radius: 30px;
  background: $accent;
}

.gap {
  gap: 8px;
}

.dot {
  padding: 6px;
  border-radius: 100px;
}

.address-bar {
  border-radius: 10px;
  background: $primary;
  gap: 48px;
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
