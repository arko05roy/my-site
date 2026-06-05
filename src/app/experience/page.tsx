import styles from "../page.module.css";

export default function ExperiencePage() {
  return (
    <main className={styles.container}>
      <section id="experience" className={styles.section}>
        <h2 className={`${styles.sectionTitle} font-retro`}>EXPERIENCES</h2>
        <p className="font-mono text-muted" style={{ marginBottom: '3rem' }}>My journey as a software developer over 2+ years</p>
        
        <div className={styles.timeline}>
          {/* Experience 1 */}
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.expHeader}>
              <div className={styles.expCompanyInfo}>
                <div className={styles.expCompanyLogo}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                </div>
                <div className={styles.expCompanyDetails}>
                  <h3>Bez <span className={styles.expBadge}>Full-Time</span></h3>
                  <div className={styles.expRole}>Applied AI Engineer</div>
                </div>
              </div>
              <div className={styles.expMeta}>
                <span>July 2025 - Present</span>
                <span>New York, Remote</span>
              </div>
            </div>
            
            <h4 className={styles.techTitle}>KEY RESPONSIBILITIES</h4>
            <ul className={styles.expResponsibilities}>
              <li>Reduced <strong>jewelry design turnaround from days to minutes</strong> by building AI agent workflows using <strong>Vercel AI SDK</strong> with observability via <strong>Langfuse</strong>.</li>
              <li>Built an interactive jewelry design canvas using <strong>React + XYFlow</strong> enabling credit-gated editing and real-time agent-driven design iteration.</li>
              <li>Developed a <strong>Redis</strong> queue pipeline generating <strong>70+ product images</strong> per client batch in <strong>under 5 minutes</strong>.</li>
              <li>Built a <strong>multimodal inventory search</strong> enabling queries by image or text, both vectorized and ranked against a <strong>Milvus</strong> DB via <strong>cosine similarity</strong> with <strong>AI image tagging</strong> to enrich retrieval. Achieved <strong>sub-1.5s search across 25,000+ images</strong> using <strong>gemini-embedding-2-preview</strong> and a <strong>semantic reranker</strong>.</li>
              <li>Built a <strong>RAG-based persistent memory system</strong> using <strong>user-scoped vector embeddings</strong> in <strong>Milvus</strong> to continuously learn and refine personalized jewelry design preferences across sessions. Optimized <strong>ANN-based embedding retrieval to sub-80ms</strong> latency.</li>
              <li>Used <strong>General Translation</strong> to ship <strong>multilingual app experiences</strong> for <strong>international clients</strong>.</li>
              <li>Improved reliability and performance across microservices deployed with <strong>Docker, Firebase</strong>, and <strong>GCP</strong>.</li>
              <li>Deployed multiple services on <strong>Cloud Run</strong> with end-to-end <strong>CI/CD</strong> pipelines managed via <strong>Coolify</strong>.</li>
            </ul>

            <h4 className={styles.techTitle}>TECHNOLOGY USED</h4>
            <div className={styles.techPills}>
              <span className={styles.techPill}>▲ Vercel AI SDK</span>
              <span className={styles.techPill}>⚛ React</span>
              <span className={styles.techPill}>⎔ XYFlow</span>
              <span className={styles.techPill}>🔴 Redis</span>
              <span className={styles.techPill}>🔥 Firebase</span>
              <span className={styles.techPill}>☁ GCP</span>
              <span className={styles.techPill}>🐳 Docker</span>
              <span className={styles.techPill}>⚡ Langfuse</span>
              <span className={styles.techPill}>N Next.js</span>
            </div>
          </div>

          {/* Experience 2 */}
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.expHeader}>
              <div className={styles.expCompanyInfo}>
                <div className={styles.expCompanyLogo}>
                  <div style={{color: '#ff6b00', fontWeight: 'bold', fontSize: '20px'}}>ন</div>
                </div>
                <div className={styles.expCompanyDetails}>
                  <h3>Navdyut AI <span className={styles.expBadge}>Full-Time</span></h3>
                  <div className={styles.expRole}>Founding Engineer</div>
                </div>
              </div>
              <div className={styles.expMeta}>
                <span>Jan 2025 - July 2025</span>
                <span>Guwahati, On-Site</span>
              </div>
            </div>
            
            <h4 className={styles.techTitle}>KEY RESPONSIBILITIES</h4>
            <ul className={styles.expResponsibilities}>
              <li>Got deep into <strong>fine-tuning LLMs on low-resource Indian languages</strong> using <strong>Unsloth, containerizing models with Docker</strong>, self-hosting them on servers, and exposing them as <strong>public APIs</strong>.</li>
              <li>Used the <strong>Brave Search API</strong> to give the bot <strong>real-time information</strong> from the web.</li>
              <li>Scaled the system to <strong>500+ users</strong> and contributed to deployments for <strong>public sector</strong> use.</li>
              <li>Project work was featured in <strong>regional newspapers</strong>.</li>
            </ul>

            <h4 className={styles.techTitle}>TECHNOLOGY USED</h4>
            <div className={styles.techPills}>
              <span className={styles.techPill}>🌪 Mistral</span>
              <span className={styles.techPill}>🦥 Unsloth</span>
              <span className={styles.techPill}>🐳 Docker</span>
              <span className={styles.techPill}>🦜 Langchain</span>
              <span className={styles.techPill}>🦙 LlamaIndex</span>
              <span className={styles.techPill}>🌲 Pinecone</span>
              <span className={styles.techPill}>N Next.js</span>
              <span className={styles.techPill}>🌊 TailwindCSS</span>
              <span className={styles.techPill}>⚡ Supabase</span>
              <span className={styles.techPill}>🌧 Drizzle</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
