<template>
  <q-page>
    <HeroSection :title="resume.fio">
      <q-btn
        class="self-start q-mb-lg"
        label="Resume file"
        no-caps
        color="dark"
        text-color="white"
        target="_blank"
      />
      <!--file-->
    </HeroSection>
    <div class="container text-black">
      <div class="row q-col-gutter-lg">
        <div class="col-12 col-md-6">
          <h2 class="q-mb-md">
            Profile
          </h2>
          <q-card class="q-pa-md q-mb-lg text-black">
            <q-card-section>
              <q-img
                src="/images/photo.jpg"
                :ratio="16/11"
                class="rounded-borders bg-primary q-mb-lg"
              />
              <p class="text-bold">
                Female, {{ getAge() }}, born {{ resume.birthday }}
              </p>
              <p
                class="q-ma-none"
                v-html="resume.about"
              />
            </q-card-section>
          </q-card>
          <h2 class="q-mb-md">
            Contact
          </h2>
          <q-card class="q-pa-md q-mb-lg text-black">
            <q-card-section>
              <div class="flex items-center q-gutter-md q-mb-md no-wrap">
                <q-icon name="eva-pin-outline"/>
                <div>{{resume.city}}</div>
              </div>
              <a
                class="flex items-center q-gutter-md q-mb-md no-wrap"
                href="tel:79965901445"
                target="_blank"
              >
                <q-icon name="eva-phone-outline"/>
                <div>{{resume.phone}}</div>
              </a>
              <a
                class="flex items-center q-gutter-md q-mb-md no-wrap"
                href="mailto:kaylle@yandex.ru"
                target="_blank"
              >
                <q-icon name="eva-email-outline"/>
                <div>{{resume.email}}</div>
              </a>
              <a
                class="flex items-center q-gutter-md q-mb-md no-wrap"
                :href="resume.linkedin"
                target="_blank"
              >
                <q-icon name="eva-linkedin-outline"/>
                <div>LinkedIn</div>
              </a>
              <a
                class="flex items-center q-gutter-md no-wrap"
                :href="resume.github"
                target="_blank"
              >
                <q-icon name="eva-github-outline"/>
                <div>GitHub</div>
              </a>
            </q-card-section>
          </q-card>
          <h2 class="q-mb-md">
            Skills
          </h2>
          <q-card class="q-pa-md q-mb-lg text-black">
            <q-card-section>
              <div class="flex q-gutter-sm">
                <q-chip
                  v-for="n in resume.tags"
                  :key="n"
                  :label="n"
                  no-caps
                  unelevated
                  color="dark"
                  outline
                  class="cursor-pointer"
                />
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md-6">
          <h2 class="q-mb-md">
            Experience
          </h2>
          <div class="column q-gutter-y-lg">
            <q-card
              v-for="job in resume.experience"
              :key="job"
              class="q-pa-md q-mb-lg text-black"
            >
              <q-card-section>
                <div class="column">
                  <div class="flex items-center">
                    <span class="q-mr-md">
                      {{ job.period }}
                    </span>
                    <q-chip
                      no-caps
                      unelevated
                      color="primary"
                      class="cursor-pointer"
                      :label="job.totalPeriod ? job.totalPeriod : currentJobExperience"
                    />
                  </div>
                  <div class="text-h5 q-mt-sm">
                    {{ job.company.name }}
                  </div>
                  <div class="q-mb-md">
                    {{ job.company.city }}, {{ job.company.website }}
                  </div>
                  <div class="text-bold q-mt-sm q-mb-sm">
                    {{ job.position }}
                  </div>
                  <p
                    class="q-ma-none"
                    v-html="job.description"
                  />
                </div>
              </q-card-section>
            </q-card>
          </div>
          <h2 class="q-mb-md">
            Education
          </h2>
          <q-card class="q-pa-md q-mb-lg text-black">
            <q-card-section>
              <div class="column">
                <b>
                  {{ resume.education.type }}
                </b>
                <span>
                  {{ resume.education.organization }}
                </span>
                <span>
                  {{ resume.education.qualification }}
                </span>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { onMounted, ref } from "vue"
import { useMeta } from "quasar"
import { resume } from "boot/api"
import HeroSection from "components/HeroSection.vue"

const currentJobExperience = ref('')

const getExperience = () => {
  const currentDate = new Date()
  const currentJobDate = new Date('05.12.2022')
  let months = (currentDate.getFullYear() - currentJobDate.getFullYear()) * 12
  months -= currentJobDate.getMonth()
  months += currentDate.getMonth()
  const currentJobYears = Math.floor(months / 12)
  const currentJobMonths = months - currentJobYears * 12
  currentJobExperience.value = `${currentJobYears} year ${currentJobMonths} months`
}

const getAge = () => {
  let year = Number(new Date().getFullYear())-2000
  return `${year} y.o`
}

const metaData = {
  title: 'Resume | Kate Kurkina | Front-end developer`s portfolio',
  meta: {
    description: {
      name: 'description',
      content: 'More about me and my professional background'
    }
  }
}

useMeta(metaData)

onMounted(()=>{
  getExperience()
})
</script>
