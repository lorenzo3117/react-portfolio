import { useTranslation } from "react-i18next";
import { LINKS } from "../../constants/links";
import styles from "./Contact.module.scss";

export const Contact = () => {
  const { t } = useTranslation("contact");

  const links = Object.values(LINKS);

  return (
    <div id="contact">
      <h2>{t("title")}</h2>
      <div className={styles.container}>
        {links.map((link) => (
          <p>
            {t(link.name)}:{" "}
            <a href={link.url} target="_blank" rel="noreferrer">
              {link.description}
            </a>
          </p>
        ))}
      </div>
    </div>
  );
};
