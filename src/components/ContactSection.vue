<template>
  <div class="container">
    <h2 class="q-mb-lg">
      Contacts
    </h2>
    <div class="row q-col-gutter-md">
      <div
        class="col-md-4 col-sm-6 col-12"
        v-for="card in contactInfo"
        :key="card"
      >
        <q-card class="q-pa-md">
          <q-card-section>
            <a
              class="flex items-center q-gutter-md no-wrap"
              :href="card.link"
              target="_blank"
            >
              <q-icon
                size="24px"
                :name="card.icon"
              />
              <div v-html="card.text"/>
            </a>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { contactInfo } from "boot/api"
</script>
