<template>
  <div>
    <Popup v-model="preferences">
      <BrandGenericLogo
        logoName="virsas"
        :assetsPath="assets + '/logo/'"
        :websitePath="website"
        :websiteLocale="locale + '/'"
        width="200px"
      />
      <q-toolbar>
        <strong>{{ $t("page.footer.cookie_privacy_header") }}</strong>
      </q-toolbar>
      <p>{{ $t("page.footer.cookie_privacy_text") }}</p>

      <q-toolbar>
        <strong>{{ $t("page.footer.cookie_necessary_header") }}</strong>
        <q-space />
        <q-toggle v-model="necessaryCookies" disable />
      </q-toolbar>
      <p>{{ $t("page.footer.cookie_necessary_text") }}</p>

      <q-toolbar>
        <strong>{{ $t("page.footer.cookie_performance_header") }}</strong>
        <q-space />
        <q-toggle v-model="performanceCookies" />
      </q-toolbar>
      <p>{{ $t("page.footer.cookie_performance_text") }}</p>

      <q-toolbar>
        <q-space />
        <Button
          :label="$t('page.footer.cookie_accept_selected')"
          @click="acceptSelectedCookies()"
          color="primary"
          :flat="true"
        />
        <Button
          :label="$t('page.footer.cookie_accept_all')"
          @click="acceptAllCookies()"
          color="primary"
        />
      </q-toolbar>
    </Popup>

    <q-dialog
      class="cookiesDialog"
      v-model="cookies"
      seamless
      position="bottom"
    >
      <q-toolbar>
        <q-item class="q-pa-xs">
          <q-item-section>
            <q-item-label class="text-h6">
              {{ $t("page.footer.cookie_header") }}
            </q-item-label>
            <q-item-label>
              {{ $t("page.footer.cookie_text") }}
            </q-item-label>
            <q-item-label>
              <router-link :to="{ name: 'cookiesShow' }">
                {{ $t("page.footer.cookie_policy") }}
              </router-link>
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-space />
        <q-separator vertical />
        <Button
          :label="$t('page.footer.cookie_settings')"
          @click="preferences = true"
          color="primary"
          :flat="true"
          class="q-mx-sm"
        />
        <Button
          :label="$t('page.footer.cookie_accept_all')"
          @click="acceptAllCookies()"
          color="primary"
        />
      </q-toolbar>
    </q-dialog>
  </div>
</template>

<script setup>
import { useQuasar } from "quasar";
import { ref } from "vue";
import { useI18n } from "vue-i18n";

import Popup from "src/components/generic/genericPopup.vue";
import Button from "src/components/generic/genericButton.vue";

const quasar = useQuasar();
const { locale } = useI18n({ useScope: "global" });

const website = process.env.VUE_WEB_URL;
const assets = process.env.VUE_WEB_ASSETS;

const cookies = ref(!quasar.cookies.has("vss_cookie_accepted"));
const preferences = ref(false);

const necessaryCookies = ref(true);
const performanceCookies = ref(false);

if (quasar.cookies.has("vss_cookie_performance")) {
  if (quasar.cookies.get("vss_cookie_performance") === "true") {
    performanceCookies.value = true;
  }
}

const acceptAllCookies = () => {
  cookies.value = false;
  preferences.value = false;
  quasar.cookies.set("vss_cookie_performance", true, {
    expires: 365,
    path: "/",
  });
  quasar.cookies.set("vss_cookie_necessary", true, {
    expires: 365,
    path: "/",
  });
  quasar.cookies.set("vss_cookie_accepted", true, {
    expires: 365,
    path: "/",
  });
};

const acceptSelectedCookies = () => {
  cookies.value = false;
  preferences.value = false;
  quasar.cookies.set("vss_cookie_performance", performanceCookies.value, {
    expires: 365,
    path: "/",
  });
  quasar.cookies.set("vss_cookie_necessary", true, {
    expires: 365,
    path: "/",
  });
  quasar.cookies.set("vss_cookie_accepted", true, {
    expires: 365,
    path: "/",
  });
};
</script>
