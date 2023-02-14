<script setup lang="ts">
import SearchContainer from "@/pages/delivery/views/search-container.vue";
import StoreTableContainer from "@/pages/delivery/views/stores-container.vue";
</script>

<template>
  <VRow class="match-height ma-0">
    <VCol class="pa-0" cols="12" md="6">
      <SearchContainer />
    </VCol>
    <VCol class="pa-0" cols="12" md="6" style="height: 100%">
      <StoreTableContainer />
    </VCol>
  </VRow>
</template>

<style lang="scss">
@use "@core/scss/template/libs/apex-chart.scss";
</style>
