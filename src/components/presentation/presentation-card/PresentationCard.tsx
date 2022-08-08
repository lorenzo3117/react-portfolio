import { useTranslation } from "react-i18next";
import { LINKS } from "../../../constants/links";
import { Profile } from "../../icons/Profile";
import { Link } from "../../link/Link";
import styles from "./PresentationCard.module.scss";

export const PresentationCard = () => {
  const { t } = useTranslation("presentation");

  const { linkedin, github } = LINKS;

  return (
    <article>
      <div className={styles.header}>
        <Profile />
        <h4>{t("card.header")}</h4>
      </div>
      <p>{t("card.intro")}</p>
      <p>{t("card.body")}</p>
      <footer>
        <Link name={linkedin.name} url={linkedin.url} />
        <Link name={github.name} url={github.url} />
      </footer>
    </article>
  );
};
