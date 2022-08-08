/* eslint-disable jsx-a11y/role-supports-aria-props */
import { useTranslation } from "react-i18next";
import { LANG } from "../../constants/lang";

export const LangSelector = () => {
  const { t, i18n } = useTranslation("nav");

  const handleClick = (e: any, lang: string) => {
    e.preventDefault();
    i18n.changeLanguage(lang);
  };

  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <details role="list" dir="rtl">
      <summary aria-haspopup="listbox" role="link">
        {t("lang")}
      </summary>
      <ul role="listbox">
        {LANG.map((lang, index) => (
          <li key={index}>
            <a href="." onClick={(e) => handleClick(e, lang.code)}>
              {lang.name}
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
};
