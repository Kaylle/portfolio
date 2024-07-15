<template>
  <q-layout view="lHh Lpr lff">
    <q-toolbar class="q-pa-md">
      <router-link to="/">
        <q-avatar
          size="60px"
          class="q-mr-md"
        >
          <q-img
            src="/svg/logo.svg"
            width="30px"
          />
        </q-avatar>
      </router-link>
      <template v-if="$q.screen.width>1024">
        <q-tabs
          indicator-color="transparent"
          active-color="primary"
          no-caps
          class="first-tabs"
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
        <div class="column header-heading">
          <h5>
            Екатерина Куркина
          </h5>
          <div class="text-caption text-grey">
            Портфолио фронт-енд разработчика
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
          <q-item-section>
            <span>
              {{link.label}}
            </span>
            <q-tooltip class="bg-primary">
              {{ link.tooltip }}
            </q-tooltip>
          </q-item-section>
        </q-item>
      </q-tabs>
      <q-btn
        v-else
        round
        padding="10px"
        color="primary"
        icon="eva-menu"
      >
        <q-menu>
          <q-item>
            <q-item-section class="text-caption">
              Меню
            </q-item-section>
          </q-item>
          <q-list>
            <q-item
              v-for="item in menuLinks"
              :key="item"
              clickable
              :to="item.link"
            >
              <q-item-section>
                {{ item.label }}
              </q-item-section>
              <q-item-section
                side
                class="bg-accent"
              >
                <q-icon
                  name="eva-link-2"
                  color="white"
                  size="16px"
                />
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
              <span>
                {{ link.label }}
              </span>
            </q-btn>
          </div>
        </q-menu>
      </q-btn>
    </q-toolbar>
    <q-footer>
      <q-toolbar>
        <router-link
          to="/"
          class="items-center footer-heading"
        >
          <q-avatar size="60px">
            <q-img
              src="/svg/logo.svg"
              width="30px"
            />
          </q-avatar>
          <div class="column footer-heading__text">
            <h5>
              Екатерина Куркина
            </h5>
            <div class="text-caption text-grey">
              Портфолио фронт-енд разработчика
            </div>
          </div>
        </router-link>
        <q-space/>
        <span class="footer-copyright">
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
@import "src/css/quasar.variables";

.q-footer {
  background: $newWhite !important;
  & .q-toolbar {
    background: #3636361F !important;
    padding: 32px;
    color: $black;
  }
}

.header-heading {
  align-items: center;
}

.footer-heading {
  display: flex;
  flex-direction: row;
  & .q-avatar {
    margin-right: 16px;
  }
}

@media (max-width: 1024px) {
  .header-heading {
    align-items: flex-start;
  }
}

@media (max-width: 600px) {
  .q-footer .q-toolbar {
    flex-direction: column;
  }
  .footer-heading {
    flex-direction: column;
    justify-content: center;
    & .q-avatar {
      margin-right: 0;
      margin-bottom: 8px;
    }
    &__text {
      align-items: center;
      gap: 8px;
    }
  }
  .footer-copyright {
    margin-top: 8px;
  }
}
</style>
