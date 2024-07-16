<template>
  <q-dialog>
    <q-card class="rounded-borders q-menu image">
      <div class="flex items-center q-px-lg q-py-md">
        <span>
          Поделиться ссылкой
        </span>
        <q-space/>
        <q-btn
          flat
          dense
          padding="6px"
          v-close-popup
          icon="eva-close"
          round
        />
      </div>
      <q-list>
        <q-item
          clickable
          @click="shareSocialMedia('telegram')"
        >
          <q-item-section side>
            <q-img
              src="/svg/tg.svg"
              width="24px"
            />
          </q-item-section>
          <q-item-section>
            <q-item-label class="q-ml-md">
              Telegram
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          @click="shareSocialMedia('vk')"
        >
          <q-item-section side>
            <q-img
              width="24px"
              src="/svg/vk.svg"
            />
          </q-item-section>
          <q-item-section>
            <q-item-label class="q-ml-md">
              VK
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          @click="shareSocialMedia('whatsApp')"
        >
          <q-item-section side>
            <q-img
              width="24px"
              src="/svg/whatsapp.svg"
            />
          </q-item-section>
          <q-item-section>
            <q-item-label class="q-ml-md">
              Whatsapp
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>
            <span class="q-mb-sm q-ml-sm">
              Или скопировать ссылку
            </span>
            <q-btn
              class="bg-gradient"
              no-caps
              align="left"
              padding="8px 12px"
              color="primary"
              @click="copyLink($route.fullPath)"
              icon="eva-copy-outline"
              :label="$route.fullPath"
            />
          </q-item-section>
        </q-item>
      </q-list>
      <div class="q-pa-md"/>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { copyToClipboard, useQuasar } from "quasar";

const $q = useQuasar()
const props = defineProps({
  card: Object
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

const shareSocialMedia = (type) => {
  let vkLink = `https://vk.com/share.php?url=${window.location}&title=${props.card.title}&image=https://${window.location.hostname}/icons/favicon-32x32.png`
  let telegramLink = `https://t.me/share/url?url=${window.location}&text=${props.card.title}`
  let whatsAppLink = `https://wa.me/?text=${props.card.title} - ${window.location}`
  let link
  if (type === 'vk') link = vkLink
  if (type === 'telegram') link = telegramLink
  if (type === 'whatsApp') link = whatsAppLink
  window.open(link, '_blank')
}
</script>

<style lang="scss" scoped>
@import "src/css/quasar.variables";

.image {
  min-width: 300px;
  border-radius: 20px;
  box-shadow: none;
  background: #FFFFFF90;
  backdrop-filter: blur(5px);
  border: 1px solid $newWhite;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    left: -100px;
    top: -50px;
    background-image: url("/images/1.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top left;
  }
  &>* {
    z-index: 2;
    position: relative;
  }
}
</style>
