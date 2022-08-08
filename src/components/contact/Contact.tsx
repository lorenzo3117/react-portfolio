import { useTranslation } from "react-i18next";
import { LINKS } from "../../constants/links";
import styles from "./Contact.module.scss";

export const Contact = () => {
  const c = useTranslation("contact");
  const l = useTranslation("links");

  const links = Object.values(LINKS);

  return (
    <div id="contact">
      <h2>{c.t("title")}</h2>
      <div className={styles.container}>
        {links.map((link, index) => (
          <p key={index}>
            {l.t(link.name)}:{" "}
            <a href={link.url} target="_blank" rel="noreferrer">
              {link.description}
            </a>
          </p>
        ))}
      </div>
    </div>
  );
};
