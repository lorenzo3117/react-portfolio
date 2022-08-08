import { SKILL_LEVEL_LIMIT } from "../../../constants/skills";
import { ISkill } from "../../../types/skill.type";
import styles from "./Skill.module.scss";

interface SkillProps {
  skill: ISkill;
}

export const Skill = ({ skill }: SkillProps) => {
  return (
    <div>
      <span>{skill.name}</span>
      <div className={styles.level}>
        <progress value={skill.level} max={SKILL_LEVEL_LIMIT}></progress>
        <span>{skill.level}</span>
      </div>
    </div>
  );
};
