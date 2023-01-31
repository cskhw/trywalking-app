<script setup lang="ts">
const props = defineProps<{
  error: any
}>()
</script>

<template>
  <QPageContainer>
    <QPage padding>
      {{ error }}
    </QPage>
  </QPageContainer>
</template>
