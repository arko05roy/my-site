import { SocialLinks } from "@/components/ui/social-links";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <header className={styles.hero}>
        <div className={styles.greeting}>
          <span className="font-mono">Hola I'm</span> <span style={{ fontSize: '1.2rem' }}>👋</span>
        </div>
        <h1 className={`${styles.name} font-vt323`} style={{ position: 'relative', display: 'inline-block', width: 'fit-content' }}>
          SHIVA BHATTACHARJEE
        </h1>
        <p className={`${styles.subtitle} font-mono`} style={{ textTransform: 'uppercase' }}>I WORK ON AI, LLMS, AND BUILDING DEVELOPER TOOLS ON TOP OF THEM</p>
        
      </header>

      <section id="about" className={styles.section}>
        <h2 className={`${styles.sectionTitle} font-retro`}>About Me</h2>
        <div className={styles.aboutText}>
          <p>
            I'm Shiva, an <strong>Applied AI Engineer</strong> who learned by building things in public, breaking them under real users, and then fixing the parts that failed. I started with freelance PHP/jQuery work, moved into React and full-stack systems, and eventually found my lane around applied AI, infra, and product engineering.
          </p>
          <p>
            The work that taught me the most came from building <strong>web streaming projects</strong> — wiring up <strong>HLS / m3u8 pipelines</strong>, scrapers, caching layers, and servers that had to hold up under <strong>15k users</strong>. It was chaotic and forced me to learn scaling, infra, and the painful side of shipping fast — still one of my best technical lessons.
          </p>
          <p>
            Since then I've won <strong>5 hackathons</strong>, qualified for <strong>Smart India Hackathon 2023</strong>, and shipped production AI systems at early-stage startups. Right now I'm at <strong>Bez</strong>, working on AI agent workflows, vector search, RAG memory, and multimodal image pipelines.
          </p>
        </div>
      </section>

      <div style={{ marginBottom: '6rem', width: '100%' }}>
        <SocialLinks />
      </div>

      <section id="notable-achievements" className={styles.section}>
        <h2 className={`${styles.sectionTitle} font-[family-name:var(--font-doto)]`} style={{ textTransform: 'uppercase' }}>Notable achievements</h2>
        
        <div className={styles.timeline}>
          <div className={styles.timelineItem} style={{ borderLeft: 'none', paddingLeft: 0 }}>
            <div className={styles.minorExpItem}>
              • <strong>Rise In bounty</strong> — Got a bounty from <strong>Rise In</strong> for a project that lets people lend money on <strong>Ethereum</strong> and build an actual <strong>credit score on-chain</strong>. Built flows for issuing loans, tracking active borrows, repayments, and defaulter marking with <strong>transparent contract-backed state</strong>. No banks, just smart contracts. <a href="#" className={styles.link}>GitHub ↗</a>
            </div>
            <div className={styles.minorExpItem}>
              • <strong>In the news</strong> — Got featured in a <strong>national newspaper</strong> for building a <strong>fine-tuned LLM on the Assamese language</strong>, one of the first of its kind for a low-resource Indian language. <a href="#" className={styles.link}>Twitter ↗</a>
            </div>
            <div className={styles.minorExpItem}>
              • <strong>Side project at scale</strong> — Built <strong>AnimeTrix</strong>, an anime streaming site, hit around <strong>15,000 users</strong> and was handling <strong>100 concurrent viewers</strong> at peak using web scraping and some creative infra decisions. Had to take it down after a DMCA. The repo still has <strong>~190 stars</strong>. <a href="#" className={styles.link}>GitHub ↗</a>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerRow}>
          <span>Fri, Jun 5, 2026 • 06:10:28 PM</span>
        </div>
        <div className={styles.footerRow}>
          <span className={styles.footerIcon}>📍 Kolkata, India</span> • 
          <span className={styles.footerIcon}>☁️ 31°C</span>
        </div>
        <div className={styles.footerRow}>
          <span className={styles.footerIcon}>👁️ 1,354 visitors</span> ⚡ 100%
        </div>
        <div className={styles.footerRow} style={{ marginTop: '1rem' }}>
          <span>© 2026 Shiva Bhattacharjee. All rights reserved.</span>
        </div>
      </footer>
    </main>
  );
}
