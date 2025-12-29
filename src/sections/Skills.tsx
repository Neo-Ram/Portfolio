import styles from "./Skills.module.css";
import SkillCapsule from "../components/UI/SkillCapsule";
function Skills() {
  return (
    <section className={styles.skillsSection} data-section="skills">
      <h1 className={styles.skillsTitle}>Skills</h1>
      <div className={styles.capsulesContainer}>
        <SkillCapsule
          technology="/src/assets/React.svg"
          title="React"
          color1="#61dafb"
          color2="#1e90ff"
        />
        <SkillCapsule
          technology="/src/assets/TypeScript.svg"
          title="TypeScript"
          color1="#6e95ea"
          color2="#2e34e4"
        />
        <SkillCapsule
          technology="/src/assets/JavaScript.svg"
          title="JavaScript"
          color1="#faed8bff"
          color2="#efd300ff"
        />
        <SkillCapsule
          technology="/src/assets/HTML5.svg"
          title="HTML5"
          color1="#ffa64dff"
          color2="#fc673aff"
        />
        <SkillCapsule
          technology="/src/assets/CSS3.svg"
          title="CSS3"
          color1="#98b6ffff"
          color2="#2e63ebff"
        />
        <SkillCapsule
          technology="/src/assets/Node.svg"
          title="Node.js"
          color1="#a8eaa1ff"
          color2="#3dd22cff"
        />

        <SkillCapsule
          technology="/src/assets/Git.svg"
          title="Git"
          color1="#f8bd93ff"
          color2="#ff9b20ff"
        />
        <SkillCapsule
          technology="/src/assets/Github.svg"
          title="GitHub"
          color1="#4a4a4aff"
          color2="#000000ff"
        />

        <SkillCapsule
          technology="/src/assets/Vercel.svg"
          title="Vercel"
          color1="#4e4e4e"
          color2="#111111"
        />
        <SkillCapsule
          technology="/src/assets/Npm.svg"
          title="NPM"
          color1="#fb7f7fff"
          color2="#c13333"
        />
        <SkillCapsule
          technology="/src/assets/Supabase.svg"
          title="Supabase"
          color1="#74e18aff"
          color2="#24ae4bff"
        />
        <SkillCapsule
          technology="/src/assets/Postgre.svg"
          title="PostgreSQL"
          color1="#9197deff"
          color2="#3b44aeff"
        />

        <SkillCapsule
          technology="/src/assets/Docker.svg"
          title="Docker"
          color1="#c392ffff"
          color2="#7631cbff"
        />
      </div>
    </section>
  );
}

export default Skills;
