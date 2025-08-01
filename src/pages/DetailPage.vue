<template>
  <q-page>
    <SharePopup
      v-model="sharePopup"
      :card="card"
    />
    <ImagesPreviewPopup
      v-model="showPhoto"
      :card="card"
      :carousel="preview"
    />
    <div class="hero-section">
      <div class="absolute-top-right element-top"/>
      <div class="absolute-top-right element-right"/>
      <div class="flex items-center q-mb-lg no-wrap">
        <h2>
          {{ card.title }}
        </h2>
        <q-space/>
        <q-btn
          class="no-shrink"
          padding="12px"
          color="dark"
          dense
          @click="share"
          icon="eva-share-outline"
        />
      </div>
      <CarouselSection
        @get-slug="getSlug"
        :card="card"
      />
      <div class="q-gutter-sm flex q-pt-lg">
        <q-btn
          v-if="card.linkToSite"
          :href="card.linkToSite"
          target="_blank"
          :label="$t('website')"
          no-caps
          no-wrap
          color="dark"
          class="q-mt-md"
        />
        <q-btn
          v-if="card.linkToGit"
          :href="card.linkToGit"
          target="_blank"
          label="GitHub"
          no-caps
          no-wrap
          color="dark"
          class="q-mt-md"
        />
        <q-btn
          v-if="card.linkToFigma"
          :href="card.linkToFigma"
          target="_blank"
          label="Figma"
          no-caps
          no-wrap
          color="dark"
          class="q-mt-md"
        />
      </div>
      <div class="row q-col-gutter-md">
        <div class="col-12 col-md-8">
          <p class="q-mt-lg">
            {{ card.description }}
          </p>
          <div class="q-gutter-sm flex">
            <q-chip
              v-for="badge in card.badges"
              :key="badge"
              rounded
              color="primary"
              :label="badge"
            />
          </div>
        </div>
      </div>
      <div class="flex q-mt-md">
        <q-btn
          :disable="isBtnDisabled('prev')"
          color="primary"
          no-caps
          @click="getSlug('prev')"
          :label="$t('previous')"
          icon="eva-arrow-left-outline"
        />
        <q-space/>
        <q-btn
          :disable="isBtnDisabled('next')"
          color="primary"
          no-caps
          @click="getSlug('next')"
          :label="$t('next')"
          icon-right="eva-arrow-right-outline"
        />
      </div>
    </div>
    <ContactSection/>
  </q-page>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useMeta, useQuasar } from "quasar";
import SharePopup from "components/SharePopup.vue";
import ImagesPreviewPopup from "components/ImagesPreviewPopup.vue";
import ContactSection from "components/ContactSection.vue";
import CarouselSection from "components/CarouselSection.vue";
import { useI18n } from "vue-i18n";
import type { Project } from 'components/models';
import { checkDisabled } from 'src/utils/functions';

const { t, messages, locale } = useI18n();
const $q = useQuasar();
const route = useRoute();
const router = useRouter();
const sharePopup = ref<boolean>(false);
const showPhoto = ref<boolean>(false);
const preview = ref<number>(1);

const projects = computed<Project[]>(() =>
  (messages.value[locale.value]?.projectsData ?? []) as Project[]
);

const card = computed<Project>(() =>
  projects.value.find(e => e.slug === route.params.id) ?? defaultCard as Project
);

const defaultCard = {
  images: [],
  id: 0,
  slug: '',
  description: '',
  title: '',
  image: '',
  link: [],
  badges: []
};

const isBtnDisabled = (type: 'prev' | 'next'): boolean => {
  return checkDisabled(type, projects.value, card.value.id);
};

const getSlug = async (type: 'prev' | 'next'): Promise<void> => {
  const searchId = type === 'prev' ? -1 : 1;
  const item = projects.value.find(e=>e.id === card.value.id + searchId);
  if (item)
    await router.push(`/project/${item.slug}`);
};

const share = async () => {
  const shareData = {
    url: window.location.href,
    text: card.value.description,
    title: card.value.title
  };
  try {
    if ($q.screen.width < 500)
      await navigator.share(shareData);
    else
      sharePopup.value = true;
  } catch (e) {
    console.log(e);
  }
};

useMeta(() => {
  return  {
    title: `${card.value?.title} | ${t('titleMeta')}`,
    meta: {
      description: {
        name: 'description',
        content: card.value?.description
      }
    }
  }
})
</script>
