<template>
  <div class="main-container">
    <q-layout
      view="hHh lpr fff"
      container
    >
      <q-header
        v-scroll="onScroll"
        :class="isOnTop?'header-white':''"
      >
        <q-toolbar>
          <router-link
            to="/"
            class="flex items-center no-wrap"
          >
            <q-avatar size="60px">
              <q-img src="/images/logo.png" />
            </q-avatar>
            <div class="column q-ml-md">
              <h3>
                Kate Kurkina
              </h3>
              <div>
                Front-end developer
              </div>
            </div>
          </router-link>
          <q-space/>
          <q-toggle
            text-color="white"
            color="dark"
            :model-value="lightTheme"
            @click="switchTheme"
            checked-icon="eva-sun-outline"
            size="lg"
            unchecked-icon="eva-moon-outline"
          />
          <q-tabs
            v-if="$q.screen.width>1024"
            indicator-color="transparent"
            no-caps
          >
            <q-route-tab
              v-for="item in menuLinks"
              :key="item"
              :to="item.link"
              :label="item.label"
              exact
            />
          </q-tabs>
          <q-btn
            v-else
            padding="14px"
            class="no-shrink border"
            color="white"
            text-color="black"
            icon="eva-menu"
          >
            <q-menu :offset="[0,8]">
              <q-list separator style="min-width: 280px">
                <q-item>
                  <q-item-section>
                    <b>Menu</b>
                  </q-item-section>
                </q-item>
                <q-item
                  v-for="item in menuLinks"
                  :key="item"
                  clickable
                  :to="item.link"
                  active-class="text-dark bg-primary"
                  exact
                >
                  <q-item-section>
                    {{ item.label }}
                  </q-item-section>
                </q-item>
                <q-item/>
              </q-list>
            </q-menu>
          </q-btn>
        </q-toolbar>
      </q-header>
      <q-footer>
        <q-toolbar>
          <router-link
            to="/"
            class="items-center footer-heading"
          >
            <q-avatar size="60px">
              <q-img src="/images/logo.png" />
            </q-avatar>
            <div class="column footer-heading__text">
              <h3>
                Kate Kurkina
              </h3>
              <div>
                Front-end developer
              </div>
            </div>
          </router-link>
          <q-space/>
          <span class="footer-copyright">
            © {{ new Date().getFullYear() }} Kaylle
          </span>
        </q-toolbar>
      </q-footer>
      <q-page-container class="overflow-hidden">
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router"
import { scroll, useQuasar } from "quasar"

const $q = useQuasar()
const lightTheme = ref(true)
const isOnTop = ref(false)
const route = useRoute()
const { setVerticalScrollPosition } = scroll

const onScroll = (position) => {
  isOnTop.value =  position > 50
}

const scrollToTop = () => {
  const element = document.getElementsByClassName('scroll')
  setVerticalScrollPosition(element[0], 0, 300)
}

const switchTheme = () => {
  lightTheme.value = !lightTheme.value
  localStorage.setItem("theme", lightTheme.value ? '0' : '1')
  $q.dark.toggle()
}

watch(route,() => {
  scrollToTop()
})

const menuLinks = [
  {
    label: 'Home',
    link: '/'
  },
  {
    label: 'Portfolio',
    link: '/portfolio'
  },
  {
    label: 'Resume',
    link: '/resume'
  }
]

onMounted(() => {
  lightTheme.value = localStorage.getItem("theme") === '0'
  $q.dark.set(lightTheme.value)
})
</script>

<style lang="scss" scoped>
@import "src/css/quasar.variables";

.main-container {
  background-position: center center;
  background-size: cover;
  padding: 48px;
  width: 100vw;
  height: 100vh;
}

.header-white {
  backdrop-filter: blur(10px);
}

.q-layout-container {
  max-width: 1300px !important;
  margin: auto !important;
  border-radius: 30px !important;
}

.q-header {
  transition: all 0.5s ease !important;
  background: transparent;
  & .q-toolbar {
    background: transparent;
  }
}

.q-toolbar {
  padding: 32px;
}

.footer-heading {
  display: flex;
  flex-direction: row;
  & .q-avatar {
    margin-right: 16px;
  }
}

@media (max-width: 600px) {
  .main-container {
    padding: 0;
  }
  .q-layout-container {
    border-radius: 0 !important;
  }
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
    }
  }
  .footer-copyright {
    margin-top: 8px;
  }
}
</style>
