<template>
  <div class="full-width text-justify">
    <h1 class="text-h3 text-center q-mb-lg">{{ $t("page.privacy.header") }}</h1>
    <h2 class="text-h5 q-my-md">{{ $t("page.privacy.description") }}</h2>
    <p>{{ $t("page.privacy.description_1") }}</p>
    <h2 class="text-h5 q-my-md">{{ $t("page.privacy.definition") }}</h2>
    <p>{{ $t("page.privacy.definition_1") }}</p>
    <h2 class="text-h5 q-my-md">{{ $t("page.privacy.rights") }}</h2>
    <p>{{ $t("page.privacy.rights_1") }}</p>
    <p class="q-ml-lg">&bull; {{ $t("page.privacy.rights_1_a") }}</p>
    <p class="q-ml-lg">&bull; {{ $t("page.privacy.rights_1_b") }}</p>
    <p class="q-ml-lg">&bull; {{ $t("page.privacy.rights_1_c") }}</p>
    <p class="q-ml-lg">&bull; {{ $t("page.privacy.rights_1_d") }}</p>
    <p class="q-ml-lg">&bull; {{ $t("page.privacy.rights_1_e") }}</p>
    <p>{{ $t("page.privacy.rights_2") }}</p>
    <h2 class="text-h5 q-my-md">{{ $t("page.privacy.what_collect") }}</h2>
    <p>{{ $t("page.privacy.what_collect_1") }}</p>
    <h2 class="text-h5 q-my-md">{{ $t("page.privacy.retention") }}</h2>
    <p>{{ $t("page.privacy.retention_1") }}</p>
    <h2 class="text-h5 q-my-md">{{ $t("page.privacy.protection") }}</h2>
    <p>{{ $t("page.privacy.protection_1") }}</p>
    <h2 class="text-h5 q-my-md">{{ $t("page.privacy.sharing") }}</h2>
    <p>{{ $t("page.privacy.sharing_1") }}</p>
    <p class="q-ml-lg">&bull; {{ $t("page.privacy.sharing_1_a") }}</p>
    <p class="q-ml-lg">&bull; {{ $t("page.privacy.sharing_1_b") }}</p>
    <p class="q-ml-lg">&bull; {{ $t("page.privacy.sharing_1_c") }}</p>
    <h2 class="text-h5 q-my-md">{{ $t("page.privacy.advertising") }}</h2>
    <p>{{ $t("page.privacy.advertising_1") }}</p>
    <h2 class="text-h5 q-my-md">{{ $t("page.privacy.children") }}</h2>
    <p>{{ $t("page.privacy.children_1") }}</p>
    <h2 class="text-h5 q-my-md">{{ $t("page.privacy.changes") }}</h2>
    <p>{{ $t("page.privacy.changes_1") }}</p>
    <h2 class="text-h5 q-my-md">{{ $t("page.privacy.reach") }}</h2>
    <p>{{ $t("page.privacy.reach_1") }}</p>
    <p class="text-caption text-right">{{ $t("page.privacy.update") }}</p>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useMeta } from "quasar";
import { useI18n } from "vue-i18n";

import { VssSetMetadata } from "@virsas/vue-helpers";

const { t } = useI18n({ useScope: "global" });
const $route = useRoute();
useMeta(
  VssSetMetadata(
    process.env.VUE_WEB_URL + $route.fullPath,
    process.env.VUE_WEB_ASSETS + "/icon/512x512Origin.png",
    process.env.VUE_WEB_TITLE,
    t("page.privacy.html_title"),
    t("page.privacy.html_description")
  )
);
</script>
