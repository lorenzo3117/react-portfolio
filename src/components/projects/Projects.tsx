import { useTranslation } from "react-i18next";
import { ProjectsList } from "./projects-list/ProjectsList";

export const Projects = () => {
  const { t } = useTranslation("projects");

  return (
    <div id="projects">
      <h2>{t("title")}</h2>
      <ProjectsList />
    </div>
  );
};
