<template>
  <q-page>
    <HeroSection :title="$t('welcome')">
      <div class="tag-section">
        <q-chip
          v-for="n in tags"
          :key="n.label"
          :label="n.label"
          no-caps
          unelevated
          color="primary"
          text-color="black"
        />
      </div>
      <q-btn
        class="self-start q-mb-lg"
        :label="$t('page404')"
        no-caps
        color="dark"
        text-color="white"
        to="/404"
      />
    </HeroSection>
    <div class="container">
      <div class="flex items-center q-pb-lg no-wrap text-black">
        <h2>
          {{ $t('portfolio') }}
        </h2>
        <q-space/>
        <q-btn
          no-caps
          color="secondary"
          text-color="dark"
          :label="$t('seeMore')"
          icon-right="eva-chevron-right-outline"
          to="/portfolio"
        />
      </div>
      <div class="row q-col-gutter-md">
        <div
          class="col-md-4 col-sm-6 col-12"
          v-for="card in projects"
          :key="card.id"
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
            :label="$t('seeMoreProject')"
            icon-right="eva-chevron-right-outline"
            to="/portfolio"
          />
        </div>
      </div>
    </div>
    <ContactSection/>
  </q-page>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useMeta } from "quasar";
import ContactSection from "components/ContactSection.vue"
import HeroSection from "components/HeroSection.vue"
import ProjectPreviewCard from "components/ProjectPreviewCard.vue"
import { useI18n } from "vue-i18n";
import type { Tag, Project } from 'components/models';

const { t, messages, locale} = useI18n();

const tags: Tag[] = [
  { label: '#front-end' },
  { label: '#design' },
  { label: '#vue' },
  { label: '#js' },
  { label: '#quasar' },
  { label: '#figma' }
];

const projects = computed<Project[]>(() => {
  const data = [...(messages.value[locale.value]?.projectsData ?? []) as Project[]];
  return data.slice(0,3);
});

const metaData = {
  title: `${t('home')} | ${t('titleMeta')}`,
  meta: {
    description: {
      name: 'description',
      content: t('descriptionMeta')
    }
  }
};

useMeta(metaData);
</script>
