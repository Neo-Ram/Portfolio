import styles from "./Projects.module.css";
import DynamicCardP from "../components/UI/DynamicCardP";
function Projects() {
  return (
    <section className={styles.projectsSection}>
      <h1 className={styles.projectsTitle}>Projects</h1>
      <div className={styles.cardsContainer}>
        <DynamicCardP
          preview="/PrismaPage.png"
          title="Sistema gestor de seguros"
          description="ads"
          tags={[
            {
              id: "1",
              label: "React",
              icon: "/src/assets/React.svg",
              bgGradient: "linear-gradient(135deg, #61dafb, #1e90ff)",
            },
          ]}
        />
        <DynamicCardP
          title="Sistema gestor de seguros"
          description="ads"
          tags={[
            {
              id: "1",
              label: "React",
              icon: "/src/assets/React.svg",
              bgGradient: "linear-gradient(135deg, #61dafb, #1e90ff)",
            },
          ]}
        />
        <DynamicCardP
          title="Sistema gestor de seguros"
          description="ads"
          tags={[
            {
              id: "1",
              label: "React",
              icon: "/src/assets/React.svg",
              bgGradient: "linear-gradient(135deg, #61dafb, #1e90ff)",
            },
          ]}
        />
      </div>
    </section>
  );
}

export default Projects;
