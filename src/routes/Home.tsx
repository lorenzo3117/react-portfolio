import { Contact } from "../components/contact/Contact";
import { Presenation } from "../components/presentation/Presentation";
import { Projects } from "../components/projects/Projects";
import { Resume } from "../components/resume/Resume";
import { Skills } from "../components/skills/Skills";

export const Home = () => {
  return (
    <div className="page">
      <Presenation />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
    </div>
  );
};
