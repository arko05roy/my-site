import styles from "../page.module.css";
import { portfolioConfig } from "@/config/portfolio";

export default function ProjectsPage() {
  return (
    <main className={styles.container}>
      <section id="projects" className={styles.section}>
        <h2 className={`${styles.sectionTitle} font-retro`}>{portfolioConfig.projects.title}</h2>
        <p className="font-mono text-muted" style={{ marginBottom: '3rem' }}>{portfolioConfig.projects.subtitle}</p>

        <div className={styles.projectGrid}>
          {portfolioConfig.projects.items.map((project, i) => (
            <div key={i} className={styles.projectCard}>
              <div className={styles.projectImage}>
                {project.imageUrl ? (
                  <img src={project.imageUrl} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <div className={styles.projectImagePlaceholder}>{project.imagePlaceholder}</div>
                )}
              </div>
              <div className={styles.projectContent}>
                <div className={styles.projectMeta}>
                  <span>{project.meta}</span>
                  <span>⭐ {project.stars}</span>
                </div>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>
                  {project.description}
                </p>
                <div className={styles.techPills} style={{ marginTop: 'auto' }}>
                  {project.tech.map((techItem, j) => (
                    <span key={j} className={styles.techPill}>{techItem}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
