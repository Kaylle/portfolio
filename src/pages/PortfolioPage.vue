<template>
  <q-page>
    <HeroSection title="Portfolio"/>
    <div class="container">
      <div class="flex items-center q-py-lg no-wrap text-black">
        <h3>
          My projects
        </h3>
        <q-space/>
        <q-select
          hide-dropdown-icon
          outlined
          dense
          v-model="sort"
          :options="options"
          emit-value
          map-options
          color="dark"
        >
          <template v-slot:prepend>
            <q-icon
              name="eva-funnel-outline"
              size="18px"
            />
          </template>
        </q-select>
      </div>
      <div class="row q-col-gutter-lg">
        <div
          class="col-md-4 col-sm-6 col-12"
          v-for="card in projects"
          :key="card"
        >
          <ProjectPreviewCard
            :card="card"
          />
        </div>
      </div>
    </div>
    <ContactSection/>
  </q-page>
</template>

<script setup>
import { projectsData } from "boot/api"
import { computed, ref } from "vue"
import { useMeta } from "quasar"
import ContactSection from "components/ContactSection.vue"
import HeroSection from "components/HeroSection.vue"
import ProjectPreviewCard from "components/ProjectPreviewCard.vue"

const options = [
  {
    label: 'By default',
    value: 0
  },
  {
    label: 'By name',
    value: 1
  }
]

const sort = ref(0)

const sortByTitle = (a,b) => {
  if(a.title[0] > b.title[0]) return 1
  else if(a.title[0] < b.title[0]) return -1
  return 0
}

const sortByID = (a,b) => {
  if(a.id > b.id) return 1
  else if(a.id < b.id) return -1
  return 0
}

const projects = computed(() => {
  if (sort.value === 1)
    return projectsData.sort(sortByTitle)
  else
    return projectsData.sort(sortByID)
})

const metaData = {
  title: 'Portfolio | Kate Kurkina | Front-end developer`s portfolio',
  meta: {
    description: {
      name: 'description',
      content: 'Here I present the projects I\'ve worked on throughout my journey as a front-end developer. My portfolio includes a variety of projects I\'ve built for both clients and personal use. I believe that every project I work on should be unique and tailored to the client\'s needs. I hope you\'ll enjoy browsing through my work and find something that inspires or interests you!'
    }
  }
}

useMeta(metaData)
</script>
