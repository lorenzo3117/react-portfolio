import { useTranslation } from "react-i18next";
import styles from "./Presentation.module.scss";
import { PresentationCard } from "./presentation-card/PresentationCard";

export const Presenation = () => {
  const { t } = useTranslation("presentation");

  return (
    <div className={styles.container}>
      <hgroup>
        <h1>Lorenzo Catalano</h1>
        <h2>{t("subtitle")}</h2>
      </hgroup>
      <PresentationCard />
    </div>
  );
};
