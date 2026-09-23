import { useEffect, useRef, useState, type ReactNode } from 'react';

interface SectionBlockProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

const SectionBlock = ({ id, title, subtitle, children }: SectionBlockProps) => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const headingId = `${id}-heading`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      aria-labelledby={headingId}
      className={`relative z-10 max-w-5xl mx-auto px-6 py-16 md:py-28 transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="mb-12 md:mb-16">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-8 h-[2px] bg-[#D4AF37]" />
          <span className="font-mono text-xs text-[#D4AF37] uppercase tracking-[0.25em]">
            // {id}
          </span>
        </div>
        <h2 id={headingId} className="section-title">
          {title}.
        </h2>
        {subtitle && (
          <p className="mt-3 text-sm font-mono text-[#9CA3AF] tracking-wide max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
      {children}
    </section>
  );
};

export default SectionBlock;
