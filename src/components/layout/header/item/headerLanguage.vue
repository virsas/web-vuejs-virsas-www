<template>
  <div>
    <Button :round="true" :label="lang" :menu="true">
      <Item
        v-for="language in languages"
        :key="language.code"
        :text="language.name"
        @click="locale = language.code"
      />
    </Button>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useQuasar } from "quasar";
import { useRoute, useRouter } from "vue-router";

import { useI18n } from "vue-i18n";

import Item from "src/components/generic/genericItem.vue";
import Button from "src/components/generic/genericButton.vue";

const quasar = useQuasar();
const route = useRoute();
const router = useRouter();

const { locale } = useI18n({ useScope: "global" });
const lang = ref(locale.value === "en-US" ? "en" : locale.value);

const languages = [
  { name: "English", code: "en-US" },
  { name: "Čeština", code: "cs" },
];
const languageCodes = languages.map((language) => language.code);

if (
  typeof route.params.lang === "undefined" ||
  !languageCodes.includes(route.params.lang)
) {
  router.replace({ params: { lang: "en-US" } });
} else {
  locale.value = route.params.lang;
  lang.value = route.params.lang === "en-US" ? "en" : route.params.lang;
  import("quasar/lang/" + route.params.lang).then((l) => {
    quasar.lang.set(l.default);
  });
}

watch(locale, (val) => {
  if (languageCodes.includes(val)) {
    router.replace({ params: { lang: val } });
    lang.value = val === "en-US" ? "en" : val;
    import("quasar/lang/" + val).then((l) => {
      quasar.lang.set(l.default);
    });
  }
});
</script>
