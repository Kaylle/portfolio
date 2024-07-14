<template>
  <q-dialog>
    <q-card class="bg-menu text-white rounded-borders">
      <div class="flex items-center q-px-md q-py-sm">
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
      <q-list separator>
        <q-item>
          <q-item-section
            class="justify-between q-py-md row-direction"
          >
            <div
              @click="shareSocialMedia('telegram')"
              class="column items-center round-shadow"
            >
              <q-img
                src="/svg/tg.svg"
                width="24px"
              />
              <span class="text-caption text-grey q-mt-xs">
                Telegram
              </span>
            </div>
            <div
              @click="shareSocialMedia('vk')"
              class="column items-center round-shadow"
            >
              <q-img
                width="24px"
                src="/svg/vk.svg"
              />
              <span class="text-caption text-grey q-mt-xs">
                VK
              </span>
            </div>
            <div
              @click="shareSocialMedia('whatsApp')"
              class="column items-center round-shadow"
            >
              <q-img
                src="/svg/whatsapp.svg"
                width="24px"
              />
              <span class="text-caption text-grey q-mt-xs">
                Whatsapp
              </span>
            </div>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>
            <span class="q-mb-sm">
              Или скопировать ссылку
            </span>
            <q-btn
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
.q-card {
  min-width: 300px
}

.row-direction {
  flex-direction: row;
}
</style>
