import { useContext } from "react";
import { ProjectsContext } from "../context/projects.context";

export const useProjects = () => {
  return useContext(ProjectsContext);
};
