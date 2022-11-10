<template>
  <q-item>
    <q-item-section>{{ name }}</q-item-section>
    <q-item-section side>
      <q-icon v-if="status" color="positive" name="fa-solid fa-circle" />
      <q-icon v-else color="negative" name="fa-solid fa-circle" />
    </q-item-section>
  </q-item>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
});
</script>
