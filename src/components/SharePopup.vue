<template>
  <q-dialog>
    <q-card class="q-menu rounded-borders q-py-sm q-px-lg full-width">
      <div class="flex items-center q-pa-md">
        <h5>
          {{ $t('share') }}
        </h5>
        <q-space/>
        <q-btn
          dense
          color="dark-grey"
          text-color="black"
          padding="6px"
          v-close-popup
          icon="eva-close"
        />
      </div>
      <q-list
        separator
        class="rounded-borders overflow-hidden"
      >
        <q-item
          class="bg-primary"
          clickable
          @click="shareSocialMedia('facebook')"
        >
          <q-item-section side>
            <q-icon
              color="dark"
              name="eva-facebook-outline"
              width="24px"
            />
          </q-item-section>
          <q-item-section>
            <q-item-label class="q-ml-md">
              Facebook
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          class="bg-primary"
          clickable
          @click="shareSocialMedia('linkedin')"
        >
          <q-item-section side>
            <q-icon
              color="dark"
              name="eva-linkedin-outline"
              width="24px"
            />
          </q-item-section>
          <q-item-section>
            <q-item-label class="q-ml-md">
              LinkedIn
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          class="bg-primary"
          clickable
          @click="shareSocialMedia('whatsApp')"
        >
          <q-item-section side>
            <q-img
              width="24px"
              src="/svg/whatsapp.svg"
            />
          </q-item-section>
          <q-item-section>
            <q-item-label class="q-ml-md">
              Whatsapp
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
      <q-item>
        <q-item-section>
          <span class="q-mb-sm text-center">
            {{ $t('copyLink') }}
          </span>
          <q-btn
            no-caps
            align="left"
            padding="8px 12px"
            color="secondary"
            text-color="dark"
            @click="copyLink($route.fullPath, $t)"
            icon="eva-copy-outline"
            :label="$route.fullPath"
          />
        </q-item-section>
      </q-item>
      <div class="q-pa-xs"/>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import type { Project } from "components/models";
import { copyLink } from "src/utils/functions";

const props = defineProps<{
  card: Project
}>();

const shareSocialMedia = (type: 'facebook' | 'linkedin' | 'whatsApp'):void => {
  const currentURL = window.location.href;
  const facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${currentURL}`;
  const linkedinLink = `https://www.linkedin.com/shareArticle?mini=true&url=${currentURL}`;
  const whatsAppLink = `https://wa.me/?text=${props.card.title} - ${currentURL}`;

  let link: string;

  switch (type) {
    case 'facebook':
      link = facebookLink;
      break;
    case 'linkedin':
      link = linkedinLink;
      break;
    case 'whatsApp':
      link = whatsAppLink;
      break;
    default:
      link = whatsAppLink;
  }

  window.open(link, '_blank');
}
</script>
