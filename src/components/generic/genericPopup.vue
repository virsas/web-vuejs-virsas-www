<template>
  <q-dialog v-model="open" persistent>
    <q-card style="width: 1000px; max-width: 80vw">
      <q-bar>
        <q-space />
        <q-btn flat round icon="fas fa-times" v-close-popup />
      </q-bar>
      <q-card-section class="full-width">
        <slot></slot>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  modelValue: Boolean,
});
const emit = defineEmits(["update:modelValue"]);

const open = computed({
  get: () => props.modelValue,
  set: (open) => {
    emit("update:modelValue", open);
  },
});
</script>
