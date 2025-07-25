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
          :key="card.id"
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

<script setup lang="ts">
import { computed, ref } from "vue";
import { useMeta } from "quasar";
import ContactSection from "components/ContactSection.vue";
import HeroSection from "components/HeroSection.vue";
import ProjectPreviewCard from "components/ProjectPreviewCard.vue";
import { useI18n } from "vue-i18n";
import type { Options, Project } from 'components/models';

const sort = ref<number>(0);
const { t, messages, locale } = useI18n();

const options: Options[] = [
  {
    label: t('byDefault'),
    value: 0
  },
  {
    label: t('byName'),
    value: 1
  }
];

const sortByTitle = (a: Project, b: Project) => {
  return a.title.localeCompare(b.title);
};

const sortByID = (a: Project, b: Project) => {
  if(a.id > b.id) return 1;
  else if(a.id < b.id) return -1;
  return 0;
};

const projects = computed<Project[]>(() => {
  const data = [...(messages.value[locale.value]?.projectsData ?? []) as Project[]];
  return sort.value === 1 ? data.sort(sortByTitle) : data.sort(sortByID);
});

const metaData = {
  title: `${t('portfolio')} | ${t('titleMeta')}`,
  meta: {
    description: {
      name: 'description',
      content: t('descriptionMeta')
    }
  }
};

useMeta(metaData);
</script>
