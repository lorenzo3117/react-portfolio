import { useTranslation } from "react-i18next";
import {
  SOFTWARE_SKILLS,
  MOBILE_SKILLS,
  WEB_SKILLS,
} from "../../constants/skills";
import { Skill } from "./skill/Skill";
import styles from "./Skills.module.scss";

export const Skills = () => {
  const { t } = useTranslation("skills");

  return (
    <div id="skills">
      <h2>{t("title")}</h2>
      <div className={styles.container}>
        <div>
          <h4>{t("web")}</h4>
          <div className={styles.skills}>
            {WEB_SKILLS.map((skill, index) => (
              <Skill key={index} skill={skill} />
            ))}
          </div>
        </div>
        <div>
          <h4>{t("mobile")}</h4>
          <div className={styles.skills}>
            {MOBILE_SKILLS.map((skill, index) => (
              <Skill key={index} skill={skill} />
            ))}
          </div>
        </div>
        <div>
          <h4>{t("software")}</h4>
          <div className={styles.skills}>
            {SOFTWARE_SKILLS.map((skill, index) => (
              <Skill key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
