<template>
  <q-card class="full-height">
    <q-card-section class="column full-height text-black">
      <q-img
        position="left"
        @click="$router.push('/project/' + card.slug)"
        :ratio="16/9"
        class="hover"
        :src="card.image"
      >
        <div class="full-height full-width flex items-end hover-inner">
          <div class="q-gutter-sm flex reverse-wrap">
            <q-badge
              color="dark"
              v-for="badge in card.badges"
              :key="badge"
              rounded
              :label="badge"
            />
          </div>
        </div>
      </q-img>
      <h5 class="q-my-md">
        {{ card.title }}
      </h5>
      <p class="text-description">
        {{ card.description.slice(0,100) }}
        <span v-if="card.description.length > 100">
          ...
        </span>
      </p>
      <q-space/>
      <div class="column q-gutter-y-sm">
        <q-btn
          v-for="pos in card.link"
          :key="pos"
          flat
          class="self-start border"
          padding="0 4px"
          no-caps
          icon="eva-person-outline"
          :label="pos"
        />
      </div>
      <div class="absolute-bottom-right btn-before">
        <div class="t"/>
        <div class="r"/>
        <q-btn
          style="width: 170px"
          padding="14px 32px"
          color="dark"
          no-caps
          :to="'/project/' + card.slug"
          icon-right="eva-chevron-right-outline"
          :label="$t('moreInfo')"
        />
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
defineProps([
  'card'
])
</script>

<style lang="scss" scoped>
@import 'src/css/quasar.variables';

.body--light {
  .btn-before:before {
    box-shadow: inset 0 0 25px #44455210;
    background-color: $accent;
  }
  .t:before,
  .r:before {
    box-shadow: 30px 30px 0 0 #f4eff5;
  }
}

.body--dark {
  .btn-before:before {
    box-shadow: none;
    background-color: #1F2027;
  }
  .t:before,
  .r:before {
    box-shadow: 30px 30px 0 0 #1F2027;
  }
}

.text-description {
  opacity: .6;
  min-height: 80px;
}

.btn-before {
  &:before {
    content: '';
    position: absolute;
    width: 186px;
    height: 68px;
    top: -15px;
    left: -15px;
    border-radius: 24px 0 0 0;
  }
}

.t,
.r {
  width: 40px;
  height: 40px;
  overflow: hidden;
  position: absolute;
  &:before {
    content: "";
    display: block;
    width: 200%;
    height: 200%;
    position: absolute;
    border-radius: 50%;
    bottom: 0;
    right: 0;
  }
}

.t {
  top: 12px;
  right: 184px;
}

.r {
  top: -55px;
  left: 131px;
}
</style>
