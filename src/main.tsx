import global_en from "@/translations/en/global.json";
import global_fr from "@/translations/fr/global.json";
import i18next from "i18next";
import React from "react";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import App from "./App.tsx";
import "./index.css";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "fr",
  resources: {
    fr: {
      global: global_fr,
    },
    en: {
      global: global_en,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
