import { createContext, useState } from "react";
import { PROJECTS } from "../constants/projects";
import { IProject } from "../types/project.type";

interface IProjectsAPI {
  isLoading: boolean;
  hasError: boolean;
  getAll: () => void;
  all: IProject[];
}

const _defaultState: IProjectsAPI = {
  isLoading: false,
  hasError: false,
  getAll: () => {},
  all: [],
};

export const ProjectsContext = createContext<IProjectsAPI>(_defaultState);

export const ProjectsProvider = ({ children }: any) => {
  const [_loading, _setIsLoading] = useState(_defaultState.isLoading);
  const [_hasError, _setHasError] = useState(_defaultState.hasError);
  const [_all, _setAll] = useState(_defaultState.all);

  const _getAll = async () => {
    _setIsLoading(true);
    // Emulate API waiting time
    await new Promise((r) => setTimeout(r, 1000));
    _setAll(PROJECTS);
    _setIsLoading(false);
  };

  const _value: IProjectsAPI = {
    isLoading: _loading,
    hasError: _hasError,
    getAll: _getAll,
    all: _all,
  };

  return (
    <ProjectsContext.Provider value={_value}>
      {children}
    </ProjectsContext.Provider>
  );
};
