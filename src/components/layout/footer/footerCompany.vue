<template>
  <div>
    <h6>{{ $t("menu.footer.virsas") }}</h6>
    <div>&copy; {{ $t("menu.footer.copyright") }}</div>
    <br />
    <div>
      <span>{{ $t("menu.footer.company_id") }}: </span>
      <span class="text-bold">{{ $t("menu.footer.cid") }}</span>
    </div>
    <div>
      <span>{{ $t("menu.footer.company_vat") }}: </span>
      <span class="text-bold">{{ $t("menu.footer.dic") }}</span>
    </div>
    <br />
    <div class="text-bold">{{ $t("menu.footer.address") }}</div>
    <div>{{ $t("menu.footer.street") }}</div>
    <div>{{ $t("menu.footer.prague") }}</div>
    <div>{{ $t("menu.footer.czechia") }}</div>
  </div>
</template>

<script setup></script>
