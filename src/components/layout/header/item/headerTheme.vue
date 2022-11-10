<template>
  <div>
    <q-toggle color="accent" keep-color v-model="dark" />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useQuasar } from "quasar";

const quasar = useQuasar();

const dark = ref(false);
const sdark = ref("false");

if (quasar.cookies.has("vss_dark_mode")) {
  sdark.value = quasar.cookies.get("vss_dark_mode");
}

sdark.value === "true" ? (dark.value = true) : (dark.value = false);
quasar.dark.set(dark.value);

watch(dark, (val) => {
  quasar.cookies.set("vss_dark_mode", val, { expires: 365, path: "/" });
  quasar.dark.set(val);
});
</script>
