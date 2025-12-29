import styles from "./header.module.css";
import { useState, useEffect, useRef } from "react";

function Header() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Solo actualizar el estado si no estamos en un scroll manual
      if (isScrollingRef.current) return;

      const sections = [
        { id: "home", offset: 0 },
        {
          id: "experience",
          element: document.querySelector("[data-section='experience']"),
        },
        {
          id: "projects",
          element: document.querySelector("[data-section='projects']"),
        },
        {
          id: "skills",
          element: document.querySelector("[data-section='skills']"),
        },
      ];

      let currentSection = "home";

      sections.forEach((section) => {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 200) {
            currentSection = section.id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    let element;

    // Marcar que estamos haciendo scroll manual
    isScrollingRef.current = true;
    setActiveSection(sectionId);

    // Limpiar timeout anterior si existe
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      element = document.querySelector(`[data-section='${sectionId}']`);
      if (element) {
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - 50; // 100px de padding arriba
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }

    // Después de 1 segundo, permitir que el scroll listener actualice de nuevo
    scrollTimeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false;
    }, 1000);
  };

  return (
    <header className={styles.header}>
      <p className={styles.txt}>Ramon Franco</p>
      <ul className={styles.list}>
        <li>
          <a
            className={`${styles.links} ${
              activeSection === "home" ? styles.active : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
          >
            Home
          </a>
        </li>
        <li>
          <a
            className={`${styles.links} ${
              activeSection === "experience" ? styles.active : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("experience");
            }}
          >
            Experience
          </a>
        </li>
        <li>
          <a
            className={`${styles.links} ${
              activeSection === "projects" ? styles.active : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("projects");
            }}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            className={`${styles.links} ${
              activeSection === "skills" ? styles.active : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("skills");
            }}
          >
            Skills
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
