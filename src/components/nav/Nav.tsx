import { useTranslation } from "react-i18next";
import { NAV } from "../../constants/nav";
import { LangSelector } from "../lang-selector/LangSelector";

export const Nav = () => {
  const { t } = useTranslation("nav");

  return (
    <nav>
      <ul>
        <li>
          <strong>Lorenzo Catalano</strong>
        </li>
      </ul>
      <ul>
        {NAV.map((nav, index) => (
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
