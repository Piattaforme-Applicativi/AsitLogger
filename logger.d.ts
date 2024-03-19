import pino, { Logger, LoggerOptions } from "pino";

interface LogWithLogIdFn {
  <T extends object>(logId: string, obj: T, msg?: string, ...args: any[]): void;
  (logId: string, obj: unknown, msg?: string, ...args: any[]): void;
  (logId: string, msg: string, ...args: any[]): void;
}
export type AsitLogger = Omit<Logger, "fatal" | "error"> & {
  /**
   * Log at `'fatal'` level the given msg. If the second argument is an object, all its properties will be included in the JSON line.
   * If more args follows `msg`, these will be used to format `msg` using `util.format`.
   *
   * @typeParam T: the interface of the object being serialized. Default is object.
   * @param logId: Unique identifier for this log (generate one with [this tool](https://piattaforme-applicativi.github.io/LogIdGenerator/))
   * @param obj: object to be serialized
   * @param msg: the log message to write
   * @param ...args: format string values when `msg` is a format string
   */
  fatal: LogWithLogIdFn;
  /**
   * Log at `'error'` level the given msg. If the second argument is an object, all its properties will be included in the JSON line.
   * If more args follows `msg`, these will be used to format `msg` using `util.format`.
   *
   * @typeParam T: the interface of the object being serialized. Default is object.
   * @param logId: Unique identifier for this log (generate one with [this tool](https://piattaforme-applicativi.github.io/LogIdGenerator/))
   * @param obj: object to be serialized
   * @param msg: the log message to write
   * @param ...args: format string values when `msg` is a format string
   */
  error: LogWithLogIdFn;
};
export type AsitLoggerOptions = LoggerOptions;
export function asitLogger(options?: AsitLoggerOptions): AsitLogger;

export * from "pino";
