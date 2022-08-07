import { useTranslation } from "react-i18next";

interface LinkProps {
  name: string;
  url: string;
}

export const Link = ({ name, url }: LinkProps) => {
  const { t } = useTranslation("links");

  const linkProps = {
    href: url,
    className: "outline",
    role: "button",
    target: "_blank",
    rel: "noopener noreferrer",
  };

  return <a {...linkProps}>{t(name)}</a>;
};
