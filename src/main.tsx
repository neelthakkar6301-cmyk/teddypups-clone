import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "@fontsource-variable/fraunces/full.css";
import "@fontsource-variable/figtree/index.css";
import "@fontsource-variable/shantell-sans/full.css";
import "./styles/variables.css";
import "./styles/global.css";
import "./styles/components.css";
import "./styles/home.css";
import "./styles/pages.css";
import "./styles/responsive.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
