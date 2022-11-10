<template>
  <div class="full-width text-center">
    <BrandGenericLogo
      logoName="virsas"
      :assetsPath="assets + '/logo/'"
      :websitePath="website"
      :websiteLocale="locale + '/'"
      width="480px"
    />
    <h1 class="q-my-lg text-h3">
      <span class="text-primary">Vir</span>tual
      <span class="text-primary">S</span>ystems
      <span class="text-primary">A</span>nd
      <span class="text-primary">S</span>ervices
    </h1>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

import { useMeta } from "quasar";
import { useRoute } from "vue-router";

import { VssSetMetadata } from "@virsas/vue-helpers";

const { locale, t } = useI18n({ useScope: "global" });
const $route = useRoute();

const website = process.env.VUE_WEB_URL;
const assets = process.env.VUE_WEB_ASSETS;
useMeta(
  VssSetMetadata(
    process.env.VUE_WEB_URL + $route.fullPath,
    process.env.VUE_WEB_ASSETS + "/icon/512x512Origin.png",
    process.env.VUE_WEB_TITLE,
    t("page.home.html_title"),
    t("page.home.html_description")
  )
);
</script>
