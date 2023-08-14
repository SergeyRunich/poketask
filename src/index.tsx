import React from "react";
import { createRoot } from "react-dom/client";
import { SWRConfig } from "swr";
import { fetcher } from "./api";
import App from "./App";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      <App />
    </SWRConfig>
  </React.StrictMode>
);
