import api from "@/api/api";

const pinia = createPinia();
const router = useRouter();
pinia.use(({ store }) => {
  store.router = markRaw(router);
  store.api = markRaw(api);
});

export default pinia;
