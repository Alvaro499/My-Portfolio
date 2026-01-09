import styles from "./AlertForPortfolio.module.css";

export default function Alert({ type, message, onClose }) {
  if (!message) return null;

  const icons = {
    success: "✓",
    error: "✕",
    warning: "⚠",
  };

  return (
    <div className={`${styles.alert} ${styles[type]}`}>
      <span className={styles.icon}>{icons[type]}</span>
      <span className={styles.message}>{message}</span>
      <button className={styles.closeBtn} onClick={onClose}>
        ×
      </button>
    </div>
  );
}
