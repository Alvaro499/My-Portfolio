import { useState } from "react";
import ModalForProjects from "@/components/ModalForProjects/modal-for-projects";
import Link from "next/link";
import styles from "@/styles/project-section.module.css";

const myProjects = [
  {
    title: "GAPA Appointment Reservation System",
    description:
      "Web system for managing client appointments for the accounting company GAPA.",
    longDescription:
      "This project was developed as a graduation project for the Web Design and Development technician program. The goal was to create a digital solution for the accounting company GAPA to manage client appointments more efficiently, replacing manual scheduling processes with an organized and automated system.",
    featureImages: [

      {
        title: "Appointments Dashboard",
        image: "/projects/gapa/front-page-img.jpg",
      },
      {
        title: "Login",
        image: "/projects/gapa/login.jpg",
      },
      {
        title: "Password Recovery",
        image: "/projects/gapa/pass-recovery.jpg",
      },
      {
        title: "User Registration (Employess or Clients)",
        image: "/projects/gapa/user-register-success.jpg",
      },
      {
        title: "Appointment Reservation System",
        image: "/projects/gapa/list-of-appointments.jpg",
      },
      {
        title: "Notification System",
        image: "/projects/gapa/notification-system.jpg",
      },
      {
        title: "Mass Email Sending",
        image: "/projects/gapa/spam-emails.jpg",
      },
      {
        title: "Personal Information Overview",
        image: "/projects/gapa/user-info.jpg",
      }
    ],
    imageUrl: "/projects/gapa/front-page-img.jpg",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    demoLink: "https://www.google.com/?hl=es",
    repoLink: "https://github.com/Alvaro499/Sistema-de-Reserva-de-Citas.git",
    projectLink: "https://www.google.com/?hl=es",
  },


  {
    title: "Komodo",
    description:
      "Página Personal para una empresa o negocio pequeño y/o mediano, donde pueda vender y mostrar sus productos, con un estilo y diseño moderno. Que además incluye un sistema de carrito de compras, galeria, descarga de imagenes entre otras funcionalidades",
    longDescription:
      "Página web para la promoción y venta de productos desarrollada con HTML, CSS y JavaScript puro. Incluye carrito de compras y navegación entre páginas.",
    imageUrl: "/projects/project00.png",
    images: ["/projects/project00.png", "/projects/project00.png", "/projects/project00.png"],
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
