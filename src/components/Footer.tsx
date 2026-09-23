import {
  Linkedin,
  Mail,
  ArrowUp,
  MapPin,
} from 'lucide-react';
import { playClick } from '@/hooks/useSoundEffects';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/vaibhav-rao-nallani',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: 'mailto:nallanivaibhavrao@gmail.com',
      label: 'Email',
    },
  ];

  const navLinks = [
    { label: 'Home', href: '/#hero' },
    { label: 'About', href: '/#about' },
    { label: 'Education', href: '/#education' },
    { label: 'Technical Skills', href: '/#skills' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Certifications', href: '/#certifications' },
    { label: 'Contact', href: '/#contact' },
  ];

  return (
    <footer className="w-full bg-[#08080A] border-t-2 border-[#D4AF37]/30 pt-16 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <address className="md:col-span-2 space-y-4 not-italic">
            <p className="text-xl font-black uppercase tracking-tighter text-white">
              VAIBHAV RAO NALLANI<span className="text-[#D4AF37]">.</span>
            </p>
            <p className="text-[#9CA3AF] text-sm max-w-sm leading-relaxed">
              Engineering Student in Artificial Intelligence at Kakatiya Institute of Technology and Science (KITS).
            </p>
            <p className="flex items-center gap-2 text-xs font-mono text-[#D4AF37] uppercase tracking-widest">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              Warangal, Telangana, India
            </p>
            <div className="flex gap-3 pt-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  onClick={playClick}
                  className="p-2.5 border border-[#D4AF37]/40 bg-[#121216] text-[#F5D77F] hover:bg-[#D4AF37] hover:text-[#070707] transition-all duration-300 shadow-[2px_2px_0px_0px_#D4AF37]"
                  aria-label={link.label}
                >
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </address>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-[#F5D77F]">
              Quick Navigation
            </h3>
            <ul className="grid grid-cols-1 gap-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs font-mono text-[#9CA3AF] hover:text-[#F5D77F] transition-colors"
                  >
                    // {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Column */}
          <div className="space-y-4 flex flex-col items-start md:items-end">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-[#F5D77F]">
              Navigation
            </h3>
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top of page"
              className="group flex items-center gap-2 px-5 py-2.5 border border-[#D4AF37] bg-[#121216] text-xs font-mono font-bold uppercase tracking-wider text-[#F5D77F] hover:bg-[#D4AF37] hover:text-[#070707] transition-all shadow-[2px_2px_0px_0px_#D4AF37]"
            >
              Top <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#D4AF37]/15 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-[#9CA3AF]">
          <p>© {currentYear} Vaibhav Rao Nallani • KITS Warangal</p>
          <p className="text-[#D4AF37]">Artificial Intelligence Engineering</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
