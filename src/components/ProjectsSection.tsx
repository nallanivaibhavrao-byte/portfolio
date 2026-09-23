import SectionBlock from './SectionBlock';
import { Badge } from './ui/badge';
import { playHover } from '@/hooks/useSoundEffects';
import { LineChart, UtensilsCrossed, TrendingUp, Info } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  icon: React.ReactNode;
  description: string;
  tags: string[];
  status: string;
}

const projects: Project[] = [
  {
    title: 'Virtual Portfolio Simulation',
    category: 'Financial Modeling & Simulation',
    icon: <LineChart className="w-5 h-5 text-[#D4AF37]" />,
    description:
      'A dynamic simulation platform designed to model virtual investment asset allocations, backtest trading strategies, and analyze portfolio risk versus returns in real-time.',
    tags: ['Java', 'OOP Concepts', 'Simulation Logic', 'Financial Modeling'],
    status: 'Details on request',
  },
  {
    title: 'Restaurant Management System',
    category: 'Application Engineering',
    icon: <UtensilsCrossed className="w-5 h-5 text-[#D4AF37]" />,
    description:
      'A structured software application built to streamline table bookings, digital order workflows, inventory tracking, and automated billing management.',
    tags: ['Java', 'Object-Oriented Design', 'Data Management', 'System Architecture'],
    status: 'Details on request',
  },
  {
    title: 'Research on Stock Market',
    category: 'Quantitative Market Research',
    icon: <TrendingUp className="w-5 h-5 text-[#D4AF37]" />,
    description:
      'An analytical research study investigating historical equity price movements, market volatility indicators, and quantitative patterns for informed financial decision-making.',
    tags: ['Market Analytics', 'Trend Analysis', 'Statistical Modeling', 'Research'],
    status: 'Details on request',
  },
];

const ProjectsSection = () => (
  <SectionBlock
    id="projects"
    title="Featured Projects"
    subtitle="Simulations, management systems, and market research studies."
  >
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {projects.map((project) => (
        <article
          key={project.title}
          aria-label={project.title}
          onMouseEnter={playHover}
          className="group relative border-2 border-[#D4AF37]/40 bg-[#0E0E12] p-6 md:p-7 flex flex-col justify-between hover:border-[#D4AF37] hover:shadow-gold hover:-translate-y-1 transition-all duration-300"
        >
          <div>
            {/* Header: Icon & Category */}
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#9CA3AF] px-2 py-0.5 border border-[#D4AF37]/20 bg-[#141419]">
                {project.category}
              </span>
              <div className="p-2 border border-[#D4AF37] bg-[#18181F] text-[#F5D77F] group-hover:bg-[#D4AF37] group-hover:text-[#070707] transition-colors">
                {project.icon}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-white group-hover:text-[#F5D77F] transition-colors tracking-tight">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-[#D1D5DB] mt-4 leading-relaxed font-normal">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mt-5">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="font-mono text-[10px] font-semibold border border-[#D4AF37]/30 bg-[#15151A] text-[#E5E7EB] px-2 py-0.5 hover:border-[#D4AF37]"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Footer Badge (Details on Request - Clean Description-Only Approach) */}
          <div className="mt-8 pt-5 border-t border-[#D4AF37]/20 flex items-center justify-between">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#D4AF37]">
              <Info className="w-3.5 h-3.5" />
              <span className="font-semibold uppercase tracking-wider text-[11px]">
                {project.status}
              </span>
            </div>
            <span className="text-[10px] font-mono text-[#6B7280]">
              Academic Project
            </span>
          </div>
        </article>
      ))}
    </div>
  </SectionBlock>
);

export default ProjectsSection;
