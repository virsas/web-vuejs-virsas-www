<template>
  <div>
    <q-layout view="hHh lpr fff">
      <Header />
      <q-page-container>
        <q-page>
          <div class="q-pa-md">
            <router-view />
          </div>
        </q-page>
      </q-page-container>
      <Footer />
      <Loading />
    </q-layout>
  </div>
</template>

<script setup>
import Header from "src/components/layout/layoutHeader.vue";
import Footer from "src/components/layout/layoutFooter.vue";
import Loading from "src/components/layout/layoutLoading.vue";
</script>
