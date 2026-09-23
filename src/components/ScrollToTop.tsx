import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { playWhoosh } from '@/hooks/useSoundEffects';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setProgress(scrollPercent);
      setVisible(scrollTop > 350);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const size = 46;
  const strokeWidth = 2.5;
  const center = size / 2;
  const radius = center - strokeWidth - 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <button
      onClick={() => {
        playWhoosh();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
      className={`fixed bottom-6 left-6 z-50 group transition-all duration-500 ease-out ${
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <div className="relative flex items-center justify-center bg-[#0C0C10]/90 border border-[#D4AF37]/40 backdrop-blur-md rounded-full shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:border-[#D4AF37] hover:scale-110 transition-all duration-300">
        <svg width={size} height={size} className="rotate-[-90deg]">
          {/* Background Ring */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="transparent"
            stroke="rgba(212, 175, 55, 0.15)"
            strokeWidth={strokeWidth}
          />
          {/* Progress Ring */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="transparent"
            stroke="#D4AF37"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-100"
          />
        </svg>

        {/* Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <ArrowUp className="w-4 h-4 text-[#F5D77F] group-hover:-translate-y-0.5 transition-transform duration-300" />
        </div>
      </div>
    </button>
  );
};

export default ScrollToTop;
