<template>
  <q-page>
    <HeroSection :title="resume.fio">
      <q-btn
        class="self-start q-mb-lg"
        :label="$t('resumeFile')"
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
            {{ $t('profile') }}
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
            {{ $t('contacts') }}
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
            {{ $t('skills') }}
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
            {{ $t('experience') }}
          </h2>
          <div class="column q-gutter-y-lg">
            <q-card
              v-for="(job, i) in resume.experience"
              :key="i"
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
            {{ $t('education') }}
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

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useMeta } from "quasar";
import HeroSection from "components/HeroSection.vue";
import { useI18n } from "vue-i18n";
import type { ResumeItem } from 'components/models';

const currentJobExperience = ref<string>('');
const { t, messages, locale } = useI18n();

const resume = computed<ResumeItem>(() =>
  (messages.value[locale.value]?.resumeData ?? null) as ResumeItem
);

const getExperience = () => {
  const currentDate = new Date();
  const currentJobDate = new Date('2022-12-05');
  let months =
    (currentDate.getFullYear() - currentJobDate.getFullYear()) * 12;
  months -= currentJobDate.getMonth();
  months += currentDate.getMonth();

  const currentJobYears = Math.floor(months / 12);
  const currentJobMonths = months - currentJobYears * 12;

  currentJobExperience.value = `${currentJobYears} ${t('year')} ${currentJobMonths} ${t('months')}`
};

const getAge = (): string => {
  const year = Number(new Date().getFullYear())-2000;
  return `${year}`;
};

const metaData = {
  title: `${t('resume')} | ${t('titleMeta')}`,
  meta: {
    description: {
      name: 'description',
      content: t('descriptionMeta')
    }
  }
};

useMeta(metaData);

onMounted(()=>{
  getExperience();
})
</script>
