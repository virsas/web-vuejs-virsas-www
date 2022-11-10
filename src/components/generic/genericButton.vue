<template>
  <q-btn
    :type="type"
    :size="size"
    :color="color"
    :unelevated="unelevated"
    :flat="flat"
    :dense="dense"
    :round="round"
    :disabled="['submit'].includes(type) ? loading : undefined"
    :href="href"
    :target="href ? '_blank' : undefined"
    :to="to ? { name: to } : null"
    :label="label"
    :icon="icon"
    ><q-menu v-if="menu">
      <q-list>
        <slot></slot>
      </q-list>
    </q-menu>
  </q-btn>
</template>

<script setup>
import { computed } from "vue";
import { useStore as useLoadingStore } from "src/stores/layout/loading";

const props = defineProps({
  label: {
    type: String,
    default: undefined,
  },
  icon: {
    type: String,
    default: undefined,
  },
  type: {
    type: String,
    default: "button",
  },
  size: {
    type: String,
    default: "md",
  },
  color: {
    type: String,
    default: undefined,
  },
  unelevated: {
    type: Boolean,
    default: true,
  },
  flat: {
    type: Boolean,
    default: false,
  },
  dense: {
    type: Boolean,
    default: false,
  },
  round: {
    type: Boolean,
    default: false,
  },
  href: {
    type: String,
    default: undefined,
  },
  to: {
    type: String,
    default: undefined,
  },
  menu: {
    type: Boolean,
    default: false,
  },
});

const loadingStore = useLoadingStore();

const loading = computed({ get: () => loadingStore.loading });
</script>
