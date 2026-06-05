import { SocialLinks } from "@/components/ui/social-links";
import styles from "./page.module.css";
import { portfolioConfig } from "@/config/portfolio";

function renderMarkdown(text: string) {
  return { __html: text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') };
}

export default function Home() {
  return (
    <main className={styles.container}>
      <header className={styles.hero}>
        <div className={styles.greeting}>
          <span className="font-mono">{portfolioConfig.personal.greeting}</span> <span style={{ fontSize: '1.2rem' }}>{portfolioConfig.personal.greetingEmoji}</span>
        </div>
        <h1 className={`${styles.name} font-vt323`} style={{ position: 'relative', display: 'inline-block', width: 'fit-content' }}>
          {portfolioConfig.personal.name}
        </h1>
        <p className={`${styles.subtitle} font-mono`} style={{ textTransform: 'uppercase' }}>{portfolioConfig.personal.subtitle}</p>
        
      </header>

      <section id="about" className={styles.section}>
        <h2 className={`${styles.sectionTitle} font-retro`}>{portfolioConfig.personal.aboutTitle}</h2>
        <div className={styles.aboutText}>
          {portfolioConfig.personal.aboutParagraphs.map((para, i) => (
            <p key={i} dangerouslySetInnerHTML={renderMarkdown(para)} />
          ))}
        </div>
      </section>

      <div style={{ marginBottom: '6rem', width: '100%' }}>
        <SocialLinks />
      </div>

      <section id="notable-achievements" className={styles.section}>
        <h2 className={`${styles.sectionTitle} font-[family-name:var(--font-doto)]`} style={{ textTransform: 'uppercase' }}>{portfolioConfig.personal.notableAchievementsTitle}</h2>
        
        <div className={styles.timeline}>
          <div className={styles.timelineItem} style={{ borderLeft: 'none', paddingLeft: 0 }}>
            {portfolioConfig.personal.notableAchievements.map((achievement, i) => (
              <div key={i} className={styles.minorExpItem}>
                • <strong>{achievement.title}</strong> — <span dangerouslySetInnerHTML={renderMarkdown(achievement.description)} /> <a href={achievement.linkUrl} className={styles.link}>{achievement.linkText}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerRow}>
          <span>{portfolioConfig.footer.datetime}</span>
        </div>
        <div className={styles.footerRow}>
          <span className={styles.footerIcon}>📍 {portfolioConfig.footer.location}</span> • 
          <span className={styles.footerIcon}>☁️ {portfolioConfig.footer.weather}</span>
        </div>
        <div className={styles.footerRow}>
          <span className={styles.footerIcon}>👁️ {portfolioConfig.footer.visitors} visitors</span> ⚡ {portfolioConfig.footer.battery}
        </div>
        <div className={styles.footerRow} style={{ marginTop: '1rem' }}>
          <span>{portfolioConfig.footer.copyright}</span>
        </div>
      </footer>
    </main>
  );
}
