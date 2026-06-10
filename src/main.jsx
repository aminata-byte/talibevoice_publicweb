import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { PartnerAuthProvider } from "./context/PartnerAuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PartnerAuthProvider>
      <App />
    </PartnerAuthProvider>
  </StrictMode>,
);
