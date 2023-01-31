export default import.meta.env.MODE === "production"
  ? (...args: any[]) => {}
  : console.log;
