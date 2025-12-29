import styles from "./Projects.module.css";
import DynamicCardP from "../components/UI/DynamicCardP";
function Projects() {
  return (
    <section className={styles.projectsSection}>
      <h1 className={styles.projectsTitle}>Projects</h1>
      <div className={styles.cardsContainer}>
        <DynamicCardP
          preview="/Prismanpm.png"
          title="Accessible React Component Library"
          description="A React component library designed to help developers seamlessly adapt web interfaces for various types of color blindness."
          tags={[
            {
              id: "1",
              label: "React",
              icon: "/src/assets/React.svg",
              bgGradient: "linear-gradient(135deg, #61dafb, #1e90ff)",
            },
            {
              id: "2",
              label: "TypeScript",
              icon: "/src/assets/TypeScript.svg",
              bgGradient: "linear-gradient(135deg, #6e95eaff, #2e34e4ff)",
            },
            {
              id: "3",
              label: "Css3",
              icon: "/src/assets/Css3.svg",
              bgGradient: "linear-gradient(135deg, #98b6ffff, #2e63ebff)",
            },
            {
              id: "3",
              label: "Git",
              icon: "/src/assets/Git.svg",
              bgGradient: "linear-gradient(135deg, #f8bd93ff, #ff9b20ff)",
            },
            {
              id: "4",
              label: "NPM",
              icon: "/src/assets/Npm.svg",
              bgGradient: "linear-gradient(135deg, #f26060ff, #c13333ff)",
            },

            {
              id: "5",
              label: "Node.js",
              icon: "/src/assets/Node.svg",
              bgGradient: "linear-gradient(135deg, #a8eaa1ff, #3dd22cff)",
            },
          ]}
        />
        <DynamicCardP
          preview="/PrismaPage.png"
          title="Design System & Usage Guide"
          description="An organized catalog of the visual library, demonstrating architectural patterns and best practices for integrating color-safe elements."
          tags={[
            {
              id: "1",
              label: "React",
              icon: "/src/assets/React.svg",
              bgGradient: "linear-gradient(135deg, #61dafb, #1e90ff)",
            },
            {
              id: "2",
              label: "TypeScript",
              icon: "/src/assets/TypeScript.svg",
              bgGradient: "linear-gradient(135deg, #6e95eaff, #2e34e4ff)",
            },
            {
              id: "3",
              label: "Css3",
              icon: "/src/assets/Css3.svg",
              bgGradient: "linear-gradient(135deg, #98b6ffff, #2e63ebff)",
            },
            {
              id: "4",
              label: "Git",
              icon: "/src/assets/Git.svg",
              bgGradient: "linear-gradient(135deg, #f8bd93ff, #ff9b20ff)",
            },
            {
              id: "4",
              label: "NPM",
              icon: "/src/assets/Npm.svg",
              bgGradient: "linear-gradient(135deg, #f26060ff, #c13333ff)",
            },
            {
              id: "5",
              label: "Node.js",
              icon: "/src/assets/Node.svg",
              bgGradient: "linear-gradient(135deg, #a8eaa1ff, #3dd22cff)",
            },
            {
              id: "6",
              label: "Vercel",
              icon: "/src/assets/Vercel.svg",
              bgGradient: "linear-gradient(135deg, #4e4e4eff, #111111ff)",
            },
          ]}
        />
        <DynamicCardP
          preview="/Comingsoon.png"
          title="Weather Notes"
          description="A web application that allows users to take notes based on real-time weather conditions in their location."
          tags={[
            {
              id: "1",
              label: "React",
              icon: "/src/assets/React.svg",
              bgGradient: "linear-gradient(135deg, #61dafb, #1e90ff)",
            },
            {
              id: "1",
              label: "TypeScript",
              icon: "/src/assets/TypeScript.svg",
              bgGradient: "linear-gradient(135deg, #6e95eaff, #2e34e4ff)",
            },
          ]}
        />
      </div>
    </section>
  );
}

export default Projects;
