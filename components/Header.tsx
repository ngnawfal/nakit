import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full glass-nav transition-all duration-300">
      <div className="flex items-center justify-between px-8 py-6 max-w-[1600px] mx-auto w-full">
        <div className="flex items-center gap-2 group cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
          <span className="w-2 h-2 bg-white rounded-full"></span>
          <span className="font-display font-bold text-sm tracking-widest">ALEX.V1</span>
        </div>
        <nav className="hidden md:flex items-center gap-16">
          <Link className="text-[10px] font-semibold uppercase tracking-widest text-white/50 hover:text-white transition-colors" href="#">Index</Link>
          <Link className="text-[10px] font-semibold uppercase tracking-widest text-white/50 hover:text-white transition-colors" href="#">Expertise</Link>
          <Link className="text-[10px] font-semibold uppercase tracking-widest text-white/50 hover:text-white transition-colors" href="#">Selected Works</Link>
        </nav>
        <div className="flex items-center gap-3 opacity-60">
          <span className="text-[9px] font-mono text-white/60">SF, CA // 12:42 PM</span>
        </div>
      </div>
    </header>
  );
}
