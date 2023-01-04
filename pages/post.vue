<template>
  <QPageContainer>
    <!-- 홈 페이지 -->
    <QPage class="q-pa-md q-gutter-sm">
      <QCard class="post" v-for="post in postItems" style="cursor: pointer">
        <QCardSection>
          id: {{ post.id }} title: {{ post.title }} contents:
          {{ post.contents }}
        </QCardSection>
      </QCard>
    </QPage>
  </QPageContainer>
</template>
<script setup lang="ts">
const props = defineProps<{}>();

const postItems = ref([
  { id: 1, title: "no.1 title", contents: "contents" },
  { id: 2, title: "no.2 title", contents: "contents" },
]);
</script>
<style lang="scss" scoped>
.post {
  &:hover {
    opacity: 0.8;
  }
}
</style>
