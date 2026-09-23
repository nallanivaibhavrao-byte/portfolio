import { useState } from 'react';
import { playClick } from '@/hooks/useSoundEffects';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Technical Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 md:py-5 bg-[#070707]/90 backdrop-blur-md border-b border-[#D4AF37]/20 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Monogram */}
        <a
          href="#"
          onClick={playClick}
          className="group flex items-center gap-2 font-mono text-sm tracking-widest uppercase font-bold text-[#f3f4f6]"
        >
          <span className="w-8 h-8 rounded-sm bg-gradient-to-br from-[#FFF0C2] via-[#D4AF37] to-[#AA771C] text-[#070707] font-black flex items-center justify-center text-xs shadow-[0_0_12px_rgba(212,175,55,0.4)] group-hover:scale-105 transition-transform">
            VRN
          </span>
          <span className="hidden sm:inline text-xs text-[#E5E7EB] group-hover:text-[#F5D77F] transition-colors">
            Vaibhav Rao Nallani
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link, i) => (
            <span key={link.href} className="flex items-center">
              <a
                href={link.href}
                className="nav-link px-3.5 py-1.5 rounded-sm hover:bg-[#D4AF37]/10 hover:text-[#F5D77F] active:scale-95 transition-all text-xs font-semibold"
                onClick={playClick}
                onTouchStart={playClick}
              >
                {link.label}
              </a>
              {i < links.length - 1 && (
                <span className="text-[#D4AF37]/30 text-xs px-1 select-none">/</span>
              )}
            </span>
          ))}
        </div>

        {/* Action Button: Get in touch */}
        <div className="hidden lg:flex items-center">
          <a
            href="#contact"
            onClick={playClick}
            className="px-4 py-1.5 text-xs font-mono font-bold tracking-wider uppercase border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#070707] transition-all duration-300 shadow-[2px_2px_0px_0px_#D4AF37] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
          >
            Connect
          </a>
        </div>

        {/* Mobile toggle button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => {
              playClick();
              setOpen(!open);
            }}
            onTouchStart={playClick}
            className="px-4 py-2 border border-[#D4AF37]/40 bg-[#121214] text-[#F5D77F] font-mono text-xs tracking-wider uppercase active:scale-95 transition-all shadow-[2px_2px_0px_0px_#D4AF37]"
            aria-expanded={open}
            aria-label="Toggle navigation menu"
          >
            {open ? '✕ Close' : '☰ Menu'}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-[#D4AF37]/20 bg-[#0A0A0C]/98 px-6 py-6 mt-4 flex flex-col items-center gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="w-full text-center py-2.5 font-mono text-sm tracking-wider uppercase text-[#E5E7EB] hover:text-[#F5D77F] hover:bg-[#D4AF37]/10 border-b border-[#D4AF37]/10 transition-colors"
              onClick={() => {
                playClick();
                setOpen(false);
              }}
              onTouchStart={playClick}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="w-full text-center mt-2 py-3 bg-gradient-to-r from-[#FFF0C2] via-[#D4AF37] to-[#AA771C] text-[#070707] font-bold font-mono text-xs uppercase tracking-widest shadow-[0_0_15px_rgba(212,175,55,0.3)]"
            onClick={() => {
              playClick();
              setOpen(false);
            }}
          >
            Get In Touch
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
