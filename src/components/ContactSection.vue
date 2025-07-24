<template>
  <div class="container">
    <h2 class="q-mb-lg text-black">
      {{ $t('contacts') }}
    </h2>
    <div class="row q-col-gutter-md">
      <div
        class="col-md-4 col-sm-6 col-12"
        v-for="card in contacts"
        :key="card"
      >
        <q-card class="q-pa-md text-black">
          <q-card-section>
            <a
              class="flex items-center q-gutter-md no-wrap"
              :href="card.link"
              target="_blank"
            >
              <q-icon
                size="24px"
                :name="card.icon"
              />
              <div v-html="card.text"/>
            </a>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n"
import { computed } from "vue";

const { messages, locale } = useI18n()
const contacts = computed(() =>
  messages.value[locale.value].contactInfo
)
</script>
