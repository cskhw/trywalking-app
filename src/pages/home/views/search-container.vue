<script setup lang="ts">
import DTable from "@/components/DTable.vue";
import { dashboardTableStyle } from "../home";
import {
  tableheaders,
  searchQuery,
  tableValue,
  centerSelectItems,
  centerSelectValue,
  date,
  deliveryOrderSelectItems,
  deliveryOrderSelectValue,
  routeSelectValue,
  routeSelectItems,
  loadSelectItems,
  loadSelectValue,
  pickingSelectItems,
  pickingSelectValue,
  isShowOnlyCs,
  isShowOnlyPickingCompleted,
} from "./search-container";
import DatePicker from "vue3-datepicker";

import type { ProjectsAnalytics } from "@/@fake-db/types";
import { useProjectStore } from "@/views/dashboards/analytics/useProjectStore";
import { avatarText } from "@core/utils/formatters";

// 👉 Store
const projectStore = useProjectStore();

const searchQuery = ref("");
const rowPerPage = ref(5);
const currentPage = ref(1);
const totalPage = ref(1);
const totalProjects = ref(0);
const projects = ref<ProjectsAnalytics[]>([]);
const selectedRows = ref<string[]>([]);
const selectAllProject = ref(false);

// 👉 Fetch Projects
watchEffect(() => {
  projectStore
    .fetchProjects({
      q: searchQuery.value,
      perPage: rowPerPage.value,
      currentPage: currentPage.value,
    })
    .then((response) => {
      projects.value = response.data.projects;
      totalPage.value = response.data.totalPage;
      totalProjects.value = response.data.totalProjects;
    })
    .catch((error) => {
      console.log(error);
    });
});

// 👉 watching current page
watchEffect(() => {
  if (currentPage.value > totalPage.value) currentPage.value = totalPage.value;
});

// 👉 Computing pagination data
const paginationData = computed(() => {
  const firstIndex = projects.value.length
    ? (currentPage.value - 1) * rowPerPage.value + 1
    : 0;
  const lastIndex =
    projects.value.length + (currentPage.value - 1) * rowPerPage.value;

  return `Showing ${firstIndex} to ${lastIndex} of ${totalProjects.value} entries`;
});

// 👉 Add/Remove all checkbox ids in/from array
const selectUnselectAll = () => {
  selectAllProject.value = !selectAllProject.value;
  if (selectAllProject.value) {
    projects.value.forEach((project) => {
      if (!selectedRows.value.includes(`check${project.status}`))
        selectedRows.value.push(`check${project.status}`);
    });
  } else {
    selectedRows.value = [];
  }
};

// 👉 watch if checkbox array is empty all checkbox should be uncheck
watch(
  selectedRows,
  () => {
    if (!selectedRows.value.length) selectAllProject.value = false;
  },
  { deep: true }
);

// 👉 Add/Remove individual checkbox in/from array
const addRemoveIndividualCheckbox = (checkID: string) => {
  if (selectedRows.value.includes(checkID)) {
    const index = selectedRows.value.indexOf(checkID);

    selectedRows.value.splice(index, 1);
  } else {
    selectedRows.value.push(checkID);
    selectAllProject.value = true;
  }
};
</script>

