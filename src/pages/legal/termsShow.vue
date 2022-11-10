<template>
  <div class="full-width text-justify">
    <h1 class="text-h3 text-center q-mb-lg">{{ $t("page.terms.header") }}</h1>
    <p>{{ $t("page.terms.description") }}</p>
    <h2 class="text-h5 q-my-md">{{ $t("page.terms.definition") }}</h2>
    <p>{{ $t("page.terms.definition_1") }}</p>
    <p>{{ $t("page.terms.definition_2") }}</p>
    <h2 class="text-h5 q-my-md">{{ $t("page.terms.acceptance") }}</h2>
    <p>{{ $t("page.terms.acceptance_1") }}</p>
    <h2 class="text-h5 q-my-md">{{ $t("page.terms.accounts") }}</h2>
    <p>{{ $t("page.terms.accounts_1") }}</p>
    <p>{{ $t("page.terms.accounts_2") }}</p>
    <h2 class="text-h5 q-my-md">{{ $t("page.terms.limits") }}</h2>
    <p>{{ $t("page.terms.limits_1") }}</p>
    <h2 class="text-h5 q-my-md">{{ $t("page.terms.verification") }}</h2>
    <p>{{ $t("page.terms.verification_1") }}</p>
    <h2 class="text-h5 q-my-md">{{ $t("page.terms.virus") }}</h2>
    <p>{{ $t("page.terms.virus_1") }}</p>
    <h2 class="text-h5 q-my-md">{{ $t("page.terms.feedback") }}</h2>
    <p>{{ $t("page.terms.feedback_1") }}</p>
    <h2 class="text-h5 q-my-md">{{ $t("page.terms.modification") }}</h2>
    <p>{{ $t("page.terms.modification_1") }}</p>
    <h2 class="text-h5 q-my-md">{{ $t("page.terms.exclusion") }}</h2>
    <p>{{ $t("page.terms.exclusion_1") }}</p>
    <h2 class="text-h5 q-my-md">{{ $t("page.terms.termination") }}</h2>
    <p>{{ $t("page.terms.termination_1") }}</p>
    <h2 class="text-h5 q-my-md">{{ $t("page.terms.rights") }}</h2>
    <p>{{ $t("page.terms.rights_1") }}</p>
    <p>{{ $t("page.terms.rights_2") }}</p>
    <h2 class="text-h5 q-my-md">{{ $t("page.terms.disputes") }}</h2>
    <p>{{ $t("page.terms.disputes_1") }}</p>
    <p>{{ $t("page.terms.disputes_2") }}</p>
    <h2 class="text-h5 q-my-md">{{ $t("page.terms.contact") }}</h2>
    <p>{{ $t("page.terms.contact_1") }}</p>
    <h2 class="text-h5 q-my-md">{{ $t("page.terms.changes") }}</h2>
    <p>{{ $t("page.terms.changes_1") }}</p>
    <p class="text-caption text-right">{{ $t("page.terms.update") }}</p>
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
    t("page.terms.html_title"),
    t("page.terms.html_description")
  )
);
</script>
