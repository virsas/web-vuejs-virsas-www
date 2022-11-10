<template>
  <BrandGenericLogo
    logoName="virsas"
    :assetsPath="assets + '/logo/'"
    :websitePath="website"
    :websiteLocale="locale + '/'"
    width="100px"
  />
  <q-space />
  <Theme />
  <Language />
</template>

<script setup>
import { useI18n } from "vue-i18n";

import Theme from "src/components/layout/header/item/headerTheme.vue";
import Language from "src/components/layout/header/item/headerLanguage.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const { locale } = useI18n({ useScope: "global" });

const website = process.env.VUE_WEB_URL;
const assets = process.env.VUE_WEB_ASSETS;

const isHealth = () => {
  return route.path.includes("health");
};
</script>
