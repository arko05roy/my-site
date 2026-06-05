import styles from "../page.module.css";

export default function ProjectsPage() {
  return (
    <main className={styles.container}>
      <section id="projects" className={styles.section}>
        <h2 className={`${styles.sectionTitle} font-retro`}>PROJECTS</h2>
        <p className="font-mono text-muted" style={{ marginBottom: '3rem' }}>A collection of things I've built.</p>

        <div className={styles.projectGrid}>
          {/* Project 1 */}
          <div className={styles.projectCard}>
            <div className={styles.projectImage}>
              <div className={styles.projectImagePlaceholder}>[ Tokokino Screenshot ]</div>
            </div>
            <div className={styles.projectContent}>
              <div className={styles.projectMeta}>
                <span>Side Project • Web App</span>
                <span>⭐ 21</span>
              </div>
              <h3 className={styles.projectTitle}>Tokokino</h3>
              <p className={styles.projectDesc}>
                A client-heavy screenshot mockup generator for creating polished product visuals with browser and device frames, backgrounds, overlays, annotations, and fast export/share flows.
              </p>
              <div className={styles.techPills} style={{ marginTop: 'auto' }}>
                <span className={styles.techPill}>N Next.js</span>
                <span className={styles.techPill}>{"</>"} TypeScript</span>
                <span className={styles.techPill}>⚛ React</span>
                <span className={styles.techPill}>🌊 Tailwind CSS</span>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className={styles.projectCard}>
            <div className={styles.projectImage}>
              <div className={styles.projectImagePlaceholder}>[ KeyZen Screenshot ]</div>
            </div>
            <div className={styles.projectContent}>
              <div className={styles.projectMeta}>
                <span>Side Project • Web App</span>
                <span>⭐ 134</span>
              </div>
              <h3 className={styles.projectTitle}>KeyZen</h3>
              <p className={styles.projectDesc}>
                A typing speed test built around the Keychron keyboard aesthetic with audio feedback on every keystroke. Tracks WPM, accuracy, and stats with a clean, minimal UI.
              </p>
              <div className={styles.techPills} style={{ marginTop: 'auto' }}>
                <span className={styles.techPill}>N Next.js</span>
                <span className={styles.techPill}>{"</>"} TypeScript</span>
                <span className={styles.techPill}>✨ Motion</span>
                <span className={styles.techPill}>{"</>"} Recharts</span>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className={styles.projectCard}>
            <div className={styles.projectImage}>
              <div className={styles.projectImagePlaceholder}>[ taptickit Screenshot ]</div>
            </div>
            <div className={styles.projectContent}>
              <div className={styles.projectMeta}>
                <span>Open Source • npm</span>
                <span>⭐ 2</span>
              </div>
              <h3 className={styles.projectTitle}>taptickit</h3>
              <p className={styles.projectDesc}>
                Haptic feedback for the mobile web with zero dependencies. React, Vue, Svelte, and vanilla APIs with presets like success, warning, selection, and impact-style taps via the Vibration API.
              </p>
              <div className={styles.techPills} style={{ marginTop: 'auto' }}>
                <span className={styles.techPill}>{"</>"} TypeScript</span>
                <span className={styles.techPill}>⚛ React</span>
                <span className={styles.techPill}>{"</>"} Vue</span>
                <span className={styles.techPill}>{"</>"} Svelte</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
