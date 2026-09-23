import { useState, useEffect } from 'react';
import { playClick, playHover } from '@/hooks/useSoundEffects';
import {
  Linkedin,
  Mail,
  ChevronDown,
  FileDown,
  Sparkles,
} from 'lucide-react';

const roles = [
  'Engineering Student (Artificial Intelligence)',
  'Java & C Programmer',
  'OOP & Software Design',
  'Aspiring AI/ML Engineer',
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Blinking cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typeSpeed = isDeleting ? 35 : 75;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
        if (displayText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative z-10 px-6 pt-24 pb-16 overflow-hidden">
      {/* Top-left code comments */}
      <div className="absolute top-28 left-6 md:left-10 z-10 hidden md:block">
        <p className="font-mono text-xs text-[#D4AF37]/70 leading-relaxed font-medium bg-[#0A0A0C]/80 p-3 border border-[#D4AF37]/20 backdrop-blur-sm shadow-[2px_2px_0px_0px_#D4AF37]">
          <span className="text-[#9CA3AF]">// engineer_profile.ts</span>
          <br />
          <span className="text-[#F5D77F]">name:</span> <span className="text-[#E5E7EB]">"Vaibhav Rao Nallani"</span>
          <br />
          <span className="text-[#F5D77F]">field:</span> <span className="text-[#E5E7EB]">"Artificial Intelligence"</span>
          <br />
          <span className="text-[#F5D77F]">college:</span> <span className="text-[#E5E7EB]">"KITS Warangal"</span>
        </p>
      </div>

      {/* Top-right metadata */}
      <div className="absolute top-28 right-6 md:right-10 z-10 hidden md:block">
        <p className="font-mono text-xs text-[#D4AF37]/50 leading-relaxed text-right font-medium">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i} className="block">
              {String((i + 1) * 10).padStart(3, '0')} //SYS
            </span>
          ))}
        </p>
      </div>

      {/* Main hero content */}
      <div className="text-center relative z-10 max-w-4xl mx-auto">
        {/* Status Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-[#D4AF37]/40 bg-[#121215]/90 backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.15)]">
          <span className="w-2.5 h-2.5 bg-[#22C55E] rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.7)]" />
          <span className="font-mono text-xs text-[#F5D77F] tracking-[0.2em] uppercase font-semibold">
            Artificial Intelligence Student
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
        </div>

        {/* Name Title */}
        <h1
          className="heading-brutal leading-[0.9] tracking-tighter"
          style={{ fontSize: 'clamp(44px, 9vw, 115px)' }}
        >
          <span className="text-white">Vaibhav Rao</span>
          <br />
          <span className="text-gold-gradient drop-shadow-[0_4px_24px_rgba(212,175,55,0.3)]">
            Nallani.
          </span>
        </h1>

        {/* Semantic title for screen readers and search engines */}
        <p className="sr-only">
          Vaibhav Rao Nallani — Engineering Student in Artificial Intelligence at Kakatiya Institute of Technology and Science.
        </p>

        {/* Typewriter role */}
        <div
          className="mt-6 h-8 flex items-center justify-center"
          aria-label={`Vaibhav Rao Nallani is an ${roles[roleIndex]}`}
          role="text"
        >
          <span className="font-mono text-sm md:text-base tracking-[0.2em] text-[#D4AF37]/60">
            {'< '}
          </span>
          <span className="font-mono text-sm md:text-base tracking-[0.15em] text-[#F3F4F6] font-semibold">
            {displayText}
          </span>
          <span
            className={`font-mono text-sm md:text-base text-[#F5D77F] ${
              cursorVisible ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden="true"
          >
            |
          </span>
          <span className="font-mono text-sm md:text-base tracking-[0.2em] text-[#D4AF37]/60">
            {' />'}
          </span>
        </div>

        {/* Core skills badges from resume */}
        <div
          className="flex flex-wrap gap-2.5 justify-center mt-8 max-w-lg mx-auto"
          aria-label="Core Technical Skills"
        >
          {[
            'C',
            'Java',
            'OOP Concepts',
          ].map((tech) => (
            <span
              key={tech}
              className="px-4 py-1.5 font-mono text-xs border border-[#D4AF37]/50 bg-[#121216] text-[#F5D77F] font-bold tracking-wider hover:bg-[#D4AF37] hover:text-[#070707] hover:border-[#D4AF37] transition-all duration-300 shadow-[2px_2px_0px_0px_#D4AF37] cursor-default"
              onMouseEnter={playHover}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Social / Direct Connect Actions (LinkedIn & Email) */}
        <nav aria-label="Social and direct contact links" className="flex gap-4 justify-center mt-10">
          {[
            {
              Icon: Linkedin,
              href: 'https://www.linkedin.com/in/vaibhav-rao-nallani',
              label: 'Connect with Vaibhav Rao Nallani on LinkedIn',
              title: 'LinkedIn',
            },
            {
              Icon: Mail,
              href: 'mailto:nallanivaibhavrao@gmail.com',
              label: 'Send Vaibhav Rao Nallani an email',
              title: 'Email',
            },
          ].map(({ Icon, href, label, title }, i) => (
            <a
              key={i}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label}
              title={title}
              onClick={playClick}
              className="group relative inline-flex items-center justify-center p-3.5 border-2 border-[#D4AF37] bg-[#0E0E11] text-[#D4AF37] transition-all duration-300 shadow-[4px_4px_0px_0px_#D4AF37] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] hover:bg-[#D4AF37] hover:text-[#070707]"
            >
              <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
            </a>
          ))}
        </nav>

        {/* Download Resume Button */}
        <div className="mt-10">
          <a
            href="/resume.pdf"
            download="Vaibhav_Rao_Nallani_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={playClick}
            className="group relative inline-flex items-center gap-3 px-8 py-4 border-2 border-[#D4AF37] bg-gradient-to-r from-[#FFF0C2] via-[#D4AF37] to-[#AA771C] text-[#070707] text-sm font-black tracking-[0.2em] uppercase transition-all duration-300 shadow-[6px_6px_0px_0px_rgba(212,175,55,0.4)] hover:shadow-[8px_8px_0px_0px_#D4AF37] hover:-translate-x-0.5 hover:-translate-y-0.5"
          >
            <FileDown className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
            <span>Download Resume</span>
          </a>
        </div>
      </div>

      {/* Bottom-left institution metadata */}
      <div className="absolute bottom-8 left-6 md:left-10 z-10">
        <span className="text-[#D4AF37]/80 text-xs tracking-[0.2em] uppercase font-mono font-semibold">
          KITS Warangal • AI Branch
        </span>
      </div>

      {/* Bottom-right stats */}
      <div className="absolute bottom-8 right-6 md:right-10 z-10 hidden md:block">
        <div className="font-mono text-xs text-[#E5E7EB]/80 text-right leading-relaxed font-medium bg-[#0A0A0C]/70 p-2.5 border border-[#D4AF37]/20">
          <p className="text-[#F5D77F]">const undergrad = "B.Tech AI (2024–2028)";</p>
          <p className="text-[#E5E7EB]">const cgpa = 7.1;</p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <a href="#about" aria-label="Scroll to about section" onClick={playClick}>
          <ChevronDown className="w-6 h-6 text-[#D4AF37] animate-bounce hover:text-[#F5D77F] transition-colors" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
