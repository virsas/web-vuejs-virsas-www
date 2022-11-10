<template>
  <div class="full-width text-justify">
    <h1 class="text-h3 text-center q-mb-lg">
      {{ $t("page.status.page_header") }}
    </h1>
    <q-list bordered separator>
      <StatusItem name="VssAuth APP" :status="vssauthAPP" />
      <StatusItem name="VssAuth API" :status="vssauthAPI" />
    </q-list>
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useMeta } from "quasar";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";

import { useStore } from "src/stores/out/status";

import { VssSetMetadata } from "@virsas/vue-helpers";

import StatusItem from "src/components/custom/customItemStatus";

const store = useStore();

const vssauthAPP = computed({ get: () => store.vssauthAPP });
const vssauthAPI = computed({ get: () => store.vssauthAPI });

const { t } = useI18n({ useScope: "global" });
const $route = useRoute();
useMeta(
  VssSetMetadata(
    process.env.VUE_WEB_URL + $route.fullPath,
    process.env.VUE_WEB_ASSETS + "/icon/512x512Origin.png",
    process.env.VUE_WEB_TITLE,
    t("page.status.html_title"),
    t("page.status.html_description")
  )
);

onMounted(() => {
  store.vssauthAPPShow();
  store.vssauthAPIShow();
});
</script>
