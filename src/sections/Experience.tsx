import DynamicCardEX from "../components/UI/DynamicCardEX";
import styles from "./Experience.module.css";
import { useState, useEffect, useRef } from "react";

function Experience() {
  const [isInView, setIsInView] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

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
        if (entry.isIntersecting && !cardsVisible) {
          setCardsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = cardsContainerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [cardsVisible]);

  return (
    <section className={styles.experienceSection} data-section="experience">
      <h1
        ref={titleRef}
        className={`${styles.experienceTitle} ${isInView ? styles.inView : ""}`}
      >
        Experience
      </h1>
      <div
        ref={cardsContainerRef}
        className={`${styles.cardsContainer} ${
          cardsVisible ? styles.visible : ""
        }`}
      >
        <div>
          <DynamicCardEX
            title="Seguros Adriana Lastra"
            description="Insurance CRM System. Engineered a custom client management solution, handling the full lifecycle from requirements gathering to deployment.<br /> <br /> The system ensures strict data organization and features automated tools to track payment deadlines, generate printable PDF reports, and create personalized birthday cards to enhance client engagement."
            tags={[
              {
                id: "1",
                label: "React",
                icon: "/assets/React.svg",
                bgGradient: "linear-gradient(135deg, #61dafb, #1e90ff)",
              },
              {
                id: "2",
                label: "TypeScript",
                icon: "/assets/Typescript.svg",
                bgGradient: "linear-gradient(135deg, #6e95eaff, #2e34e4ff)",
              },
              {
                id: "3",
                label: "Css3",
                icon: "/assets/Css3.svg",
                bgGradient: "linear-gradient(135deg, #98b6ffff, #2e63ebff)",
              },
              {
                id: "3",
                label: "Node.js",
                icon: "/assets/Node.svg",
                bgGradient: "linear-gradient(135deg, #a8eaa1ff, #3dd22cff)",
              },
              {
                id: "4",
                label: "PostgreSQL",
                icon: "/assets/Postgre.svg",
                bgGradient: "linear-gradient(135deg, #9197deff, #3b44aeff)",
              },
              {
                id: "3",
                label: "Supabase",
                icon: "/assets/Supabase.svg",
                bgGradient: "linear-gradient(135deg, #74e18aff, #24ae4bff)",
              },
              {
                id: "4",
                label: "Git",
                icon: "/assets/Git.svg",
                bgGradient: "linear-gradient(135deg, #f8bd93ff, #ff9b20ff)",
              },
              {
                id: "5",
                label: "Hostinguer",
                icon: "/assets/Hostinguer.svg",
                bgGradient: "linear-gradient(135deg, #b390fbff, #7f47f0ff)",
              },
            ]}
            date="June 2025 - December 2025"
          />
        </div>
      </div>
    </section>
  );
}

export default Experience;
