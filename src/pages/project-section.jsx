import Link from "next/link";

import styles from "@/styles/project-section.module.css";

const myProjects = [
    {   title: "GAPA Reservations Appointements", 
        description: "Sistema de gestión de citas para la empresa de Contabilidad GAPA. Los usuarios se registran y pueden solicitar reuniones detalladas. Además de recibir de notifiaciones con respecto",
        imageUrl: "/projects/project00.png",
        projectLink: "https://www.google.com/?hl=es"
    },
    {   title: "Komodo", 
        description: "Komodo Page, página para la promoción y venta de productos. Desarrollada con HTML, CSS y Vanila JS. posee carrito, paginas y ",
        imageUrl: "/projects/project00.png",
        projectLink: "https://www.google.com/?hl=es"
    },

    {   title: "Project From ICE", 
        description: "Proyecto para la gestión y control fallas de las subestaciones del ICE de Turrialba",
        imageUrl: "/projects/project00.png",
        projectLink: "https://www.google.com/?hl=es"
    },

    {   title: "Book Puzzle", 
        description: "Aplicación de una tienda para la compra, venta y grstión de productos enfocados en libros.",
        imageUrl: "/projects/project00.png",
        projectLink: "https://www.google.com/?hl=es"
    },
    {   title: "Tienda", 
        description: "Tienda desa",
        imageUrl: "/projects/project00.png",
        projectLink: "https://www.google.com/?hl=es"
    }
]
export default function ProjectSection() {

    return (
        <>

            <section className={styles.container} id="projects">
                <h2>Some of my Projects</h2>
                <div className={styles.cardContainer}>

                    {myProjects.map((project) => (

                        <div className={styles.card}>
                            <div className={styles.cardImage}>
                                <img 
                                    src={`${project.imageUrl}`}
                                    alt={project.title}
                                />
                            </div>
                            <div className={styles.cardTitle}>
                                <h4>{project.title}</h4>
                            </div>
                            <div className={styles.cardBody}>
                                <p>{project.description}</p>
                            </div>
                            <div className={styles.cardBtn}>
                                <Link href={project.projectLink}>View More</Link>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </section>
        </>
    )


}