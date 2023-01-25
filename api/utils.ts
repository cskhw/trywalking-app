export function getBaseUrl(): string {
  const config = import.meta.env;
  try {
    const contextPath = config.VITE_CONTEXT_PATH;
    let baseURL = import.meta.env.VITE_BASE_URL;

    return (baseURL += contextPath ? contextPath : "");
  } catch (e) {
    console.log(e);
    console.log(config);
    return "Check environment variables for URL";
  }
}

export function getLogBaseURL(): string {
  const config = import.meta.env;
  try {
    const contextPath = config.VITE_CONTEXT_PATH;
    let logBaseURL = import.meta.env.VITE_LOG_BASE_URL;

    return (logBaseURL += contextPath ? contextPath : "");
  } catch (e) {
    console.log(e);
    console.log(config);
    return "Check environment variables for URL";
  }
}
