import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en.json";
import nl from "./nl.json";

const _resources = {
  en,
  nl,
};

i18n.use(initReactI18next).init({
  resources: _resources,
  lng: "en",
  keySeparator: ".",
});

export default i18n;
