<script lang="ts" setup>
import { useRoute } from "vue-router";
import UserProfileHeader from "./UserProfileHeader.vue";
import About from "./About.vue";

const router = useRoute();
</script>

<template>
  <div>
    <UserProfileHeader class="mb-5" />
    <VRow>
      <VCol md="4" cols="12">
        <About />
      </VCol>
    </VRow>
  </div>
</template>

<route lang="yaml">
meta:
  navActiveLink: pages-user-profile-tab
</route>
