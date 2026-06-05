import styles from "../page.module.css";
import { portfolioConfig } from "@/config/portfolio";

export default function ProjectsPage() {
  return (
    <main className={styles.container}>
      <section id="projects" className={styles.section}>
        
        {/* Refined Structural Header */}
        <div className="mb-12 border-b border-[#222] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="font-mono text-gray-500 text-[10px] mb-3 tracking-[0.3em] uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#444] rounded-sm"></span>
              DIR_01 // PUBLIC_REPOS
            </div>
            <h2 className="font-retro text-4xl md:text-5xl text-white tracking-tighter uppercase">
              {portfolioConfig.projects.title}
            </h2>
          </div>
          <p className="font-mono text-gray-500 text-xs tracking-[0.2em] uppercase md:max-w-[280px] md:text-right leading-relaxed">
            {portfolioConfig.projects.subtitle}
          </p>
        </div>

        {/* Structural Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioConfig.projects.items.map((project, i) => (
            <div 
              key={i} 
              className="group flex flex-col bg-[#050505] border border-[#222] rounded-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-500 hover:shadow-[4px_4px_0_0_#222] overflow-hidden"
            >
              
              {/* Image Container */}
              <div className="aspect-[1.6] bg-[#0a0a0a] border-b border-[#222] p-4 relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
                {project.imageUrl ? (
                  <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" />
                ) : (
                  <div className="text-[#333] font-mono text-[10px] tracking-widest uppercase flex flex-col items-center gap-3 group-hover:text-gray-500 transition-colors duration-500">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="square"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                    {project.imagePlaceholder.replace(/[\[\]]/g, '')}
                  </div>
                )}
              </div>
              
              {/* Details Container */}
              <div className="p-6 md:p-8 flex flex-col flex-grow relative bg-[#050505] z-10">
                <div className="flex justify-between items-center text-[10px] font-mono text-gray-500 mb-5 tracking-[0.2em] uppercase">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-600 group-hover:bg-white transition-colors duration-300 rounded-sm"></span>
                    {project.meta}
                  </span>
                  <span className="flex items-center gap-1.5 text-gray-400 group-hover:text-[#eab308] transition-colors duration-300">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    {project.stars}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold font-sans text-white mb-4 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-[#888] font-mono text-[13px] leading-[1.7] mb-8 flex-grow">
                  {project.description}
                </p>
                
                {/* Minimal Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-auto pt-5 border-t border-[#1a1a1a]">
                  {project.tech.map((techItem, j) => {
                    const Icon = techItem.icon;
                    return (
                      <span 
                        key={j} 
                        className="group/tag inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-[#0a0a0a] border border-[#222] rounded-sm text-[10px] font-mono text-gray-500 hover:border-gray-400 hover:text-white hover:bg-[#111] transition-all cursor-default"
                      >
                        {Icon ? <Icon className="w-3 h-3 transition-colors" /> : <span className="font-bold">{'</>'}</span>}
                        {techItem.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
