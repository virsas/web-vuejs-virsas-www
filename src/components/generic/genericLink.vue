<template>
  <router-link :to="{ name: to }">
    {{ label }}
  </router-link>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
});
</script>