<template>
  <VCard
    class="search-container pa-4 pb-2"
    color="white"
    style="border-radius: 0px 0px 24px 24px; white-space: nowrap"
  >
    <VRow class="px-3 pt-4">
      <!-- 날짜 선택 -->
      <VCol class="pa-0 pr-1" cols="8">
        <DatePicker
          style="height: 40px; overflow: hidden"
          v-model="date"
        ></DatePicker>
      </VCol>
      <!-- 센터미배정 -->
      <VCol class="pa-0 mr-1">
        <VSelect
          v-model="centerSelectValue"
          :item="centerSelectItems"
          variant="solo"
        >
        </VSelect>
      </VCol>
    </VRow>
    <VRow class="px-3 pt-2">
      <!-- 피킹 완료 스위치 -->
      <VCol class="pa-0 mr-1">
        <v-switch
          color="indigo"
          v-model="isShowOnlyPickingCompleted"
          label="피킹 중"
        ></v-switch>
      </VCol>
      <!-- 노선 선택 -->
      <VCol class="pa-0 mr-1">
        <VSelect
          v-model="routeSelectValue"
          :item="routeSelectItems"
          variant="solo"
        >
        </VSelect>
      </VCol>
      <!-- 착지 선택 -->
      <VCol class="pa-0 mr-1">
        <VSelect
          v-model="loadSelectValue"
          :item="loadSelectItems"
          variant="solo"
        >
        </VSelect>
      </VCol>
    </VRow>
    <VRow class="px-3 pt-2">
      <!-- CS업장 스위치 -->
      <VCol class="pa-0 mr-1">
        <v-switch
          color="indigo"
          v-model="isShowOnlyCs"
          label="CS업장"
        ></v-switch>
      </VCol>
      <!-- 적재 위치 -->
      <VCol class="pa-0 mr-1">
        <VSelect
          v-model="pickingSelectValue"
          :item="pickingSelectItems"
          variant="solo"
        >
        </VSelect>
      </VCol>
      <!--  -->
      <VCol class="pa-0 mr-1">
        <VSelect
          v-model="deliveryOrderSelectValue"
          :item="deliveryOrderSelectItems"
          variant="solo"
        >
        </VSelect>
      </VCol>
    </VRow>

    <!-- 검색창 -->
    <VRow class="px-3 pt-2">
      <VBtn style="width: 56px" class="mr-1">초기화</VBtn>
      <VTextField
        v-model="searchQuery"
        variant="solo"
        append-inner-icon="mdi-search"
      />
    </VRow>
    <!-- SECTION Table -->
    <v-data-table class="text-no-wrap" :headers="[]">
      <!-- 👉 Table head -->
      <thead>
        <tr>
          <!-- 👉 Check/Uncheck all checkbox -->
          <th scope="col" class="text-center"></th>

          <th scope="col" class="font-weight-semibold">NAME</th>
          <th scope="col" class="font-weight-semibold">LEADER</th>
          <th scope="col" class="font-weight-semibold">TEAM</th>
          <th scope="col" class="font-weight-semibold">STATUS</th>
          <th scope="col" class="font-weight-semibold">
            <span class="ms-2">ACTIONS</span>
          </th>
        </tr>
      </thead>

      <!-- 👉 Table Body -->
      <tbody>
        <tr
          v-for="project in projects"
          :key="project.name"
          style="height: 3.5rem"
        >
          <!-- 👉 Name -->
          <td>
            <div class="d-flex align-center gap-3">
              <VAvatar variant="tonal" color="primary" size="38">
                <VImg v-if="project.logo.length" :src="project.logo" />
                <span v-else class="font-weight-semibold">{{
                  avatarText(project.name)
                }}</span>
              </VAvatar>

              <div>
                <h6 class="text-base text-medium-emphasis font-weight-semibold">
                  {{ project.name }}
                </h6>
                <span class="text-disabled">{{ project.date }}</span>
              </div>
            </div>
          </td>

          <!-- 👉 Leader -->
          <td class="text-medium-emphasis">
            {{ project.leader }}
          </td>

          <!-- 👉 Team -->
          <td class="text-center">
            <div class="v-avatar-group">
              <VAvatar
                v-for="avatar in project.team"
                :key="avatar"
                :size="32"
                :image="avatar"
              />
            </div>
          </td>

          <!-- 👉 Progress -->
          <td class="text-center">
            <VProgressLinear
              :model-value="project.status"
              color="primary"
              height="6"
              rounded
              rounded-bar
            />
          </td>

          <!-- 👉 Actions -->
          <td class="text-center" style="width: 7.5rem">
            <VBtn icon variant="plain" color="default" size="x-small">
              <VIcon :size="22" icon="tabler-dots-vertical" />

              <VMenu activator="parent">
                <VList density="compact">
                  <VListItem href="#" title="Details" />
                  <VListItem href="#" title="Archive" />
                </VList>
              </VMenu>
            </VBtn>
          </td>
        </tr>
      </tbody>

      <!-- 👉 table footer  -->
      <tfoot v-show="!projects.length">
        <tr>
          <td colspan="8" class="text-center text-body-1">No data available</td>
        </tr>
      </tfoot>
    </v-data-table>
    <!-- 히어로 설정 버튼 -->
    <VBtn
      class="mt-2 search-container-driver-dashboard"
      style="width: 100%; height: 32px"
      flat
      block
    >
      <VRow style="width: 100%">
        <!-- 차량 번호 -->
        <VCol class="d-flex justify-space-evenly" cols="6">
          <VIcon size="24" icon="mdi-truck"></VIcon>
          <span style="line-height: 24px">타요</span>
        </VCol>
        <!-- 운전자 -->
        <VCol class="d-flex justify-space-evenly" cols="6">
          <VIcon size="24" icon="mdi-card-account-details"></VIcon>
          <span style="line-height: 24px">타요</span>
        </VCol>
      </VRow>
    </VBtn>
  </VCard>
</template>

<style lang="scss" scoped>
::v-deep(.search-container-driver-dashboard .v-btn__content) {
  width: 100%;
}
</style>
