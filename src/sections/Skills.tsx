import styles from "./Skills.module.css";
import SkillCapsule from "../components/UI/SkillCapsule";
import { useState, useEffect, useRef } from "react";

function Skills() {
  const [isInView, setIsInView] = useState(false);
  const [capsulesVisible, setCapsulesVisible] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const capsulesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 1,
      }
    );

    const currentRef = titleRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !capsulesVisible) {
          setCapsulesVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = capsulesContainerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [capsulesVisible]);

  return (
    <section className={styles.skillsSection} data-section="skills">
      <h1
        ref={titleRef}
        className={`${styles.skillsTitle} ${isInView ? styles.inView : ""}`}
      >
        Skills
      </h1>
      <div
        ref={capsulesContainerRef}
        className={`${styles.capsulesContainer} ${
          capsulesVisible ? styles.visible : ""
        }`}
      >
        <div>
          <SkillCapsule
            technology="/assets/React.svg"
            title="React"
            color1="#61dafb"
            color2="#1e90ff"
          />
        </div>
        <div>
          <SkillCapsule
            technology="/assets/Typescript.svg"
            title="TypeScript"
            color1="#6e95ea"
            color2="#2e34e4"
          />
        </div>
        <div>
          <SkillCapsule
            technology="/assets/JavaScript.svg"
            title="JavaScript"
            color1="#faed8bff"
            color2="#efd300ff"
          />
        </div>
        <div>
          <SkillCapsule
            technology="/assets/Html5.svg"
            title="HTML5"
            color1="#ffa64dff"
            color2="#fc673aff"
          />
        </div>
        <div>
          <SkillCapsule
            technology="/assets/Css3.svg"
            title="CSS3"
            color1="#98b6ffff"
            color2="#2e63ebff"
          />
        </div>
        <div>
          <SkillCapsule
            technology="/assets/Node.svg"
            title="Node.js"
            color1="#a8eaa1ff"
            color2="#3dd22cff"
          />
        </div>

        <div>
          <SkillCapsule
            technology="/assets/Git.svg"
            title="Git"
            color1="#f8bd93ff"
            color2="#ff9b20ff"
          />
        </div>
        <div>
          <SkillCapsule
            technology="/assets/Github.svg"
            title="GitHub"
            color1="#4a4a4aff"
            color2="#000000ff"
          />
        </div>

        <div>
          <SkillCapsule
            technology="/assets/Vercel.svg"
            title="Vercel"
            color1="#4e4e4e"
            color2="#111111"
          />
        </div>
        <div>
          <SkillCapsule
            technology="/assets/Npm.svg"
            title="NPM"
            color1="#fb7f7fff"
            color2="#c13333"
          />
        </div>
        <div>
          <SkillCapsule
            technology="/assets/Supabase.svg"
            title="Supabase"
            color1="#74e18aff"
            color2="#24ae4bff"
          />
        </div>
        <div>
          <SkillCapsule
            technology="/assets/Postgre.svg"
            title="PostgreSQL"
            color1="#9197deff"
            color2="#3b44aeff"
          />
        </div>

        <div>
          <SkillCapsule
            technology="/assets/Docker.svg"
            title="Docker"
            color1="#c392ffff"
            color2="#7631cbff"
          />
        </div>
      </div>
    </section>
  );
}

export default Skills;
