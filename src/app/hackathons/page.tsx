import styles from "../page.module.css";

export default function HackathonsPage() {
  return (
    <main className={styles.container}>
      <section id="hackathons" className={styles.section}>
        <h2 className={`${styles.sectionTitle} font-retro`}>HACKATHONS</h2>
        <p className="font-mono text-muted" style={{ marginBottom: '4rem' }}>Competitions, bounties, and builds under pressure.</p>

        <div className="flex flex-col space-y-16">
          {/* Hackathon 1 */}
          <div>
            <h3 className="font-[family-name:var(--font-doto)] text-[#FFD700] text-3xl mb-4 tracking-widest uppercase">1st Place</h3>
            <div className="text-gray-400 text-sm tracking-widest mb-2 uppercase font-mono">
              Envision Hackathon • 2023 • Assam Down Town University
            </div>
            <h4 className="text-2xl font-bold mb-4 text-white">WasteEasy</h4>
            <p className="text-gray-300 leading-relaxed mb-6">
              Built WasteEasy, a <strong>waste-management platform</strong> focused on correct segregation and easier disposal. Added <strong>AI-powered waste classification</strong>, <strong>location-aware discovery</strong> of nearby disposal points via maps, and a <strong>coupon-based incentive loop</strong> to reward responsible dumping behavior. The project won <strong>1st place at Envision Hackathon</strong> and was later recognised as a unique tech startup at an <strong>IIM Shillong</strong> entrepreneurship event.
            </p>
            <div className={styles.techPills} style={{ marginBottom: '1rem' }}>
              <span className={styles.techPill}>⚛ React JS</span>
              <span className={styles.techPill}>⬢ Node.js</span>
              <span className={styles.techPill}>🍃 MongoDB</span>
              <span className={styles.techPill}>📍 Google Maps API</span>
              <span className={styles.techPill}>✨ Gemini 1.5 Pro</span>
              <span className={styles.techPill}>🐍 Python</span>
              <span className={styles.techPill}>👁️ YOLO</span>
              <span className={styles.techPill}>⚡ Vite</span>
            </div>
            <a href="#" className="inline-flex items-center text-gray-400 hover:text-white transition-colors text-sm">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="mr-2"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.699-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/></svg>
              GitHub
            </a>
          </div>

          {/* Hackathon 2 */}
          <div>
            <h3 className="font-[family-name:var(--font-doto)] text-[#FFD700] text-3xl mb-4 tracking-widest uppercase">1st Place</h3>
            <div className="text-gray-400 text-sm tracking-widest mb-2 uppercase font-mono">
              Technophilia 2023 • 2023 • Assam Royal Global University
            </div>
            <h4 className="text-2xl font-bold mb-4 text-white">Smart Parking for Guwahati</h4>
            <p className="text-gray-300 leading-relaxed mb-6">
              Built a <strong>Google Maps-style smart parking platform</strong> for Guwahati where users can discover nearby parking spots, calculate the <strong>shortest route</strong> to available locations, and make faster parking decisions in busy areas. Added <strong>community-driven features</strong> like ratings, written reviews, on-ground image uploads, and complaint reporting to flag incorrect info or local issues. The <strong>crowdsourced data model</strong> kept listings fresh and practical, helping the project win 1st place.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
