import Link from "next/link";

import styles from "@/styles/project-section.module.css";

const myProjects = [
    {   title: "Project One", 
        description: "Description for project one.",
        imageUrl: "/projects/project00.png",
        projectLink: "https://www.google.com/?hl=es"
    },
    {   title: "Project One", 
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora ut inventore magnam deleniti neque? Sint, inventore magni esse minus ea quo minima quidem iusto corrupti temporibus, recusandae, dolorem quos aperiam lorem lorem loremloremloremloremloremloremloremloremloremloremloremlorem..",
        imageUrl: "/projects/project00.png",
        projectLink: "https://www.google.com/?hl=es"
    },
    {   title: "Project One", 
        description: "Description for project one.",
        imageUrl: "/projects/project00.png",
        projectLink: "https://www.google.com/?hl=es"
    },
    {   title: "Project One", 
        description: "Description for project one.",
        imageUrl: "/projects/project00.png",
        projectLink: "https://www.google.com/?hl=es"
    },
    {   title: "Project One", 
        description: "Description for project one.",
        imageUrl: "/projects/project00.png",
        projectLink: "https://www.google.com/?hl=es"
    }

]
export default function ProjectSection() {

    return (
        <>

            <section className={styles.container}>
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
                                <Link href={project.projectLink}>Ver Más</Link>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </section>
        </>
    )


}