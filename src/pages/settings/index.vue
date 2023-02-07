<script setup lang="ts">
import router from "@/router";

const settingItems = ref([{ text: "로그아웃", icon: "mdi-logout" }]);

const onClickSettingBtn = (text: string) => {
  if (text === "로그아웃") {
    router.push("/login");
    sessionStorage.clear();
  }
};
</script>

<template>
  <VRow
    ><VCol cols="12">
      <VCard
        class="d-center justify-start ma-4 mb-0 mt-8 py-4 px-4 elevation-0 rounded-lg pt-btn"
      >
        <img class="mr-3" width="52" height="52" src="/logo.svg" alt="Logo" />
        <div>
          <div class="font-weight-bold">타요</div>
          <div>히어로지스틱</div>
        </div>
      </VCard>
    </VCol>
    <VCol cols="12">
      <VCard class="d-center justify-start mx-4 elevation-0 rounded-lg">
        <VList style="width: 100%" density="compact">
          <VListItem
            v-for="(item, i) in settingItems"
            :key="i"
            :value="item"
            active-color="primary"
            style="height: 52px"
            @click="onClickSettingBtn(item.text)"
          >
            <template v-slot:prepend>
              <VIcon :icon="item.icon" />
            </template>

            <VListItemTitle v-text="item.text"></VListItemTitle>
          </VListItem>
        </VList>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss" scoped></style>
