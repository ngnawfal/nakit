import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 py-24 bg-warm-charcoal relative z-10">
      <div className="max-w-[1600px] mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-6 flex flex-col justify-between h-full min-h-[120px]">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-white/10 rounded-full"></div>
            <h2 className="font-display text-xl font-bold tracking-widest text-white">ALEX.</h2>
          </div>
          <p className="text-white/30 text-xs font-light max-w-xs mt-8">
            Crafted with precision in the void. <br /> © 2024 All Rights Reserved.
          </p>
        </div>
        <div className="md:col-span-2">
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-6">Socials</h4>
          <div className="flex flex-col gap-3">
            <Link className="text-xs text-white/70 hover:text-white transition-colors" href="#">Twitter</Link>
            <Link className="text-xs text-white/70 hover:text-white transition-colors" href="#">LinkedIn</Link>
            <Link className="text-xs text-white/70 hover:text-white transition-colors" href="#">Github</Link>
          </div>
        </div>
        <div className="md:col-span-2">
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-6">Legal</h4>
          <div className="flex flex-col gap-3">
            <Link className="text-xs text-white/70 hover:text-white transition-colors" href="#">Privacy Policy</Link>
            <Link className="text-xs text-white/70 hover:text-white transition-colors" href="#">Terms of Use</Link>
          </div>
        </div>
        <div className="md:col-span-2 flex items-end justify-start md:justify-end">
          <span className="text-[10px] font-mono text-white/20">SYS.STATUS: ONLINE</span>
        </div>
      </div>
    </footer>
  );
}
