import DynamicCard from "../components/UI/DynamicCard";
import styles from "./Experience.module.css";

function Experience() {
  const experiences = [
    {
      title: "Sistema gestor de seguros",
      description:
        "Desarrollé un sistema gestor de seguros utilizando React para el frontend y Node.js para el backend. Implementé funcionalidades clave como la gestión de pólizas, clientes y reclamaciones, mejorando la eficiencia operativa en un 30%.",
      tags: [
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
          label: "Supabase",
          icon: "/src/assets/Supabase.svg",
          bgGradient: "linear-gradient(135deg, #74e18aff, #24ae4bff)",
        },
        {
          id: "4",
          label: "Hostinguer",
          icon: "/src/assets/Hostinguer.svg",
          bgGradient: "linear-gradient(135deg, #b390fbff, #7f47f0ff)",
        },
      ],
      date: "Enero 2022 - Diciembre 2022",
    },
    {
      title: "Aplicación web de análisis de datos",
      description:
        "Creé una aplicación web para análisis de datos en tiempo real con visualización de gráficos interactivos. Utilizé tecnologías modernas para asegurar un rendimiento óptimo.",
      tags: [
        {
          id: "1",
          label: "React",
          icon: "/src/assets/React.svg",
          bgGradient: "linear-gradient(135deg, #61dafb, #1e90ff)",
        },
        {
          id: "2",
          label: "Chart.js",
          icon: "/src/assets/ChartJS.svg",
          bgGradient: "linear-gradient(135deg, #ff6384, #ff9f40)",
        },
        {
          id: "3",
          label: "Node.js",
          icon: "/src/assets/NodeJS.svg",
          bgGradient: "linear-gradient(135deg, #68a063, #26a769)",
        },
      ],
      date: "Marzo 2023 - Agosto 2023",
    },
    {
      title: "API RESTful para e-commerce",
      description:
        "Diseñé y desarrollé una API RESTful completa para una plataforma de e-commerce con autenticación segura, gestión de inventario y procesamiento de pagos integrado.",
      tags: [
        {
          id: "1",
          label: "Node.js",
          icon: "/src/assets/NodeJS.svg",
          bgGradient: "linear-gradient(135deg, #68a063, #26a769)",
        },
        {
          id: "2",
          label: "Express",
          icon: "/src/assets/Express.svg",
          bgGradient: "linear-gradient(135deg, #000000, #333333)",
        },
        {
          id: "3",
          label: "MongoDB",
          icon: "/src/assets/MongoDB.svg",
          bgGradient: "linear-gradient(135deg, #13aa52, #0e7c3a)",
        },
        {
          id: "4",
          label: "JWT",
          icon: "/src/assets/JWT.svg",
          bgGradient: "linear-gradient(135deg, #000000, #333333)",
        },
      ],
      date: "Septiembre 2023 - Presente",
    },
  ];

  return (
    <section className={styles.experienceSection}>
      <h1 className={styles.experienceTitle}>--- Experience ---</h1>
      <div className={styles.timelineContainer}>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.timelineDate}>{exp.date}</div>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineCard}>
              <DynamicCard
                title={exp.title}
                description={exp.description}
                tags={exp.tags}
                date={exp.date}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
