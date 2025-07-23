<template>
  <q-page>
    <HeroSection title="Welcome!">
      <div class="tag-section">
        <q-chip
          v-for="n in tags"
          :key="n"
          :label="n.label"
          no-caps
          unelevated
          color="primary"
          text-color="black"
        />
      </div>
      <q-btn
        class="self-start q-mb-lg"
        label="404 Page"
        no-caps
        color="dark"
        text-color="white"
        to="/404"
      />
    </HeroSection>
    <div class="container">
      <div class="flex items-center q-pb-lg no-wrap text-black">
        <h2>
          Portfolio
        </h2>
        <q-space/>
        <q-btn
          no-caps
          color="secondary"
          text-color="dark"
          label="See more"
          icon-right="eva-chevron-right-outline"
          to="/portfolio"
        />
      </div>
      <div class="row q-col-gutter-md">
        <div
          class="col-md-4 col-sm-6 col-12"
          v-for="card in projects"
          :key="card"
        >
          <ProjectPreviewCard
            :card="card"
          />
        </div>
        <div class="col-12 flex justify-center">
          <q-btn
            class="q-mt-xl"
            no-caps
            color="secondary"
            text-color="dark"
            label="See more of my projects"
            icon-right="eva-chevron-right-outline"
            to="/portfolio"
          />
        </div>
      </div>
    </div>
    <ContactSection/>
  </q-page>
</template>

<script setup>
import { projectsData } from "boot/api"
import { computed } from "vue"
import { useMeta } from "quasar"
import ContactSection from "components/ContactSection.vue"
import HeroSection from "components/HeroSection.vue"
import ProjectPreviewCard from "components/ProjectPreviewCard.vue"

const tags = [
  {
    label: '#front-end'
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

const projects = computed(() => {
  return projectsData.slice(0,3)
})

const metaData = {
  title: 'Home | Kate Kurkina | Front-end developer`s portfolio',
  meta: {
    description: {
      name: 'description',
      content: 'Here I present the projects I\'ve worked on throughout my journey as a front-end developer. My portfolio includes a variety of projects I\'ve built for both clients and personal use. I believe that every project I work on should be unique and tailored to the client\'s needs. I hope you\'ll enjoy browsing through my work and find something that inspires or interests you!'
    }
  }
}

useMeta(metaData)
</script>
