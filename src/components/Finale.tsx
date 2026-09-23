import {
  Linkedin,
  Mail,
  Sparkles,
} from 'lucide-react';
import { playClick } from '@/hooks/useSoundEffects';

const Finale = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/vaibhav-rao-nallani',
      label: 'LinkedIn Profile',
      handle: 'vaibhav-rao-nallani',
    },
    {
      icon: Mail,
      href: 'mailto:nallanivaibhavrao@gmail.com',
      label: 'Email Address',
      handle: 'nallanivaibhavrao@gmail.com',
    },
  ];

  const marqueeTags = [
    'Vaibhav Rao Nallani ⚡',
    'Artificial Intelligence Student',
    'C · Java · OOP Concepts 💻',
    'KITS Warangal (Class of 2028)',
    'Building Scalable Foundations 🚀',
  ];

  return (
    <footer className="relative w-full bg-[#08080A] border-t-4 border-[#D4AF37] pt-20 overflow-hidden text-white">
      {/* Top Gold Marquee */}
      <div className="absolute top-0 left-0 w-full py-3.5 bg-[#D4AF37] overflow-hidden flex whitespace-nowrap shadow-[0_0_20px_rgba(212,175,55,0.4)]">
        <div className="animate-marquee flex items-center shrink-0">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center">
              {marqueeTags.map((tag) => (
                <span
                  key={tag}
                  className="text-[#070707] font-mono text-xs uppercase tracking-[0.25em] font-black mx-8"
                >
                  {tag}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 flex flex-col items-center">
        {/* Main CTA */}
        <div className="relative mb-16 text-center">
          <p
            aria-hidden="true"
            className="text-[12vw] md:text-[7vw] font-black uppercase leading-none tracking-tighter text-[#D4AF37]/5 absolute -top-1/2 left-1/2 -translate-x-1/2 select-none pointer-events-none"
          >
            THANK YOU
          </p>
          <p className="text-xl md:text-3xl font-black uppercase tracking-tight italic z-10 relative">
            Let's build something{' '}
            <span className="text-[#070707] bg-[#D4AF37] px-3.5 py-1 not-italic font-mono">
              impactful
            </span>{' '}
            together.
          </p>
        </div>

        {/* Social Grid (Balanced 2-Column on larger screens) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-xl mb-16">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              onClick={playClick}
              className="group flex flex-col items-center justify-center p-7 border-2 border-[#D4AF37]/40 bg-[#0E0E12] hover:border-[#D4AF37] hover:bg-[#D4AF37] transition-all duration-300 shadow-[4px_4px_0px_0px_#D4AF37] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
            >
              <link.icon className="w-6 h-6 text-[#D4AF37] group-hover:text-[#070707] transition-colors" />
              <span className="mt-3 font-mono text-xs uppercase tracking-widest font-bold text-[#E5E7EB] group-hover:text-[#070707]">
                {link.label}
              </span>
              <span className="font-mono text-[10px] text-[#9CA3AF] group-hover:text-[#070707]/80 mt-0.5 truncate max-w-[200px]">
                {link.handle}
              </span>
            </a>
          ))}
        </div>

        {/* Bottom Tagline */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center mb-8">
          <div className="flex items-center gap-2 px-3 py-1 bg-[#121216] border border-[#D4AF37]/40 rounded-full">
            <span className="w-2 h-2 bg-[#22C55E] rounded-full animate-pulse" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#F5D77F]">
              KITS Warangal
            </span>
          </div>
          <p className="text-xs font-mono text-[#9CA3AF] uppercase tracking-widest">
            Warangal, Telangana, India
          </p>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="w-full bg-[#050507] py-6 px-6 border-t border-[#D4AF37]/20">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-[#9CA3AF]">
          <p className="tracking-wider text-center md:text-left">
            © {currentYear} Vaibhav Rao Nallani • Engineering Student (AI)
          </p>
          <p className="text-[#D4AF37] text-center md:text-right font-medium">
            Designed in Black &amp; Gold
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Finale;
