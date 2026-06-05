import styles from "../page.module.css";
import { portfolioConfig } from "@/config/portfolio";

function renderMarkdown(text: string) {
  return { __html: text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') };
}

export default function ExperiencePage() {
  return (
    <main className={styles.container}>
      <section id="experience" className={styles.section}>
        <h2 className={`${styles.sectionTitle} font-retro`}>{portfolioConfig.experience.title}</h2>
        <p className="font-mono text-muted" style={{ marginBottom: '3rem' }}>{portfolioConfig.experience.subtitle}</p>
        
        <div className={styles.timeline}>
          {portfolioConfig.experience.items.map((exp, i) => (
            <div key={i} className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.expHeader}>
                <div className={styles.expCompanyInfo}>
                  <div className={styles.expCompanyLogo}>
                    {exp.logoType === 'icon' ? (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                    ) : (
                      <div style={{color: '#ff6b00', fontWeight: 'bold', fontSize: '20px'}}>{exp.logoText}</div>
                    )}
                  </div>
                  <div className={styles.expCompanyDetails}>
                    <h3>{exp.company} <span className={styles.expBadge}>{exp.badge}</span></h3>
                    <div className={styles.expRole}>{exp.role}</div>
                  </div>
                </div>
                <div className={styles.expMeta}>
                  <span>{exp.duration}</span>
                  <span>{exp.location}</span>
                </div>
              </div>
              
              <h4 className={styles.techTitle}>KEY RESPONSIBILITIES</h4>
              <ul className={styles.expResponsibilities}>
                {exp.responsibilities.map((resp, j) => (
                  <li key={j} dangerouslySetInnerHTML={renderMarkdown(resp)} />
                ))}
              </ul>

              <h4 className={styles.techTitle}>TECHNOLOGY USED</h4>
              <div className={styles.techPills}>
                {exp.tech.map((techItem, j) => {
                  const Icon = techItem.icon;
                  return (
                    <span key={j} className={styles.techPill}>
                      {Icon && <Icon className="inline-block mr-1.5 w-3.5 h-3.5" />}
                      {techItem.name}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
