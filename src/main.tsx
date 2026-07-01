import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { getRouter } from "./router";
import { injectSeoHead } from "./seo/head";
import "./styles.css";

const router = getRouter();

router.subscribe("onResolved", () => {
  injectSeoHead(router.state.location.pathname);
});

injectSeoHead(window.location.pathname);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);