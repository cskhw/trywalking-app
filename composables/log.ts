export default (message?: any, ...optionalParams: any[]) =>
  import.meta.env.MODE === "production" ||
  console.log(message, ...optionalParams);
