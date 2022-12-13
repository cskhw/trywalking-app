<template>
  <QHeader
    class="row justify-between bg-white text-black"
    height-hint="20"
    color="white"
    bordered
  >
    <QToolbar class="row">
      <QToolbarTitle class="q-pa-none absolute-center font-size-16">
        회원가입
      </QToolbarTitle>
    </QToolbar>
  </QHeader>
  <slot />
</template>
<script setup lang="ts">
import { mdiChevronLeft } from "@mdi/js";
</script>
<style lang="scss"></style>
