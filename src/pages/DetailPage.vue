<template>
  <q-dialog v-model="sharePopup">
    <q-card
      style="min-width: 300px"
      class="bg-menu text-white rounded-borders"
    >
      <div class="flex items-center q-px-md q-py-sm">
        <span>Поделиться ссылкой</span>
        <q-space/>
        <q-btn
          flat
          dense
          padding="6px"
          v-close-popup
        >
          <PhX size="18px"/>
        </q-btn>
      </div>
      <q-list separator>
        <q-item>
          <q-item-section class="justify-between q-py-md" style="flex-direction: row">
            <div
              @click="shareSocialMedia('telegram')"
              class="column items-center round-shadow"
            >
              <PhTelegramLogo
                size="24px"
                color="#EB35DE"
              />
              <span class="text-caption text-grey q-mt-xs">
                Telegram
              </span>
            </div>
            <div
              @click="shareSocialMedia('vk')"
              class="column items-center round-shadow"
            >
              <PhNotionLogo
                size="24px"
                color="#EB35DE"
              />
              <span class="text-caption text-grey q-mt-xs">
                VK
              </span>
            </div>
            <div
              @click="shareSocialMedia('whatsApp')"
              class="column items-center round-shadow"
            >
              <PhWhatsappLogo
                size="24px"
                color="#EB35DE"
              />
              <span class="text-caption text-grey q-mt-xs">
                Whatsapp
              </span>
            </div>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>
            <span class="q-mb-sm">Или скопировать ссылку</span>
            <q-btn
              no-caps
              align="left"
              padding="8px 12px"
              style="background: #493C67"
              @click="copyLink(route.fullPath)"
            >
              <PhCopy
                class="q-mr-sm"
                size="18px"
              />
              {{route.fullPath}}
            </q-btn>
          </q-item-section>
        </q-item>
      </q-list>
      <q-card-section style="padding: 16px"/>
    </q-card>
  </q-dialog>
  <q-dialog
    transition-show="fade"
    transition-hide="fade"
    v-model="showPhoto"
    full-width
    full-height
  >
    <q-card class="fullscreen bg-black">
      <q-toolbar style="background: black !important;">
        <span style="width: 50px">
          {{ preview.currentIndex }}/{{ preview.total }}
        </span>
        <q-btn
          flat
          dense
          padding="6px"
          @click="switchPreview('prev')"
        >
          <PhArrowLeft size="24px"/>
        </q-btn>
        <q-btn
          flat
          dense
          padding="6px"
          @click="switchPreview('next')"
        >
          <PhArrowRight size="24px"/>
        </q-btn>
        <q-space/>
        <q-btn
          flat
          dense
          padding="6px"
          v-close-popup
        >
          <PhX size="24px"/>
        </q-btn>
      </q-toolbar>
      <q-img
        class="full-width"
        style="height: calc(100vh - 100px)"
        :src="preview.image"
        fit="contain"
      />
    </q-card>
  </q-dialog>
  <q-page class="q-pa-lg bg-dark text-white">
    <span class="hidden">{{id}}</span>
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
        transition-prev="slide-right"
        transition-next="slide-left"
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
          @click="openImage(n,i)"
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
          :disable="isBtnDisabled('prev')"
          color="primary"
          no-caps
          @click="getSlug('prev')"
        >
          <PhArrowLeft color="white" :size="18"/>
          <span class="q-ml-md">Назад</span>
        </q-btn>
        <q-space/>
        <q-btn
          :disable="isBtnDisabled('next')"
          color="primary"
          no-caps
          @click="getSlug('next')"
        >
          <span class="q-mr-md">Далее</span>
          <PhArrowRight color="white" :size="18"/>
        </q-btn>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import {
  PhArrowLeft,
  PhArrowRight,
  PhCopy,
  PhNotionLogo,
  PhShare,
  PhTelegramLogo,
  PhWhatsappLogo,
  PhX
} from "@phosphor-icons/vue";
import { computed, ref } from "vue";
import { data } from "boot/api"
import { useRoute, useRouter } from "vue-router";
import { copyToClipboard, useQuasar } from "quasar";

const $q = useQuasar()
const route = useRoute()
const router = useRouter()
const projects = data
const slide = ref(0)
const sharePopup = ref(false)
const showPhoto = ref(false)
const card = ref({
  images: [],
  id: 0,
  description: '',
  title: ''
})
const preview = ref({
  currentIndex: 1,
  total: 0,
  image: ''
})

const copyLink = (link) => {
  copyToClipboard(link).then(() => {
    $q.notify({
      color: 'positive',
      message: 'Ссылка была успешно скопирована!'
    })
  })
  .catch(() => {
    $q.notify({
      color: 'negative',
      message: 'Не удалось скопировать ссылку'
    })
  })
}

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
  preview.value = {
    currentIndex: 1,
    total: card.value.images.length,
    image: ''
  }
}

const openImage = (image, index) => {
  preview.value.image = image
  preview.value.currentIndex = index + 1
  showPhoto.value = true
}

const switchPreview = (type) => {
  let searchId
  type === 'prev' ? searchId = -1 : searchId = 1
  if (preview.value.total === preview.value.currentIndex && type === 'next')
    preview.value.currentIndex = 1
  else if (preview.value.currentIndex === 1 && type === 'prev')
    preview.value.currentIndex = preview.value.total
  else
    preview.value.currentIndex += searchId
  preview.value.image = card.value.images[preview.value.currentIndex-1]
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
    console.log(e)
    sharePopup.value = true
  }
}

const shareSocialMedia = (type) => {
  let vkLink = `https://vk.com/share.php?url=${window.location}&title=${card.value.title}&image=https://${window.location.hostname}/icons/favicon-32x32.png`
  let telegramLink = `https://t.me/share/url?url=${window.location}&text=${card.value.title}`
  let whatsAppLink = `https://wa.me/?text=${card.value.title} - ${window.location}`
  let link
  if (type === 'vk') link = vkLink
  if (type === 'telegram') link = telegramLink
  if (type === 'whatsApp') link = whatsAppLink
  window.open(link, '_blank')
}
</script>
