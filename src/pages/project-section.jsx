import { useState } from "react";
import ModalForProjects from "@/components/ModalForProjects/modal-for-projects";
import Link from "next/link";
import styles from "@/styles/project-section.module.css";

const myProjects = [
  {
    title: "GAPA Reservations Appointements",
    description:
      "Sistema de gestión de citas para la empresa de Contabilidad GAPA.",
    longDescription:
      "Sistema de gestión de citas para la empresa de Contabilidad GAPA. Los usuarios pueden registrarse, solicitar reuniones, recibir notificaciones por correo y administrar su historial de citas.",
    imageUrl: "/projects/project00.png",
    images: ["/projects/project00.png", "/projects/project00.png"],
    technologies: ["React", "Next.js", "CSS Modules"],
    demoLink: "https://www.google.com/?hl=es",
    repoLink: "https://www.google.com/?hl=es",
    projectLink: "https://www.google.com/?hl=es",
  },
  {
    title: "Komodo",
    description:
      "Komodo Page, página para la promoción y venta de productos.",
    longDescription:
      "Página web para la promoción y venta de productos desarrollada con HTML, CSS y JavaScript puro. Incluye carrito de compras y navegación entre páginas.",
    imageUrl: "/projects/project00.png",
    images: ["/projects/project00.png","/projects/project00.png","/projects/project00.png"],
    technologies: ["HTML", "CSS", "JavaScript"],
    demoLink: "https://www.google.com/?hl=es",
    repoLink: "https://www.google.com/?hl=es",
    projectLink: "https://www.google.com/?hl=es",
  },
  {
    title: "Project From ICE",
    description:
      "Proyecto para la gestión y control de fallas.",
    longDescription:
      "Sistema interno para el control y seguimiento de fallas en subestaciones del ICE de Turrialba.Sistema interno para el control y seguimiento de fallas en subestaciones del ICE de Turrialba. Sistema interno para el control y seguimiento de fallas en subestaciones del ICE de Turrialba. Sistema interno para el control y seguimiento de fallas en subestaciones del ICE de Turrialba. Sistema interno para el control y seguimiento de fallas en subestaciones del ICE de Turrialba. Sistema interno para el control y seguimiento de fallas en subestaciones del ICE de Turrialba.Sistema interno para el control y seguimiento de fallas en subestaciones del ICE de Turrialba.Sistema interno para el control y seguimiento de fallas en subestaciones del ICE de Turrialba.Sistema interno para el control y seguimiento de fallas en subestaciones del ICE de Turrialba.Sistema interno para el control y seguimiento de fallas en subestaciones del ICE de Turrialba.Sistema interno para el control y seguimiento de fallas en subestaciones del ICE de Turrialba.Sistema interno para el control y seguimiento de fallas en subestaciones del ICE de Turrialba.",
    imageUrl: "/projects/project00.png",
    images: ["/projects/project00.png"],
    technologies: ["Java", "Spring Boot", "PostgreSQL"],
    demoLink: "https://www.google.com/?hl=es",
    repoLink: "https://www.google.com/?hl=es",
    projectLink: "https://www.google.com/?hl=es",
  },
];

export default function ProjectSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <section className={styles.container} id="projects">
        <h2>Some of my Projects</h2>

        <div className={styles.cardContainer}>
          {myProjects.map((project, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.cardImage}>
                <img src={project.imageUrl} alt={project.title} />
              </div>

              <div className={styles.cardTitle}>
                <h4>{project.title}</h4>
              </div>

              <div className={styles.cardBody}>
                <p>{project.description}</p>
              </div>

              <div className={styles.cardBtn}>
                <Link
                  href={project.projectLink}
                  onClick={(e) => {
                    e.preventDefault();
                    openModal(project);
                  }}
                >
                  View More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ModalForProjects
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </>
  );
}
