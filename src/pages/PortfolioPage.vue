<template>
  <q-page>
    <HeroSection :title="$t('portfolio')"/>
    <div class="container">
      <div class="flex items-center q-py-lg no-wrap text-black">
        <h3>
          {{ $t('myProjects') }}
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
import { computed, ref } from "vue"
import { useMeta } from "quasar"
import ContactSection from "components/ContactSection.vue"
import HeroSection from "components/HeroSection.vue"
import ProjectPreviewCard from "components/ProjectPreviewCard.vue"
import { useI18n } from "vue-i18n"

const sort = ref(0)
const { t, messages, locale } = useI18n()

const options = [
  {
    label: t('byDefault'),
    value: 0
  },
  {
    label: t('byName'),
    value: 1
  }
]

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
  const data = [...messages.value[locale.value].projectsData]
  if (sort.value === 1)
    return data.sort(sortByTitle)
  else
    return data.sort(sortByID)
})

const metaData = {
  title: `${t('portfolio')} | ${t('titleMeta')}`,
  meta: {
    description: {
      name: 'description',
      content: t('descriptionMeta')
    }
  }
}

useMeta(metaData)
</script>
