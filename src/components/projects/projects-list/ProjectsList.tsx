import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useProjects } from "../../../hooks/use-projects";
import { Spinner } from "../../spinner/Spinner";
import { Project } from "../project/Project";
import styles from "./ProjectsList.module.scss";

export const ProjectsList = () => {
  const { t } = useTranslation("projects");
  const { getAll, isLoading, hasError, all } = useProjects();

  useEffect(() => {
    getAll();
  }, []);

  if (isLoading) return <Spinner text={t("loading")} />;
  if (hasError) return <p>{t("error")}</p>;

  return (
    <div className={styles.container}>
      {all.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};
