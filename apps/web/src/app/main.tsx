import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@repo/ui/globals.css";
import { ThemeProvider } from "./providers/theme-provider";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");

createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider>
      <div></div>
    </ThemeProvider>
  </StrictMode>,
);
