import Link from "next/link";
import Image from "next/image";
import styles from "./modal-for-projects.module.css";



export default function ModalForProjects({ isOpen = false, onClose = () => { }, project = null }) {
    if (!isOpen || !project) return null;

    const {
        title,
        longDescription,
        technologies = [],
        featureImages = [],
        demoLink,
        repoLink,
    } = project;

    return (
        <section className={styles.containerForModal} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>

                <header className={styles.modalHeader}>
                    <button
                        className={styles.closeBtnModal}
                        onClick={onClose}
                        aria-label="Close modal"
                    >
                        ✕
                    </button>

                    <div>
                        <h3>{title}</h3>
                    </div>
                </header>

                <div className={styles.modalInfo}>
                    <p className={styles.description}>{longDescription}</p>

                    <div className={styles.techSection}>
                        <span>Technologies used:</span>
                        <ul>
                            {technologies.map((tech, index) => (
                                <li key={index}>{tech}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className={styles.modalImagesContainer}>
                    <span>Features:</span>

                    {featureImages.map((item, index) => (
                        <div className={styles.modalImage} key={index}>
                            <p className={styles.featureTitle}>{item.title}</p>
                            <Image
                                src={item.image}
                                alt={`${title} - ${item.title}`}
                                width={800}
                                height={500}
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>

                <footer className={styles.modalFooter}>
                    {demoLink && (
                        <Link href={demoLink} target="_blank">
                            Watch Demo
                        </Link>
                    )}
                    {repoLink && (
                        <Link href={repoLink} target="_blank">
                            View Repository
                        </Link>
                    )}
                </footer>
            </div>
        </section>
    );
}
