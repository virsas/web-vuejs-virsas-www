<template>
  <div class="full-width text-justify">
    <h1 class="text-h3 text-center q-mb-lg">{{ $t("page.cookies.header") }}</h1>
    <h2 class="text-h5 q-my-md">{{ $t("page.cookies.description") }}</h2>
    <p>{{ $t("page.cookies.description_1") }}</p>
    <h2 class="text-h5 q-my-md">{{ $t("page.cookies.cookies") }}</h2>
    <p>{{ $t("page.cookies.cookies_1") }}</p>
    <h3 class="text-h6 q-my-md">{{ $t("page.cookies.cookies_usage") }}</h3>
    <p class="q-ml-lg">&bull; {{ $t("page.cookies.cookies_usage_a") }}</p>
    <p class="q-ml-lg">&bull; {{ $t("page.cookies.cookies_usage_b") }}</p>
    <p class="q-ml-lg">&bull; {{ $t("page.cookies.cookies_usage_c") }}</p>
    <p class="q-ml-lg">&bull; {{ $t("page.cookies.cookies_usage_d") }}</p>
    <p class="q-ml-lg">&bull; {{ $t("page.cookies.cookies_usage_e") }}</p>
    <p class="q-ml-lg">&bull; {{ $t("page.cookies.cookies_usage_f") }}</p>
    <h2 class="text-h5 q-my-md">{{ $t("page.cookies.period") }}</h2>
    <p>{{ $t("page.cookies.period_1") }}</p>
    <h2 class="text-h5 q-my-md">{{ $t("page.cookies.management") }}</h2>
    <p>{{ $t("page.cookies.management_1") }}</p>
    <p class="q-ml-lg">
      <a href="https://support.google.com/chrome/answer/95647?hl=en&hlrm=en">
        &bull; {{ $t("page.cookies.management_1_a") }}
      </a>
    </p>
    <p class="q-ml-lg">
      <a href="https://support.apple.com/en-ph/guide/safari/sfri11471/mac">
        &bull; {{ $t("page.cookies.management_1_b") }}
      </a>
    </p>
    <p class="q-ml-lg">
      <a
        href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences"
      >
        &bull; {{ $t("page.cookies.management_1_c") }}
      </a>
    </p>
    <p class="q-ml-lg">
      <a
        href="https://blogs.opera.com/news/2015/08/how-to-manage-cookies-in-opera/"
      >
        &bull; {{ $t("page.cookies.management_1_d") }}
      </a>
    </p>
    <p class="q-ml-lg">
      <a
        href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies"
      >
        &bull; {{ $t("page.cookies.management_1_e") }}
      </a>
    </p>
    <p class="text-caption text-right">{{ $t("page.cookies.update") }}</p>
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
    t("page.cookies.html_title"),
    t("page.cookies.html_description")
  )
);
</script>
