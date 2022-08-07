import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import nl from "./nl.json";
import en from "./en.json"; // TODO

const _resources = {
  nl,
  en,
};

i18n.use(initReactI18next).init({
  resources: _resources,
  lng: "nl",
  keySeparator: ".",
});

export default i18n;
