<template>
  <q-inner-loading :showing="loading">
    <q-spinner-pie size="5em" color="primary" />
  </q-inner-loading>
</template>

<script setup>
import { computed } from "vue";
import { useStore as useLoadingStore } from "src/stores/layout/loading";

const loadingStore = useLoadingStore();

const loading = computed({ get: () => loadingStore.loading });
</script>
