import { useTranslation } from "react-i18next";

export const Resume = () => {
  const { t } = useTranslation("resume");

  return (
    <div id="resume">
      <h2>{t("title")}</h2>
      <embed
        src="./CV - Lorenzo Catalano.pdf"
        type="application/pdf"
        width="100%"
        height="1200px"
      />
    </div>
  );
};
