<template>
  <q-parallax src="/images/image 18.png">
    <template v-slot:media>
      <video autoplay loop muted>
        <source type="video/mp4" src="/images/1.mp4">
      </video>
    </template>
    <div class="parallax-inner">
      <div>
        <h1 class="text-h3">Добро пожаловать!</h1>
        <p class="q-pa-lg">
          Здесь я представляю свои работы, которые выполняла в течение своего пути как фронтенд разработчик. Моё портфолио включает в себя разнообразные проекты, которые создавала для клиентов и личных проектов. Для меня очень важно, чтобы каждый проект, над которым я работаю, был уникальным и отвечал потребностям клиента. Надеюсь, что вы оцените мои работы и найдёте здесь что-то интересное для себя!
        </p>
        <div class="flex q-gutter-md justify-center">
          <q-chip
            v-for="n in tags"
            :key="n"
            :label="n.label"
            no-caps
            unelevated
            color="white"
            text-color="primary"
            class="cursor-pointer"
          />
        </div>
      </div>
    </div>
  </q-parallax>
  <q-page class="q-pa-lg bg-dark text-white">
    <div class="flex items-center q-my-lg">
      <PhImages :size="24" class="q-mr-sm"/>
      <h5>Портфолио</h5>
      <q-space/>
      <q-select
        hide-dropdown-icon
        dark
        class="gradient-field"
        standout
        dense
        v-model="sort"
        :options="options"
        emit-value
        map-options
      >
        <template v-slot:prepend>
          <PhFunnel :size="18"/>
        </template>
      </q-select>
    </div>
    <div class="row q-col-gutter-md">
      <div
        class="col-lg-3 col-md-4 col-sm-6 col-12"
        v-for="card in projects"
        :key="card"
      >
        <ProjectPreviewCard :card="card"/>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import ProjectPreviewCard from "components/ProjectPreviewCard.vue";
import { PhFunnel, PhImages } from "@phosphor-icons/vue";
import { data } from "boot/api"
import { computed, ref } from "vue";

const tags = [
  {
    label: '#frontend'
  },
  {
    label: '#design'
  },
  {
    label: '#vue'
  },
  {
    label: '#js'
  },
  {
    label: '#quasar'
  },
  {
    label: '#figma'
  }
]

const options = [
  {
    label: 'По умолчанию',
    value: 0
  },
  {
    label: 'По названию',
    value: 1
  }
]

const sort = ref(0)

const sortByTitle = (a,b) => {
  if(a.title[0] > b.title[0]) return 1;
  else if(a.title[0] < b.title[0]) return -1;
  return 0;
}

const sortByID = (a,b) => {
  if(a.id > b.id) return 1;
  else if(a.id < b.id) return -1;
  return 0;
}

const projects = computed(() => {
  if (sort.value === 1) return data.sort(sortByTitle)
  else return data.sort(sortByID)
})
</script>
