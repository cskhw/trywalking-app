<script setup lang="ts">
import {
  centerSelectValue,
  centerSelectItems,
  courceSelectValue,
  courceSelectItems,
  heroSelectValue,
  heroSelectItems,
} from "./driver";
</script>

<template>
  <VRow class="match-height ma-0">
    <VCol class="pa-0" cols="12" md="6">
      <VCard class="bg-white rounded-0">
        <VCardTitle class="pt-6 text-h5 font-weight-bold text-black">
          현재 히어로
        </VCardTitle>
        <VCol class="d-center justify-start px-4 pt-5" cols="12" md="6">
          <VIcon class="mr-2" icon="mdi-store" color="#777777" size="30" />
          <span class="font-weight-bold">마포 A</span>
        </VCol>
        <VCol class="d-center justify-start px-4 pb-6" cols="12" md="6">
          <VIcon
            class="mr-2"
            icon="mdi-card-account-details"
            color="#2457c0"
            size="30"
          />
          <span class="font-weight-bold">미배정</span>
        </VCol>
      </VCard>
    </VCol>
    <VCol class="px-4" cols="12" md="6" style="height: 100%"
      ><VCardTitle class="pa-0 pt-2 text-h5 font-weight-bold text-black">
        히어로 선택
      </VCardTitle>
    </VCol>
    <VCol class="pa-4 py-2" cols="12" md="6" style="height: 100%"
      ><VSelect
        v-model="centerSelectValue"
        :items="centerSelectItems"
        variant="solo"
      >
      </VSelect>
    </VCol>
    <VCol class="pa-4 py-2" cols="12" md="6" style="height: 100%"
      ><VSelect
        v-model="courceSelectValue"
        :items="courceSelectItems"
        variant="solo"
      >
      </VSelect>
    </VCol>
    <VCol class="pa-4 py-2" cols="12" md="6" style="height: 100%"
      ><VSelect
        v-model="heroSelectValue"
        :items="heroSelectItems"
        variant="solo"
      >
      </VSelect>
    </VCol>
  </VRow>
</template>

<style lang="scss">
@use "@core/scss/template/libs/apex-chart.scss";
</style>
