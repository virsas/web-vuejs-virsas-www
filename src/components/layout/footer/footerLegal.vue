<template>
  <Button
    v-if="!isHealth()"
    :label="$t('menu.footer.status')"
    to="statusShow"
  />
  <Button :label="$t('menu.footer.cookies')" to="cookiesShow" />
  <Button :label="$t('menu.footer.terms')" to="termsShow" />
  <Button :label="$t('menu.footer.privacy')" to="privacyShow" />
</template>

<script setup>
import { useRoute } from "vue-router";
import Button from "src/components/generic/genericButton";

const route = useRoute();

const isHealth = () => {
  return route.path.includes("/status");
};
</script>
