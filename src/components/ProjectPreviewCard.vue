<template>
  <q-card class="full-height">
    <q-card-section class="column full-height">
      <q-img
        position="left"
        @click="$router.push('/project/'+card.slug)"
        :ratio="16/9"
        class="rounded-borders hover"
        :src="card.image"
      >
        <div class="full-height full-width flex items-end hover-inner">
          <div class="q-gutter-sm flex reverse-wrap">
            <q-badge
              v-for="badge in card.badges"
              :key="badge"
              rounded
              :label="badge"
            />
          </div>
        </div>
      </q-img>
      <h6 class="q-my-md">
        {{ card.title }}
      </h6>
      <p class="text-grey text-description">
        {{ card.description.slice(0,100) }}
        <span v-if="card.description.length > 100">
          ...
        </span>
      </p>
      <q-space/>
      <div class="flex items-center">
        <div class="column q-gutter-y-sm">
          <q-btn
            v-for="pos in card.link"
            :key="pos"
            flat
            class="self-start"
            padding="0 4px"
            no-caps
            icon="eva-person-outline"
            :label="pos"
          />
        </div>
        <q-space/>
        <q-btn
          class="q-my-sm"
          color="primary"
          no-caps
          :to="'/project/'+card.slug"
          icon-right="eva-chevron-right-outline"
          label="Подробнее"
        />
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
defineProps(['card'])
</script>

<style lang="scss" scoped>
.text-description {
  min-height: 80px;
}
</style>
