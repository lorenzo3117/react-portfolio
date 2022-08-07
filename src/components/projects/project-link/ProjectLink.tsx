import { useTranslation } from "react-i18next";
import { ILink, ILinkTypes } from "../../../types/project.type";
import { Link } from "../../link/Link";

interface ProjectLinkProps {
  link: ILink;
}

export const ProjectLink = ({ link }: ProjectLinkProps) => {
  const { t } = useTranslation("links");

  switch (link.type) {
    case ILinkTypes.WEBSITE:
      return <Link name={t("website")} url={link.url} />;
    case ILinkTypes.GITHUB:
      return <Link name={t("github")} url={link.url} />;
    default:
      return <></>;
  }
};
