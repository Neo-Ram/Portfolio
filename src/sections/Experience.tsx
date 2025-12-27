import DynamicCard from "../components/UI/DynamicCard";
import styles from "./Experience.module.css";
function Experience() {
  return (
    <section className={styles.experienceSection}>
      <h1 className={styles.experienceTitle}>--- Experience ---</h1>
      <DynamicCard
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
            id: "1",
            label: "TypeScript",
            icon: "/src/assets/TypeScript.svg",
            bgGradient: "linear-gradient(135deg, #6e95eaff, #2e34e4ff)",
          },
          {
            id: "1",
            label: "Supabase",
            icon: "/src/assets/Supabase.svg",
            bgGradient: "linear-gradient(135deg, #74e18aff, #24ae4bff)",
          },
          {
            id: "1",
            label: "Hostinguer",
            icon: "/src/assets/Hostinguer.svg",
            bgGradient: "linear-gradient(135deg, #b390fbff, #7f47f0ff)",
          },
        ]}
        date="Enero 2022 - Diciembre 2022"
      />
    </section>
  );
}

export default Experience;
