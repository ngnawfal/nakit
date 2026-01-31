import Link from 'next/link';

export default function SelectedWorks() {
  return (
    <section className="w-full">
      <div className="flex items-end justify-between mb-32 px-4">
        <h2 className="font-display text-6xl md:text-8xl font-bold text-white tracking-tight leading-none">
          SELECTED <br />
          <span className="text-white/20 font-body font-thin italic">WORKS</span>
        </h2>
        <div className="hidden md:block mb-4">
          <span className="material-symbols-outlined text-white/20 text-4xl animate-pulse-glow">arrow_downward</span>
        </div>
      </div>

      <div className="flex flex-col gap-48">
        {/* Work 01 */}
        <div className="group grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 flex flex-col justify-center order-2 md:order-1 pl-4 md:pl-0">
            <span className="text-[10px] font-mono text-white/30 mb-8 block border-b border-white/10 pb-4 w-fit">01 — FINTECH</span>
            <h3 className="font-display text-5xl font-bold text-white mb-6">Nova Dashboard</h3>
            <p className="text-silver/60 font-light text-lg leading-loose mb-12 max-w-sm">
              A high-precision financial instrument for the modern startup ecosystem. Featuring real-time data websockets.
            </p>
            <div className="flex flex-wrap gap-4 text-[10px] font-bold uppercase tracking-widest text-white/40 mb-12">
              <span>React</span>
              <span className="text-white/10">/</span>
              <span>D3.js</span>
            </div>
            <Link className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-white hover:text-white/60 transition-colors" href="#">
              View Case Study <span className="material-symbols-outlined text-sm">arrow_outward</span>
            </Link>
          </div>
          <div className="md:col-span-8 relative overflow-hidden rounded-sm order-1 md:order-2 h-[600px] w-full glass-edge-blend">
            <div
              className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out transform group-hover:scale-105"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBHNn1o5dQDUDhD32Xpny2X4lz7_cnvXIHKz_QbPWrVsq4ar9cK4M_hyry_Vim8dHGqXiCZys0aEHBYYjt-OvEpXHoALXThGq0zrvF-RC1MEkhmFq4GLB7Ut-JayJl-JCgB09JF4esc_vokJCYFNWJPM_I_0nzyZxWp3BRE5CXr1EcRGTFDViGAfX9fCGqLrMyQKqDi-d_SDLiTT9xIe_Ea1IM-Y6S1R_ocQ1H7SM-RDkiGuPOrgjrnL6uU8Eb4FLFBbHI2ASpi9w')" }}
            >
            </div>
            <div className="cozy-blur-edge"></div>
          </div>
        </div>

        {/* Work 02 */}
        <div className="group grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 relative overflow-hidden rounded-sm h-[600px] w-full glass-edge-blend">
            <div
              className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out transform group-hover:scale-105"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCiMss-kEK8o1sexpBTpoCeys3QNqCSS551sA6lvaxxOMRFcIN_hLC_7At6Nbcspw0YEQ79t6hjCF5N1D-30VKuAQji93C-W4BdhekkTpdT2sA1GYwWEJtbJQidyMjKp2iLzpPtCxG7PGN4u6z9SoLKnokxAgk1Ljz2OJHSmINf_pxhGVfuFUQniOP5ZnRhGqRiMZmU-PulujOKMg93B7UaXMOLQBLIkBOo-fIrlQ8y8ir7WPXGr2IrurQEgtUX7x4tlsga9Nxfhg')" }}
            >
            </div>
            <div className="cozy-blur-edge"></div>
          </div>
          <div className="md:col-span-4 flex flex-col justify-center pl-4 md:pl-12">
            <span className="text-[10px] font-mono text-white/30 mb-8 block border-b border-white/10 pb-4 w-fit">02 — COMMERCE</span>
            <h3 className="font-display text-5xl font-bold text-white mb-6">Lumina Fashion</h3>
            <p className="text-silver/60 font-light text-lg leading-loose mb-12 max-w-sm">
              Minimalist e-commerce architecture designed for high-end luxury brands. Optimizing the path to purchase.
            </p>
            <div className="flex flex-wrap gap-4 text-[10px] font-bold uppercase tracking-widest text-white/40 mb-12">
              <span>Next.js</span>
              <span className="text-white/10">/</span>
              <span>WebGL</span>
            </div>
            <Link className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-white hover:text-white/60 transition-colors" href="#">
              View Case Study <span className="material-symbols-outlined text-sm">arrow_outward</span>
            </Link>
          </div>
        </div>

        {/* Work 03 */}
        <div className="group grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 flex flex-col justify-center order-2 md:order-1 pl-4 md:pl-0">
            <span className="text-[10px] font-mono text-white/30 mb-8 block border-b border-white/10 pb-4 w-fit">03 — WEB3</span>
            <h3 className="font-display text-5xl font-bold text-white mb-6">Crypto Protocol</h3>
            <p className="text-silver/60 font-light text-lg leading-loose mb-12 max-w-sm">
              Decentralized interface for the next generation of finance. High-security implementation with immersive WebGL.
            </p>
            <div className="flex flex-wrap gap-4 text-[10px] font-bold uppercase tracking-widest text-white/40 mb-12">
              <span>Three.js</span>
              <span className="text-white/10">/</span>
              <span>Solidity</span>
            </div>
            <Link className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-white hover:text-white/60 transition-colors" href="#">
              View Case Study <span className="material-symbols-outlined text-sm">arrow_outward</span>
            </Link>
          </div>
          <div className="md:col-span-8 relative overflow-hidden rounded-sm order-1 md:order-2 h-[600px] w-full glass-edge-blend">
            <div
              className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out transform group-hover:scale-105"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDWucwkZHcFpUC4lBTzyD_q_Zthfli6k3E1n59GePmXexKSd_wt0ceI8-BO-_qx-aigoGpNbyurKsU5h9nPJJMO1ewik79h07hsw-rLXNkQk3rmRNz5gLetoYt4PqHQ3PrVUVPUoAQJk1WAXSU_zeV-dcnCKSIbM0sB6Lpz6gkDbTaBCh4vaKT6x-RM9OFLwpzhVEpkaxUdc1dy6COOca2eC_VYslnQLujBypfz2YpGORsUXAo-Ubumn9NJf6Hs6brsE7PhVQOJQQ')" }}
            >
            </div>
            <div className="cozy-blur-edge"></div>
          </div>
        </div>
      </div>

      <div className="mt-40 border-t border-white/10 pt-24 text-center">
        <button className="group relative inline-flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-white hover:text-white/60 transition-colors cursor-pointer">
          <span className="w-2 h-2 rounded-full bg-white group-hover:scale-0 transition-transform"></span>
          View Full Archive
          <span className="w-2 h-2 rounded-full bg-white scale-0 group-hover:scale-100 transition-transform"></span>
        </button>
      </div>
    </section>
  );
}
