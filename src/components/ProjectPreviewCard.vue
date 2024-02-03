<template>
  <q-card dark class="full-height">
    <q-card-section class="column full-height">
      <q-img
        :ratio="16/9"
        class="rounded-borders hover"
        :src="card.image"
      >
        <div class="full-height full-width flex items-end hover-inner">
          <div class="q-gutter-sm flex reverse-wrap">
            <q-badge v-for="badge in card.badges" :key="badge" rounded>
              {{badge}}
            </q-badge>
          </div>
        </div>
      </q-img>
      <h6 class="q-my-md">
        {{ card.title }}
      </h6>
      <p class="text-grey text-description">
        {{ card.description.slice(0,100) }}<span v-if="card.description.length > 100">...</span>
      </p>
      <q-space/>
      <div class="flex items-center">
        <div class="column q-gutter-y-sm">
          <q-btn
            v-for="pos in card.link"
            :key="pos"
            flat
            color="white"
            class="self-start"
            padding="0"
            no-caps
          >
            <PhUserCircle :size="19" color="white" weight="regular" />
            <span class="q-ml-sm">{{ pos }}</span>
          </q-btn>
        </div>
        <q-space/>
        <q-btn
          class="q-my-sm"
          color="primary"
          no-caps
          :to="'/project/'+card.slug"
        >
          <PhHandPointing :size="18" color="white" weight="regular" />
          <span class="q-ml-sm">Подробнее</span>
        </q-btn>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { PhHandPointing, PhUserCircle } from "@phosphor-icons/vue";

defineProps(['card'])
</script>

<style lang="scss" scoped>
.text-description {
  min-height: 80px;
}
</style>
