import styles from "../page.module.css";
import { portfolioConfig } from "@/config/portfolio";

function renderMarkdown(text: string) {
  return { __html: text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-bold">$1</strong>') };
}

const techColors: Record<string, string> = {
  "React JS": "#61DAFB",
  "Node.js": "#68A063",
  "MongoDB": "#47A248",
  "Google Maps API": "#4285F4",
  "Gemini 1.5 Pro": "#A855F7",
  "Python": "#3776AB",
  "YOLO": "#00E5FF",
  "Vite": "#646CFF",
};

const getTechColor = (name: string) => techColors[name] || "#9CA3AF";

export default function HackathonsPage() {
  return (
    <main className={styles.container}>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scan {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(800px); opacity: 0; }
        }
        .animate-scan {
          animation: scan 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        .bg-grid-pattern {
          background-size: 30px 30px;
          background-image: linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
        }
      `}} />
      <section id="hackathons" className={styles.section}>
        <div className="mb-16 border-b border-[#222] pb-8 relative group">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#555] to-transparent"></div>
          <div className="font-mono text-[#eab308] text-[11px] mb-4 flex items-center gap-2 tracking-[0.2em] uppercase">
            <span className="w-1.5 h-1.5 bg-[#eab308] animate-pulse"></span>
            SYS.BOOT // HACKATHON_RECORDS
          </div>
          <h2 className="font-retro text-5xl md:text-7xl text-white tracking-tighter uppercase relative z-10 drop-shadow-lg">
            {portfolioConfig.hackathons.title}
          </h2>
          <p className="font-mono text-gray-500 mt-4 tracking-widest text-sm max-w-xl uppercase">
            {portfolioConfig.hackathons.subtitle}
          </p>
          
          {/* Decorative blocks */}
          <div className="absolute right-0 bottom-8 flex gap-1 opacity-20">
            {[...Array(5)].map((_, idx) => (
              <div key={idx} className="w-2 h-8 bg-white" style={{ height: `${Math.random() * 32 + 8}px` }}></div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-12">
          {portfolioConfig.hackathons.items.map((hackathon, i) => {
            const eventParts = hackathon.event.split('•').map(p => p.trim());
            const eventName = eventParts[0];
            const eventDetails = eventParts.slice(1).join(' • ');

            return (
              <div key={i} className="relative group perspective-1000">
                {/* Decorative corner brackets */}
                <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-gray-600 transition-all duration-300 group-hover:border-white group-hover:-top-3 group-hover:-left-3 z-20"></div>
                <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-gray-600 transition-all duration-300 group-hover:border-white group-hover:-bottom-3 group-hover:-right-3 z-20"></div>

                <div className="relative flex flex-col md:flex-row bg-[#050505] border border-[#222] group-hover:border-[#444] transition-colors duration-500 shadow-2xl">
                  
                  {/* Animated scanline */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#eab308] to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-scan z-30 pointer-events-none blur-[1px]"></div>

                  {/* Left Panel: The Badge */}
                  <div className="w-full md:w-1/3 p-8 border-b md:border-b-0 md:border-r border-[#222] relative flex flex-col justify-center overflow-hidden bg-[#030303]">
                    {/* Background Grid */}
                    <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>
                    
                    {/* Glowing orb */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#eab308]/5 blur-[60px] rounded-full group-hover:bg-[#eab308]/20 transition-all duration-700"></div>

                    <div className="relative z-10 flex flex-col items-center text-center">
                      <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 bg-[#111] text-[#eab308] font-mono text-[9px] tracking-[0.3em] border border-[#eab308]/30 mb-8 uppercase rounded-sm group-hover:border-[#eab308] transition-colors">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                        Achievement Unlocked
                      </div>

                      {/* Huge Placement Text */}
                      <h3 className="font-retro text-white text-5xl lg:text-6xl tracking-tighter mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:scale-105 group-hover:text-[#eab308] transition-all duration-500">
                        {hackathon.placement.split(' ')[0]}
                      </h3>
                      <div className="font-retro text-gray-500 text-xl tracking-[0.4em] uppercase group-hover:text-white transition-colors duration-500">
                        {hackathon.placement.split(' ').slice(1).join(' ')}
                      </div>
                    </div>
                    
                    {/* Vertical Data Line */}
                    <div className="absolute right-4 top-0 bottom-0 flex flex-col justify-between py-8 opacity-30">
                      <div className="w-[1px] h-12 bg-white"></div>
                      <div style={{ writingMode: 'vertical-rl' }} className="font-mono text-[8px] tracking-[0.4em] uppercase text-white">
                        ID.{i.toString().padStart(4, '0')} // {new Date().getFullYear()}
                      </div>
                      <div className="w-[1px] h-12 bg-white"></div>
                    </div>
                  </div>

                  {/* Right Panel: The Data */}
                  <div className="w-full md:w-2/3 p-8 md:p-10 flex flex-col relative bg-gradient-to-br from-[#0a0a0a] to-[#050505] z-10">
                    
                    {/* Header Info */}
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-sm bg-[#111] border border-[#333] flex items-center justify-center font-mono text-[10px] text-gray-400 group-hover:border-[#eab308]/50 transition-colors">
                          {hackathon.event.match(/\d{4}/)?.[0] || "202X"}
                        </div>
                        <div className="flex flex-col">
                          <span className="font-mono text-[9px] text-[#eab308] tracking-[0.2em] uppercase mb-1">Target Acquired</span>
                          <span className="font-mono text-xs text-gray-300 tracking-widest uppercase">{eventName}</span>
                        </div>
                      </div>
                      <div className="font-mono text-[9px] text-gray-600 tracking-[0.3em] text-right uppercase hidden sm:block max-w-[200px] truncate">
                        {eventDetails}
                      </div>
                    </div>

                    <h4 className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                      {hackathon.title}
                    </h4>

                    <div className="text-gray-400 font-mono text-[13px] leading-[1.8] mb-10 border-l border-[#333] pl-6 group-hover:border-[#eab308] transition-colors duration-500 relative">
                      <div dangerouslySetInnerHTML={renderMarkdown(hackathon.description)} />
                      {/* Hacker decorative element */}
                      <div className="absolute -left-[3px] top-0 w-1.5 h-1.5 bg-[#333] group-hover:bg-[#eab308] transition-colors duration-500"></div>
                      <div className="absolute -left-[3px] bottom-0 w-1.5 h-1.5 bg-[#333] group-hover:bg-[#eab308] transition-colors duration-500"></div>
                    </div>

                    <div className="mt-auto">
                      <div className="font-mono text-[9px] text-gray-600 tracking-[0.3em] uppercase mb-4">Tech Stack Deployed</div>
                      <div className="flex flex-wrap items-center justify-between gap-6">
                        <div className="flex flex-wrap gap-2">
                          {hackathon.tech.map((techItem, j) => {
                            const Icon = techItem.icon;
                            const color = getTechColor(techItem.name);
                            return (
                              <div 
                                key={j} 
                                className="group/tech relative flex items-center gap-2 px-3 py-1.5 bg-[#0a0a0a] border border-[#222] hover:border-gray-500 transition-colors cursor-default rounded-sm"
                              >
                                {Icon && <Icon className="w-3 h-3 grayscale group-hover/tech:grayscale-0 transition-all duration-300" style={{ color: color }} />}
                                <span className="font-mono text-[10px] text-gray-400 group-hover/tech:text-white transition-colors">{techItem.name}</span>
                              </div>
                            );
                          })}
                        </div>

                        {hackathon.linkUrl && (
                          <a href={hackathon.linkUrl} className="group/btn relative inline-flex items-center justify-center px-6 py-3 bg-white text-black font-mono text-[10px] font-bold uppercase tracking-[0.2em] overflow-hidden rounded-sm transition-transform hover:scale-105 active:scale-95">
                            <span className="relative z-10 flex items-center">
                              {hackathon.linkText}
                              <svg className="ml-2 w-3 h-3 group-hover/btn:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                            </span>
                            <div className="absolute inset-0 bg-[#eab308] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
