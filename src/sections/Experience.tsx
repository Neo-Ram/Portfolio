import DynamicCardEX from "../components/UI/DynamicCardEX";
import styles from "./Experience.module.css";
function Experience() {
  return (
    <section className={styles.experienceSection} data-section="experience">
      <h1 className={styles.experienceTitle}>Experience</h1>
      <div className={styles.cardsContainer}>
        <DynamicCardEX
          title="Sistema gestor de seguros"
          description="Desarrollé un sistema gestor de seguros utilizando React para el frontend y Node.js para el backend. Implementé funcionalidades clave como la gestión de pólizas, clientes y reclamaciones, mejorando la eficiencia operativa en un 30%."
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
              label: "Node.js",
              icon: "/src/assets/Node.svg",
              bgGradient: "linear-gradient(135deg, #a8eaa1ff, #3dd22cff)",
            },
            {
              id: "4",
              label: "PostgreSQL",
              icon: "/src/assets/Postgre.svg",
              bgGradient: "linear-gradient(135deg, #9197deff, #3b44aeff)",
            },
            {
              id: "3",
              label: "Supabase",
              icon: "/src/assets/Supabase.svg",
              bgGradient: "linear-gradient(135deg, #74e18aff, #24ae4bff)",
            },
            {
              id: "4",
              label: "Git",
              icon: "/src/assets/Git.svg",
              bgGradient: "linear-gradient(135deg, #f8bd93ff, #ff9b20ff)",
            },
            {
              id: "5",
              label: "Hostinguer",
              icon: "/src/assets/Hostinguer.svg",
              bgGradient: "linear-gradient(135deg, #b390fbff, #7f47f0ff)",
            },
          ]}
          date="Enero 2022 - Diciembre 2022"
        />
      </div>
    </section>
  );
}

export default Experience;
