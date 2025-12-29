import styles from "./SkillCapsule.module.css";

type Props = {
  technology: string;
  title: string;
  color1: string;
  color2: string;
};
function SkillCapsule({ technology, title, color1, color2 }: Props) {
  return (
    <div
      className={styles.skillCapsule}
      style={{ background: `linear-gradient(135deg, ${color1}, ${color2})` }}
    >
      <img src={technology} alt="Technology Icon" />
      <h1>{title}</h1>
    </div>
  );
}

export default SkillCapsule;
