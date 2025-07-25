<template>
  <div class="browser-wrapper">
    <ImagesPreviewPopup
      v-model="showPhoto"
      :card="card"
      :carousel="preview"
    />
    <div class="full-width flex items-center q-mb-xs no-wrap overflow-hidden">
      <div
        class="flex items-center no-wrap gap q-pl-md"
        v-if="$q.screen.width>1024"
      >
        <div
          v-for="n in 3"
          :key="n"
          class="bg-secondary dot"
        />
        <q-icon
          :color="isBtnDisabled('prev')?'grey':'dark'"
          @click="getSlug('prev')"
          size="16px"
          name="eva-arrow-back-outline"
          class="cursor-pointer"
        />
        <q-icon
          :color="isBtnDisabled('next')?'grey':'dark'"
          @click="getSlug('next')"
          size="16px"
          name="eva-arrow-forward-outline"
          class="cursor-pointer"
        />
      </div>
      <q-space/>
      <div class="flex items-center q-pa-sm no-wrap address-bar">
        <a
          style="height: 16px;line-height: 16px"
          target="_blank"
          :href="card.linkToGit || card.linkToSite || 'https://test.com'"
        >
          <q-icon
            name="eva-globe-outline"
          />
        </a>
        <span class="text-caption">
          {{ card.linkToGit || card.linkToSite || 'https://test.com' }}
        </span>
        <q-icon
          @click="copyLink( card.linkToGit || card.linkToSite || 'https://test.com', $t)"
          name="eva-link-2-outline"
          class="cursor-pointer"
        />
      </div>
      <q-space/>
      <div
        v-if="$q.screen.width>1024"
        class="flex items-center no-wrap gap q-pr-md"
      >
        <q-icon
          size="16px"
          name="eva-sync-outline"
        />
        <q-icon
          size="16px"
          name="eva-download-outline"
        />
        <q-icon
          size="16px"
          name="eva-plus-outline"
        />
      </div>
    </div>
    <q-carousel
      swipeable
      transition-prev="slide-right"
      transition-next="slide-left"
      animated
      v-model="slide"
      arrows
      navigation
      navigation-icon="eva-radio-button-off"
      navigation-active-icon="eva-radio-button-on"
      next-icon="eva-arrow-right-outline"
      prev-icon="eva-arrow-left-outline"
      control-color="primary"
      control-type="regular"
      infinite
    >
      <q-carousel-slide
        v-for="(n,i) in card.images"
        :key="i"
        :name="i"
        :img-src="n"
        @click="openImage(i)"
      />
    </q-carousel>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useQuasar } from "quasar";
import ImagesPreviewPopup from "components/ImagesPreviewPopup.vue";
import { useI18n } from "vue-i18n";
import type { Project } from "components/models";
import { checkDisabled, copyLink } from 'src/utils/functions';
import { useRoute } from 'vue-router';

const { messages, locale } = useI18n();
const $q = useQuasar();
const route = useRoute();
const slide = ref<number>(0);
const showPhoto = ref<boolean>(false);
const preview = ref<number>(1);

const props = defineProps<{
  card: Project
}>();

const emit = defineEmits<{
  (e: 'getSlug', type: 'prev' | 'next'): void;
}>();

const projects = computed<Project[]>(() =>
  (messages.value[locale.value]?.projectsData ?? []) as Project[]
);

const isBtnDisabled = (type: 'prev' | 'next'): boolean => {
  return checkDisabled(type, projects.value, props.card.id);
};

const getSlug = (type: 'prev' | 'next'): void => {
  emit('getSlug', type);
};

const openImage = (index: number):void => {
  preview.value = index;
  showPhoto.value = true;
};

watch(() => route.params.id, () => {
  slide.value = 0;
});
</script>

<style lang="scss">
@import "src/css/quasar.variables";

.body--light {
  .browser-wrapper {
    background: $accent;
  }
  .address-bar {
    background: $primary;
  }
}

.body--dark {
  .browser-wrapper {
    background: $secondary-dark;
  }
  .address-bar {
    background: $primary-dark;
  }
}

.q-carousel {
  height: 508px;
}

.browser-wrapper {
  padding: 8px;
  border-radius: 30px;
}

.gap {
  gap: 8px;
}

.dot {
  padding: 6px;
  border-radius: 100px;
}

.address-bar {
  border-radius: 10px;
  gap: 48px;
}

@media (max-width: 1024px) {
  .q-carousel {
    height: 323px;
  }
}

@media (max-width: 765px) {
  .q-carousel {
    height: 48vw;
  }
}
</style>
