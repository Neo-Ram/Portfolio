import styles from "./Projects.module.css";
import DynamicCardP from "../components/UI/DynamicCardP";
import { useState, useEffect, useRef } from "react";

function Projects() {
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
    <section className={styles.projectsSection} data-section="projects">
      <h1
        ref={titleRef}
        className={`${styles.projectsTitle} ${isInView ? styles.inView : ""}`}
      >
        Projects
      </h1>
      <div
        ref={cardsContainerRef}
        className={`${styles.cardsContainer} ${
          cardsVisible ? styles.visible : ""
        }`}
      >
        <div>
          <DynamicCardP
            preview="/Prismanpm.png"
            title="Accessible React Component Library"
            description="A React component library designed to help developers seamlessly adapt web interfaces for various types of color blindness."
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
                label: "Git",
                icon: "/assets/Git.svg",
                bgGradient: "linear-gradient(135deg, #f8bd93ff, #ff9b20ff)",
              },
              {
                id: "4",
                label: "NPM",
                icon: "/assets/Npm.svg",
                bgGradient: "linear-gradient(135deg, #f26060ff, #c13333ff)",
              },

              {
                id: "5",
                label: "Node.js",
                icon: "/assets/Node.svg",
                bgGradient: "linear-gradient(135deg, #a8eaa1ff, #3dd22cff)",
              },
            ]}
            projectLink="https://www.npmjs.com/package/neo-ram-prisma?activeTab=readme"
            githubLink="https://github.com/Neo-Ram/prisma-ui-library"
          />
        </div>
        <div>
          <DynamicCardP
            preview="/PrismaPage.png"
            title="Design System & Usage Guide"
            description="An organized catalog of the visual library, demonstrating architectural patterns and best practices for integrating color-safe elements."
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
                id: "4",
                label: "Git",
                icon: "/assets/Git.svg",
                bgGradient: "linear-gradient(135deg, #f8bd93ff, #ff9b20ff)",
              },
              {
                id: "4",
                label: "NPM",
                icon: "/assets/Npm.svg",
                bgGradient: "linear-gradient(135deg, #f26060ff, #c13333ff)",
              },
              {
                id: "5",
                label: "Node.js",
                icon: "/assets/Node.svg",
                bgGradient: "linear-gradient(135deg, #a8eaa1ff, #3dd22cff)",
              },
              {
                id: "6",
                label: "Vercel",
                icon: "/assets/Vercel.svg",
                bgGradient: "linear-gradient(135deg, #4e4e4eff, #111111ff)",
              },
            ]}
            projectLink="https://prisma-drab.vercel.app/"
            githubLink="https://github.com/Neo-Ram/Prisma"
          />
        </div>
        <div>
          <DynamicCardP
            preview="/Comingsoon.png"
            title="Weather Notes"
            description="A web application that allows users to take notes based on real-time weather conditions in their location."
            tags={[
              {
                id: "1",
                label: "React",
                icon: "/assets/React.svg",
                bgGradient: "linear-gradient(135deg, #61dafb, #1e90ff)",
              },
              {
                id: "1",
                label: "TypeScript",
                icon: "/assets/Typescript.svg",
                bgGradient: "linear-gradient(135deg, #6e95eaff, #2e34e4ff)",
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
