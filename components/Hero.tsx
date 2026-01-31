export default function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 min-h-[90vh] items-center relative mb-32">
      <div className="lg:col-span-6 flex flex-col justify-center relative z-20 pl-4">
        <div className="mb-12 flex items-center gap-4">
          <div className="h-px w-12 bg-white/20"></div>
          <span className="text-xs font-semibold uppercase tracking-widest text-white/40">Portfolio 2024</span>
        </div>
        <h1 className="text-white leading-[0.85] mb-12">
          <span className="font-display font-extrabold text-7xl md:text-8xl lg:text-[7.5rem] tracking-tight block mb-2">ULTRA</span>
          <span className="font-body font-thin text-6xl md:text-7xl lg:text-[6rem] italic tracking-wide text-white/90 block mb-2">PRECISION</span>
          <span className="font-display font-bold text-7xl md:text-8xl lg:text-[7.5rem] tracking-tight text-white/40 block">ENGINEER</span>
        </h1>
        <p className="text-white/60 text-base md:text-lg max-w-md leading-relaxed font-light mb-16 border-l border-white/10 pl-6">
          Crafting digital experiences with liquid fluidity and obsidian precision. Where high-fidelity visuals meet robust architecture.
        </p>
        <div className="flex flex-wrap items-center gap-12">
          <button className="text-xs font-bold uppercase tracking-widest text-white border-b border-white pb-1 hover:text-white/70 transition-colors cursor-pointer">
            View Showcase
          </button>
          <span className="text-[10px] text-white/20 font-mono">SCROLL TO EXPLORE</span>
        </div>
      </div>
      <div className="lg:col-span-6 relative h-[600px] w-full flex items-center justify-center [perspective:1000px]">
        <div className="liquid-object w-[400px] h-[400px] md:w-[550px] md:h-[550px] animate-morph flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-[-20%] w-[140%] h-[140%] liquid-texture opacity-30 animate-liquid-spin bg-cover bg-center mix-blend-overlay"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC5SkFG9t05stmO1S04RauLPomsHIiE8p1unm_sRqNjxapj1SHV06Im2kkF6K3mdIlOKBAwPnJaOHP9xPT6YPEjABLc90DXZVv4NCjqOexQiuUms4YEmIbeHap1rriw4bKhUG8T2-Fj6TFGSurtq51p8m69LqJMDwmEY3xb3id97Ae2um5Sbh62tbiBmuQ2vz0t3aYCx6q4Mv1g3hkWTAhQUz9UY1TEnnZmEetOA6A33Xmj1VbmlMGye0H6iUSltqWQd-ZyP2LT_g')" }}
          >
          </div>
          <div className="liquid-highlight top-[20%] left-[20%] w-[100px] h-[100px]"></div>
          <div className="liquid-highlight bottom-[30%] right-[20%] w-[60px] h-[60px]"></div>
          <div className="liquid-refraction"></div>
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/60"></div>
          <div className="absolute w-[80%] h-[80%] bg-black/40 blur-3xl rounded-full"></div>
        </div>
        <div className="absolute right-[-50px] top-[20%] w-[150px] h-px bg-gradient-to-l from-transparent via-white/10 to-transparent -z-10"></div>
        <div className="absolute left-[10%] bottom-[10%] w-px h-[100px] bg-gradient-to-b from-transparent via-white/10 to-transparent -z-10"></div>
      </div>
    </section>
  );
}
