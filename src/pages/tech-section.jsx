import styles from "@/styles/tech-section.module.css";

const technologies = [
  { name: "HTML5", icon: "html5.svg", color: "#E34F26" },
  { name: "CSS3", icon: "css.svg", color: "#1572B6" },
  { name: "JavaScript", icon: "javascript.svg", color: "#F7DF1E" },
  { name: "React", icon: "react.svg", color: "#61DAFB" },
  { name: "Bootstrap", icon: "bootstrap.svg", color: "#7952B3" },
  { name: "Node.js", icon: "nodedotjs.svg", color: "#339933" },
  { name: "Git", icon: "git.svg", color: "#F05032" },
  { name: "GitHub", icon: "github.svg", color: "#181717" },
  { name: "Java", icon: "java.svg", color: "#007396" },
  { name: "Spring Boot", icon: "springboot.svg", color: "#6DB33F" },
  { name: "PHP", icon: "php.svg", color: "#777BB4" },
  { name: "Python", icon: "python.svg", color: "#3776AB" },
  { name: "WordPress", icon: "wordpress.svg", color: "#21759B" },
  {name: "C#", icon: "csharp.svg", color: "#239120" },
  {name: "SQL", icon: "sql.svg", color: "#4479A1" },
  {name: "Linux", icon: "linux.svg", color: "#FCC624" },
  {name: "ASP.NET", icon: "asp-net.svg", color: "#512BD4" },
];

export default function TechSection() {
  return (
    <main className={styles.container} id="tech">
      <div className={styles.containerContainer}>
        <h2>Technologies I’ve Used in My Studies</h2>
        <div className={styles.cardContainer}>
          {technologies.map((tech) => (
            <div key={tech.name} className={styles.card}>
              <img
                src={`/technologies/${tech.icon}`}
                alt={tech.name}
                className={styles.cardIcon}
                style={{ filter: "drop-shadow(0 0 0 transparent)", color: tech.color }}
              />
              <h4 className={styles.cardTitle}>{tech.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
