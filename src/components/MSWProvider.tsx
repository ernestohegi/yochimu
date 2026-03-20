"use client";

import { useEffect } from "react";

let workerStarted = false;

type MSWProviderProps = {
  children: React.ReactNode;
};

export const MSWProvider = ({ children }: MSWProviderProps) => {
  useEffect(() => {
    if (process.env.NODE_ENV !== "development" || workerStarted) {
      return;
    }

    workerStarted = true;

    void import("@/mocks/browser").then(async ({ worker }) => {
      await worker.start({
        onUnhandledRequest: "bypass",
      });
    });
  }, []);

  return <>{children}</>;
};
