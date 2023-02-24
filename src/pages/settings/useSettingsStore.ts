import { ProfileHeader, ProfileTabCommon } from "@/@fake-db/types";
import useUserStore from "@/stores/useUserStore";
import { defineStore } from "pinia";

export default defineStore("settings", {
  state: () => ({
    headerData: {} as ProfileHeader,
    aboutsData: [] as ProfileTabCommon[],
  }),
  getters: {
    headerData: () => {
      const userStore = useUserStore();
      return {
        fullName: userStore.user.nickname,
        coverImg:
          "data:image/jpeg;base64,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",
        profileImg:
          "https://img.freepik.com/free-photo/closeup-shot-of-a-cute-ginger-kitten-staring-at-the-camera-isolated-on-a-white-wall_181624-45452.jpg",
      };
    },
    aboutsData: () => {
      const userStore = useUserStore();
      const abouts: ProfileTabCommon[] = [];

      abouts.push({
        icon: "mdi-account",
        property: "nickname",
        value: userStore.user.nickname,
      });

      return abouts;
    },
  },
  actions: {},
});
