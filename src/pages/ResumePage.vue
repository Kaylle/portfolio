<template>
  <q-img
    src="/images/hero-image.png"
    class="resume-hero"
    height="300px"
  >
    <div class="absolute-full flex items-center bg-transparent">
      <div class="resume-hero__wrapper">
        <div class="column items-start q-gutter-y-md">
          <h4 class="text-bold">
            {{ resume.fio }}
          </h4>
          <h5>
            {{ resume.position }}
          </h5>
        </div>
        <div class="column q-gutter-y-sm">
          <span>
            {{ resume.city }}
          </span>
          <span>
            Телефон: {{ resume.phone }}
          </span>
          <span>
            Эл. почта: {{ resume.email }}
          </span>
        </div>
      </div>
    </div>
  </q-img>
  <q-page class="q-mt-xl">
    <div class="container">
      <div class="row q-col-gutter-xl">
        <div class="col-12 col-md-3">
          <h5>Биография</h5>
        </div>
        <div class="col-12 col-md-9">
          <p>
            Женщина, {{ getAge() }}, родилась {{ resume.birthday }}
          </p>
          <p>
            {{ resume.about }}
          </p>
          <q-btn
            label="Ссылка на резюме на hh.ru"
            no-caps
            color="primary"
            target="_blank"
            :href="resume.resumeLink"
          />
        </div>
      </div>
    </div>
    <q-separator class="bg-dark q-my-xl"/>
    <div class="container">
      <div class="row q-col-gutter-xl">
        <div class="col-12 col-md-3">
          <h5>
            Опыт работы - {{totalJobExperience}}
          </h5>
        </div>
        <div class="col-12 col-md-9 column q-gutter-y-lg">
          <div
            class="column"
            v-for="job in resume.experience"
            :key="job"
          >
            <div class="flex items-center">
              <span class="q-mr-md">
                {{ job.period }}
              </span>
              <q-chip
                no-caps
                unelevated
                color="white"
                text-color="primary"
                class="cursor-pointer"
                :label="job.totalPeriod ? job.totalPeriod : currentJobExperience"
              />
            </div>
            <div class="text-h5 q-mt-sm">
              {{ job.company.name }}
            </div>
            <div class="text-grey q-mb-md">
              {{ job.company.city }}, {{ job.company.website }}
            </div>
            <div class="text-bold q-mt-sm">
              {{ job.position }}
            </div>
            <p>
              {{ job.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <q-separator class="bg-dark q-my-xl"/>
    <div class="container">
      <div class="row q-col-gutter-xl">
        <div class="col-12 col-md-3">
          <h5>
            Ключевые навыки
          </h5>
        </div>
        <div class="col-12 col-md-9">
          <div class="flex q-gutter-sm">
            <q-chip
              v-for="n in resume.tags"
              :key="n"
              :label="n"
              no-caps
              unelevated
              color="white"
              text-color="primary"
              class="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
    <q-separator class="bg-dark q-my-xl"/>
    <div class="container">
      <div class="row q-col-gutter-xl">
        <div class="col-12 col-md-3">
          <h5>
            Образование
          </h5>
        </div>
        <div class="col-12 col-md-9 column">
          <span>
            {{ resume.education.type }}
          </span>
          <span>
            {{ resume.education.organization }}
          </span>
          <span>
            {{ resume.education.qualification }}
          </span>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { resume } from "boot/api";
import { useMeta } from "quasar";

const currentJobExperience = ref('')
const totalJobExperience = ref('')

const getExperience = () => {
  const currentDate = new Date()
  const currentJobDate = new Date('05.12.2022')
  let months = (currentDate.getFullYear() - currentJobDate.getFullYear()) * 12
  months -= currentJobDate.getMonth()
  months += currentDate.getMonth()
  const currentJobYears = Math.floor(months / 12)
  const totalJobYears = Math.floor((months + 22) / 12)
  const currentJobMonths = months - currentJobYears * 12
  const totalJobMonths = (months + 22) - totalJobYears * 12
  currentJobExperience.value = `${currentJobYears} ${getYearName(currentJobYears)} ${currentJobMonths} месяц${getMonthName(currentJobMonths)}`
  totalJobExperience.value = `${totalJobYears} ${getYearName(totalJobYears)} ${totalJobMonths<=0?'':totalJobMonths+'месяц'+getMonthName(totalJobMonths)}`
}

const getAge = () => {
  let year = Number(new Date().getFullYear())-2000
  return `${year} ${getYearName(year)}`
}

const getYearName = (number) => {
  let localYear = number.toString()
  let year = localYear.substring(localYear.length - 1)
  if (Number(year) === 1) return 'год'
  if (Number(year) > 1 && year < 5) return 'года'
  if (Number(year) > 4) return 'лет'
}

const getMonthName = (month) => {
  if (month === 1) return ''
  if (month > 1 && month < 5) return 'а'
  if (month > 4) return 'ев'
}

const metaData = {
  title: 'Портфолио фронт-енд разработчика - Екатерина Куркина | Резюме',
  meta: {
    description: {
      name: 'description',
      content: 'Подробная информация обо мне и о моем рабочем опыте'
    }
  }
}

useMeta(metaData)

onMounted(()=>{
  getExperience()
})
</script>

<style lang="scss" scoped>
@import "src/css/quasar.variables";

.resume-hero {
  height: 200px;
  &__wrapper {
    display: flex;
    flex-direction: row;
    color: $black;
    width: 100%;
    justify-content: space-between;
    & > div:last-child {
      align-items: flex-end;
    }
  }
}

.container:last-child {
  padding-bottom: 48px;
}

@media (max-width: 800px) {
  .resume-hero {
    &__wrapper {
      flex-direction: column;
      justify-content: flex-start;
      gap: 16px;
      & > div:last-child {
        align-items: flex-start;
      }
    }
  }
}

@media (max-width: 700px) {
  .resume-hero {
    height: 300px;
  }
}
</style>
