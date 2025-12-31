import { useState } from "react";
import ModalForProjects from "@/components/ModalForProjects/modal-for-projects";
import Link from "next/link";
import Image from "next/image";

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
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    demoLink: "https://www.google.com/?hl=es",
    repoLink: "https://github.com/Alvaro499/Sistema-de-Reserva-de-Citas.git",
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
  {
    title: "Komodo",
    description:
      "Personal web project developed to improve JavaScript fundamentals and HTML-CSS skills and techniques, featuring a product catalog, shopping cart, and order request flow.",
    longDescription:
      "Komodo is a personal frontend project created to strengthen my skills in HTML, CSS, and JavaScript. The website is about a small business product page, including sections such as home, product catalog, shopping cart, and a contact/order form. Users can browse products, add them to a cart, and submit an order request, but no payment gateway or real transaction processing is implemented. The project focuses on DOM manipulation, basic state handling, UI interactions, and responsive design.",
    featureImages: [
      {
        title: "Product Gallery",
        image: "/projects/komodo/product-gallery.jpg",
      },
      {
        title: "Product Review",
        image: "/projects/komodo/product-review.jpg",
      },
      {
        title: "Shopping Cart",
        image: "/projects/komodo/shopping-cart.jpg",
      },
      {
        title: "Functional Shopping Cart",
        image: "/projects/komodo/functional-shopping-cart.jpg",
      },
      {
        title: "Checkout Form",
        image: "/projects/komodo/checkout-form.jpg",
      },
      {
        title: "Order Summary Email",
        image: "/projects/komodo/order-summary-email.jpg",
      },
      {
        title: "Search System",
        image: "/projects/komodo/searcher.jpg",
      },
      {
        title: "Email Handling",
        image: "/projects/komodo/email-handling.jpg",
      },
      {
        title: "Responsive Design",
        image: "/projects/komodo/responsive.jpg",
      },
    ],
    imageUrl: "/projects/komodo/komodo-front-page.jpg",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "PHPMailer"],
    demoLink: "https://www.google.com/?hl=es",
    repoLink: "https://github.com/Alvaro499/komodo.git",
    projectLink: "https://www.google.com/?hl=es",
  },
  {
    title: "Maze of Books – Inventory Management System",
    description:
      "Group project developed in Java to manage a bookstore inventory, suppliers, orders, and users.",
    longDescription:
      "Maze of Books is a group project developed for the course Data Structures and Algorithms. The system was built using Java and JavaFX, with interfaces designed in SceneBuilder. It is a desktop application focused on managing a bookstore inventory using data structures concepts. The system is divided into three modules, where the administrator module includes full management features such as products, suppliers, orders, reports, and demand forecasting. Data is stored and managed using JSON files instead of a traditional database.",
    featureImages: [
      {
        title: "Admin Module Dashboard",
        image: "/projects/maze-of-books/admin-module.jpg",
      },
      {
        title: "Product Management",
        image: "/projects/maze-of-books/product-management.jpg",
      },
      {
        title: "Inventory Control",
        image: "/projects/maze-of-books/inventory-control.jpg",
      },
      {
        title: "Supplier Management",
        image: "/projects/maze-of-books/supplier-management.jpg",
      },
      {
        title: "Customer Management",
        image: "/projects/maze-of-books/customer-management.jpg",
      },
      {
        title: "Order Management",
        image: "/projects/maze-of-books/order-management.jpg",
      },
      {
        title: "Demand Forecasting",
        image: "/projects/maze-of-books/demand-forecasting.jpg",
      },
      {
        title: "Reports Module",
        image: "/projects/maze-of-books/reports.jpg",
      },
      {
        title: "Customer Module - Shopping Cart",
        image: "/projects/maze-of-books/shopping-cart.jpg",
      },
      {
        title: "Read-Only Module",
        image: "/projects/maze-of-books/read-only module.jpg",
      },
    ],
    imageUrl: "/projects/maze-of-books/admin-module.jpg",
    technologies: [
      "Java",
      "SceneBuilder",
      "JSON",
    ],
    demoLink: "https://www.google.com/?hl=es",
    repoLink: "https://github.com/Alvaro499/LaberintoLibros_2023.git",
    projectLink: "https://www.google.com/?hl=es",
  }


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
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={600}
                  height={400}
                  priority
                ></Image>
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
