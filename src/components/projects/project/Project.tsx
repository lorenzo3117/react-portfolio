import { IProject } from "../../../types/project.type";
import { ProjectLink } from "../project-link/ProjectLink";
import styles from "./Project.module.scss";

interface ProjectProps {
  project: IProject;
}

export const Project = ({ project }: ProjectProps) => {
  return (
    <article className="grow">
      <div>
        <img src={project.image} alt="" className={styles.img} />
        <h4>{project.name}</h4>
        <p>{project.description}</p>
      </div>
      <footer>
        {project.links.map((link) => (
          <ProjectLink link={link} />
        ))}
      </footer>
    </article>
  );
};
