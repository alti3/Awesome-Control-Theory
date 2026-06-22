let lastCapturedError: unknown;

export function captureError(error: unknown) {
  lastCapturedError = error;
}

export function consumeLastCapturedError() {
  const error = lastCapturedError;
  lastCapturedError = undefined;
  return error;
}

if (typeof process !== "undefined") {
  process.on?.("uncaughtException", captureError);
  process.on?.("unhandledRejection", captureError);
}
