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
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Xampp"],
    demoLink: "https://booking-system-ina.infinityfreeapp.com/",
    repoLink: "https://github.com/Alvaro499/Sistema-de-Reserva-de-Citas.git",
    projectLink: "https://booking-system-ina.infinityfreeapp.com/",
  },
  {
  title: "PyME Management Platform and Ecommerce – Microservices Architecture",
  description:
    "Group web project focused on building a real system using microservices architecture.",
  longDescription:
    "This is a group project developed for the Software Engineering course. The main goal was to simulate a real-world system by working as a team and using microservices architecture. The platform allows PyMEs to manage products, stock, promotions, orders, and user access. Each main feature was developed as an independent microservice to improve organization and scalability. The project also focused on using documentation, defining system rules, and following good practices similar to those used in real software projects.",
  featureImages: [
    {
      title: "Microservices Architecture Diagram",
      image: "/projects/pyme/microservices-diagram.jpg",
    },
    {
      title: "Main Public Landing Page",
      image: "/projects/pyme/principal-page-free-module.jpg",
    },
    {
      title: "User Registration for PyMEs",
      image: "/projects/pyme/pyme-register.jpg",
    },
    {
      title: "Login Options and Authentication Flow",
      image: "/projects/pyme/login-options.jpg",
    },
    {
      title: "Password Recovery Request",
      image: "/projects/pyme/pass-recovery.jpg",
    },
    {
      title: "Password Recovery Initialization",
      image: "/projects/pyme/password-recovery-init.jpg",
    },
    {
      title: "Password Recovery Email",
      image: "/projects/pyme/pass-recovery-email.jpg",
    },
    {
      title: "Email Verification Code",
      image: "/projects/pyme/pyme-verification-code.jpg",
    },
    {
      title: "Email Confirmation for PyME Account",
      image: "/projects/pyme/pyme-email-code.jpg",
    },
    {
      title: "PyME Admin Dashboard",
      image: "/projects/pyme/pyme-admin-module.jpg",
    },
    {
      title: "Product Management Module",
      image: "/projects/pyme/pyme-module-products.jpg",
    },
    {
      title: "Product Creation and Editing Form",
      image: "/projects/pyme/pyme-module-products-form.jpg",
    },
    {
      title: "Product Stock Management",
      image: "/projects/pyme/pyme-module-products-stock.jpg",
    },
    {
      title: "Promotions Management",
      image: "/projects/pyme/pyme-module-products-promo.jpg",
    },
    {
      title: "Product Search System",
      image: "/projects/pyme/product-search.jpg",
    },
    {
      title: "Advanced Product Search Filters",
      image: "/projects/pyme/advanced-product-search.jpg",
    },
    {
      title: "Shopping Cart",
      image: "/projects/pyme/cart.jpg",
    },
    {
      title: "Checkout Form",
      image: "/projects/pyme/checkout-form.jpg",
    },
    {
      title: "Order Detail Confirmation Email",
      image: "/projects/pyme/order-detail-email-1.jpg",
    },
    {
      title: "Order Status Update Email",
      image: "/projects/pyme/order-detail-email-2.jpg",
    },
  ],
  imageUrl: "/projects/pyme/principal-page-free-module.jpg",
  technologies: [
    "Java",
    "Spring Boot",
    "JPA / Hibernate",
    "PostgreSQL",
    "React",
    "TypeScript",
    "HTML",
    "CSS",
    "Eureka",
    "Kafka",
    "Bootstrap",
    "Microservices Architecture",
    "REST APIs",
  ],
  demoLink: "https://github.com/Alvaro499/sales-microservices.git",
  repoLink: "https://github.com/Alvaro499/sales-microservices.git",
  projectLink: "https://github.com/Alvaro499/sales-microservices.git",
},
  {
    title: "ICE Fault Management System",
    description:
      "Group project for managing and tracking faults in ICE substations, focusing on technical and supervisory reporting.",
    longDescription:
      "This was a group project developed to manage and track faults in ICE substations. Our work included collecting requirements, visiting substations, and communicating with ICE workers. The project was built using Angular, C#, ASP.NET, SQL Server, HTML, CSS, TypeScript, and Bootstrap. We followed a multi-layer architecture inspired by Clean Architecture principles, separating business rules, data access, and presentation. The goal was to organize the project structure clearly, maintain code quality, and implement rules to manage reports and users efficiently.",
    
      featureImages: [
      { title: "Admin Module", image: "/projects/ice/admin-module.jpg" },
      { title: "Supervisor Module", image: "/projects/ice/supervisor-module.jpg" },
      { title: "Protection Tech Report Editing Menu", image: "/projects/ice/protection-tech-report-editing-menu.jpg" },
      { title: "Protection Tech Report Editing", image: "/projects/ice/protection-tech-report-editing.jpg" },
      { title: "Protection Tech Report Overview", image: "/projects/ice/protection-tech-report-overview.jpg" },
      { title: "Operators Consultation", image: "/projects/ice/operators-consultation.jpg" },
      { title: "Entities Relation", image: "/projects/ice/entities-relation.jpg" },
      { title: "Regional Unit Consultation", image: "/projects/ice/regional-unit-consultation.jpg" },
      { title: "Add Regional Unit", image: "/projects/ice/add-regional-unit.jpg" },
      { title: "Supervisor Module - Watch Reports", image: "/projects/ice/supervisor-watch-reports.jpg" },
      { title: "Technician Lines Module", image: "/projects/ice/technician-lines.jpg" },
      { title: "Technician Lines Module Editing", image: "/projects/ice/technician-lines-editing.jpg" }
    ],
    imageUrl: "/projects/ice/admin-module.jpg",
    images: ["/projects/ice/admin-module.jpg"],
    technologies: ["Angular", "C#", "ASP.NET", "SQL Server", "HTML", "CSS", "TypeScript", "Bootstrap"],
    demoLink: "https://github.com/Alvaro499/ReporteriaICE-CopiaAlvaro.git",
    repoLink: "https://github.com/Alvaro499/ReporteriaICE-CopiaAlvaro.git",
    projectLink: "https://github.com/Alvaro499/ReporteriaICE-CopiaAlvaro.git"
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
    demoLink: "https://komodo.infinityfreeapp.com/",
    repoLink: "https://github.com/Alvaro499/komodo.git",
    projectLink: "https://komodo.infinityfreeapp.com/",
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
