export function getBaseUrl(): string {
  const config = import.meta.env;
  try {
    // const mode = config.VITE_MODE;
    const prefix = config.VITE_PREFIX_URL;
    // const subfix = config.VITE_SUBFIX_URL;
    // const baseURL = mode + prefix;
    const baseURL = prefix;
    log("baseURL: ", baseURL);
    return baseURL;
  } catch (e) {
    console.log(e);
    console.log(config);
    return "Check environment variables for URL";
  }
}
