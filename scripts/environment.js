import { LogLevel } from "./logging/logLevel.js";

/**
 * Environment variables for development.
 * This file is changed during CD workflow
 * for production with environment.prod.js.
 */
export const env = {
  env: "dev",
  logLevel: LogLevel.All,
  logWithDate: true,
};
