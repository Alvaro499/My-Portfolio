import Link from "next/link";
import styles from "./modal-for-projects.module.css";

export default function ModalForProjects({isOpen = false, onClose = () => {}, project = null}) {
  if (!isOpen || !project) return null;

  const {
    title,
    longDescription,
    technologies = [],
    images = [],
    demoLink,
    repoLink,
  } = project;

  return (
    <section className={styles.containerForModal}>
      <div className={styles.modal}>
        <button
          className={styles.closeBtnModal}
          onClick={onClose}
          aria-label="Close modal"
        >
          ✕
        </button>

        <header className={styles.modalHeader}>
          <h3>{title}</h3>
        </header>

        <div className={styles.modalInfo}>
          <p className={styles.description}>{longDescription}</p>

          <div className={styles.techSection}>
            <span>Technologies used</span>
            <ul>
              {technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.modalImages}>
          {images.map((img, index) => (
            <img key={index} src={img} alt={`${title} screenshot ${index + 1}`} />
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
