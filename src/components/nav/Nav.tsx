import { useState } from "react";
import { useTranslation } from "react-i18next";
import { NAV } from "../../constants/nav";
import { LangSelector } from "../lang-selector/LangSelector";
import styles from "./Nav.module.scss";

export const Nav = () => {
  const { t } = useTranslation("nav");

  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  window.addEventListener("resize", handleResize);

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <strong>Lorenzo Catalano</strong>
        </li>
      </ul>
      <ul>
        {width >= 600 &&
          NAV.map((nav, index) => (
            <li key={index}>
              <a href={`#${nav}`}>{t(nav)}</a>
            </li>
          ))}
        <li>
          <LangSelector />
        </li>
      </ul>
    </nav>
  );
};
