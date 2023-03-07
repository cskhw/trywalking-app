<script setup lang="ts">
import SearchContainer from "@/pages/user-list/views/user-list.vue";
</script>

<template>
  <VRow class="match-height ma-0">
    <VCol class="pa-0" cols="12" md="6">
      <SearchContainer> </SearchContainer>
    </VCol>
    <!-- <VCol class="pa-0" cols="12" md="6" style="height: 100%">
      <StoreTableContainer />
    </VCol> -->
  </VRow>
</template>

<style lang="scss">
@use "@core/scss/template/libs/apex-chart.scss";
</style>
