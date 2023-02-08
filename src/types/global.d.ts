export {};

//이곳이 가장 중요한 곳입니다.
declare module "vue/types/vue" {
  interface Vue {}
}

declare global {}

// Extend Window Object
interface Window {}
// Extend Document Object
interface Document {}

// Global constants
// declare const google;
// declare const AppleID;
