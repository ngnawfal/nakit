export default function CoreCapabilities() {
  return (
    <section className="mb-48 w-full relative px-4">
      <div className="w-full h-px bg-white/10 mb-12"></div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-3">
          <span className="text-[10px] font-mono text-white/30 uppercase">Core Capabilities</span>
        </div>
        <div className="md:col-span-9">
          <ul className="flex flex-col md:flex-row justify-between gap-12 md:gap-8">
            <li className="group flex-1 cursor-default">
              <div className="flex items-center gap-4 mb-4 text-white/40 group-hover:text-white transition-colors duration-500">
                <span className="text-[10px] font-mono">01</span>
                <h3 className="font-display text-xl font-bold uppercase tracking-wide">Architecture</h3>
              </div>
              <p className="text-sm text-white/40 font-light leading-relaxed group-hover:text-white/60 transition-colors duration-500">
                Scalable frontend systems built on Next.js. Engineered for absolute performance and SEO.
              </p>
            </li>
            <li className="hidden md:block w-px h-24 bg-gradient-to-b from-white/10 to-transparent"></li>
            <li className="group flex-1 cursor-default">
              <div className="flex items-center gap-4 mb-4 text-white/40 group-hover:text-white transition-colors duration-500">
                <span className="text-[10px] font-mono">02</span>
                <h3 className="font-display text-xl font-bold uppercase tracking-wide">Interaction</h3>
              </div>
              <p className="text-sm text-white/40 font-light leading-relaxed group-hover:text-white/60 transition-colors duration-500">
                Fluid WebGL and GSAP animations providing tactile feedback and liquid transitions.
              </p>
            </li>
            <li className="hidden md:block w-px h-24 bg-gradient-to-b from-white/10 to-transparent"></li>
            <li className="group flex-1 cursor-default">
              <div className="flex items-center gap-4 mb-4 text-white/40 group-hover:text-white transition-colors duration-500">
                <span className="text-[10px] font-mono">03</span>
                <h3 className="font-display text-xl font-bold uppercase tracking-wide">Aesthetics</h3>
              </div>
              <p className="text-sm text-white/40 font-light leading-relaxed group-hover:text-white/60 transition-colors duration-500">
                Pixel-perfect implementation focusing on luxury whitespace and advanced typography.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
