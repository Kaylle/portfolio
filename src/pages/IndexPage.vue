<template>
  <q-page>
    <div class="absolute-top-left element"/>
    <div class="container q-py-xl relative-position">
      <h1 class="text-h3">
        Добро пожаловать!
      </h1>
      <p class="q-py-lg">
        Здесь я представляю свои работы, которые выполняла в течение своего пути как фронт-енд разработчик.
        Моё портфолио включает в себя разнообразные проекты, которые создавала для клиентов и личных проектов.
        Для меня очень важно, чтобы каждый проект, над которым я работаю, был уникальным и отвечал потребностям клиента.
        Надеюсь, что вы оцените мои работы и найдёте здесь что-то интересное для себя!
      </p>
      <div class="flex q-gutter-md q-mb-lg">
        <q-chip
          v-for="n in tags"
          :key="n"
          :label="n.label"
          no-caps
          unelevated
          color="white"
          text-color="primary"
          class="cursor-pointer"
        />
      </div>
      <q-btn
        label="Ссылка на страницу 404 :)"
        no-caps
        color="white"
        text-color="black"
        to="/404"
      />
    </div>
    <div class="container">
      <div class="flex items-center q-py-lg no-wrap">
        <q-icon
          v-if="$q.screen.width>400"
          name="eva-image-outline"
          size="24px"
          class="q-mr-sm"
        />
        <h5>
          Портфолио
        </h5>
        <q-space/>
        <q-select
          hide-dropdown-icon
          outlined
          dense
          v-model="sort"
          :options="options"
          emit-value
          map-options
        >
          <template v-slot:prepend>
            <q-icon
              name="eva-funnel-outline"
              size="18px"
            />
          </template>
        </q-select>
      </div>
    </div>
    <div class="row cards-wrapper">
      <div
        class="col-lg-3 col-md-4 col-sm-6 col-12"
        v-for="card in projects"
        :key="card"
      >
        <ProjectPreviewCard
          :card="card"
        />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import ProjectPreviewCard from "components/ProjectPreviewCard.vue";
import { data } from "boot/api"
import { computed, ref } from "vue";
import { useMeta } from "quasar";

const tags = [
  {
    label: '#frontend'
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

const options = [
  {
    label: 'По умолчанию',
    value: 0
  },
  {
    label: 'По названию',
    value: 1
  }
]

const sort = ref(0)

const sortByTitle = (a,b) => {
  if(a.title[0] > b.title[0]) return 1;
  else if(a.title[0] < b.title[0]) return -1;
  return 0;
}

const sortByID = (a,b) => {
  if(a.id > b.id) return 1;
  else if(a.id < b.id) return -1;
  return 0;
}

const projects = computed(() => {
  if (sort.value === 1)
    return data.sort(sortByTitle)
  else
    return data.sort(sortByID)
})

const metaData = {
  title: 'Портфолио фронт-енд разработчика - Екатерина Куркина',
  meta: {
    description: {
      name: 'description',
      content: 'Здесь я представляю свои работы, которые выполняла в течение своего пути как фронт-енд разработчик. Моё портфолио включает в себя разнообразные проекты, которые создавала для клиентов и личных проектов. Для меня очень важно, чтобы каждый проект, над которым я работаю, был уникальным и отвечал потребностям клиента. Надеюсь, что вы оцените мои работы и найдёте здесь что-то интересное для себя!'
    }
  }
}

useMeta(metaData)
</script>

<style lang="scss" scoped>
@import "src/css/quasar.variables";

.element {
  left: 50px;
  width: 800px;
  height: 800px;
  background-image: url('/images/1.png');
  background-size: contain;
  background-repeat: no-repeat;
}

.cards-wrapper {
  border-top: 2px solid $black;
}
</style>
