import { Sparkles, Terminal, Code2 } from 'lucide-react';

const AnimatedAvatar = () => {
  return (
    <div className="relative w-52 h-52 md:w-64 md:h-64 mx-auto md:mx-0 shrink-0 group">
      {/* Brutalist Gold offset frame */}
      <div className="absolute inset-0 border-2 border-[#D4AF37] translate-x-2.5 translate-y-2.5 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300 shadow-[0_0_20px_rgba(212,175,55,0.2)]" />

      {/* Main avatar container */}
      <div className="relative w-full h-full border-2 border-[#D4AF37] bg-[#0E0E12] overflow-hidden group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 flex flex-col items-center justify-center p-6 text-center">
        {/* Subtle geometric background grid */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(#D4AF37 1px, transparent 1px), radial-gradient(#D4AF37 1px, #0E0E12 1px)',
            backgroundSize: '16px 16px',
            backgroundPosition: '0 0, 8px 8px',
          }}
        />

        {/* Floating Monogram & Icon */}
        <div className="relative z-10 animate-[float_6s_ease-in-out_infinite] flex flex-col items-center">
          <div className="w-20 h-20 rounded-full border-2 border-[#D4AF37] bg-gradient-to-br from-[#1A1A20] to-[#0A0A0E] flex items-center justify-center shadow-[0_0_25px_rgba(212,175,55,0.3)] mb-3">
            <span className="font-mono text-2xl font-black text-gold-gradient tracking-widest">
              VRN
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-mono text-[#F5D77F] uppercase tracking-wider font-semibold">
            <Code2 className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>AI Student</span>
          </div>

          <p className="text-[11px] font-mono text-[#9CA3AF] mt-1">
            KITS Warangal
          </p>
        </div>

        {/* Status indicator badge */}
        <div className="absolute -bottom-1 -right-1 bg-[#121215] text-[#F5D77F] px-3 py-1 text-[10px] font-mono uppercase tracking-widest border border-[#D4AF37] z-10 shadow-[2px_2px_0px_0px_#D4AF37]">
          <span className="inline-block w-1.5 h-1.5 bg-[#22C55E] rounded-full mr-1.5 animate-pulse" />
          Active
        </div>
      </div>
    </div>
  );
};

export default AnimatedAvatar;
