import pino from "pino";
import { AsitLogger, AsitLoggerOptions } from "./logger";

const checkLogIdLenght = (logId: string) => {
  if (logId.length < 3) {
    throw new Error("logId must be at least 3 characters long");
  }
};

export function asitLogger(options?: AsitLoggerOptions) {
  const logger = pino(options) as AsitLogger;

  // Wrapper for the 'fatal' method
  const originalFatal = logger.fatal;
  logger.fatal = function (
    logId: string,
    obj: any,
    msg?: string,
    ...args: any[]
  ) {
    checkLogIdLenght(logId);
    if (typeof obj === "string") {
      originalFatal.call(logger, { logId }, obj, ...args);
    } else {
      originalFatal.call(logger, { logId, ...obj }, msg, ...args);
    }
  };

  // Wrapper for the 'error' method
  const originalError = logger.error;
  logger.error = function (
    logId: string,
    obj: any,
    msg?: string,
    ...args: any[]
  ) {
    checkLogIdLenght(logId);
    if (typeof obj === "string") {
      originalError.call(logger, { logId }, obj, ...args);
    } else {
      originalError.call(logger, { logId, ...obj }, msg, ...args);
    }
  };

  return logger;
}

export * from "pino";
