<template>
  <q-layout view="lHh Lpr lff">
    <q-toolbar class="q-pa-md">
      <q-avatar size="60px" class="q-mr-md">
        <PhTerminalWindow/>
      </q-avatar>
      <template v-if="$q.screen.width>1024">
        <q-tabs
          indicator-color="transparent"
          active-color="primary"
          no-caps
          class="f"
        >
          <q-route-tab
            v-for="item in menuLinks"
            :key="item"
            :to="item.link"
            :label="item.label"
          />
        </q-tabs>
        <q-space/>
      </template>
      <router-link to="/">
        <div class="column" :class="$q.screen.width>1024?'items-center':''">
          <h5>Екатерина Куркина</h5>
          <div class="text-caption text-grey">
            Портфолио фронтенд разработчика
          </div>
        </div>
      </router-link>
      <q-space/>
      <q-tabs
        indicator-color="transparent"
        no-caps
        v-if="$q.screen.width>1024"
      >
        <q-item
          clickable
          v-for="link in links"
          :key="link"
          target="_blank"
          :href="link.link"
        >
          {{link.label}}
          <q-tooltip class="bg-primary">
            {{ link.tooltip }}
          </q-tooltip>
        </q-item>
      </q-tabs>
      <q-btn
        v-else
        round
        color="primary"
      >
        <PhList/>
        <q-menu dark>
          <q-item>
            Меню
          </q-item>
          <q-list>
            <q-item
              v-for="item in menuLinks"
              :key="item"
              clickable
              :to="item.link"
            >
              <q-item-section>{{ item.label }}</q-item-section>
              <q-item-section side class="bg-accent">
                <PhLink color="white" :size="18"/>
              </q-item-section>
            </q-item>
          </q-list>
          <div class="menu-btn flex no-wrap justify-between">
            <q-btn
              padding="0 16px"
              v-for="link in links"
              :key="link"
              :href="link.link"
              flat
              no-caps
            >
              <span>{{ link.label }}</span>
            </q-btn>
          </div>
        </q-menu>
      </q-btn>
    </q-toolbar>
    <q-footer>
      <q-toolbar
        :class="$q.screen.width<=600?'column':''"
      >
        <router-link
          to="/"
          class="items-center"
          :class="$q.screen.width<=600?'column justify-center':'flex'"
        >
          <q-avatar
            size="60px"
            :class="$q.screen.width<=600?'q-mb-sm':'q-mr-md'"
          >
            <PhTerminalWindow/>
          </q-avatar>
          <div
            class="column"
            :class="$q.screen.width>600?'':'items-center q-gutter-y-sm'"
          >
            <h5>Екатерина Куркина</h5>
            <div class="text-caption text-grey">
              Портфолио фронтенд разработчика
            </div>
          </div>
        </router-link>
        <q-space/>
        <span
          :class="$q.screen.width<=600?'q-mt-sm':''"
        >
          © {{ new Date().getFullYear() }} Kaylle
        </span>
      </q-toolbar>
    </q-footer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { PhLink, PhList, PhTerminalWindow } from "@phosphor-icons/vue";

const links = [
  {
    label: 'Почта',
    tooltip: 'kaylle@yandex.ru',
    link: 'mailto:kaylle@yandex.ru'
  },
  {
    label: 'Телефон',
    tooltip: '+7 (996) 590-14-45',
    link: 'tel:79965901445'
  },
  {
    label: 'Telegram',
    tooltip: '@kaylle',
    link: 'https://t.me/kaylle'
  }
]

const menuLinks = [
  {
    label: 'Портфолио',
    link: '/'
  },
  {
    label: 'Резюме',
    link: '/resume'
  }
]
</script>

<style lang="scss" scoped>
.q-footer .q-toolbar {
  background: #1B2038 !important;
  padding: 32px;
}
</style>
