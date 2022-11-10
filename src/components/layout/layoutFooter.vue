<template>
  <q-footer>
    <FooterCookies />
    <div class="row full-width q-pa-md">
      <div class="col-xs-12 col-sm-12 col-md-6 col-6">
        <FooterCompany />
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6 col-6">
        <FooterLinks />
      </div>
    </div>
    <div class="row full-width">
      <q-separator class="full-width" />
      <FooterLegal />
    </div>
  </q-footer>
</template>

<script setup>
import FooterCompany from "src/components/layout/footer/footerCompany.vue";
import FooterLinks from "src/components/layout/footer/footerLinks.vue";
import FooterLegal from "src/components/layout/footer/footerLegal.vue";
import FooterCookies from "src/components/layout/footer/footerCookies.vue";
</script>
