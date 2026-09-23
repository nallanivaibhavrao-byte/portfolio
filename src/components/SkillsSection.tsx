import { Code2, Cpu, Boxes, CheckCircle2, Terminal } from 'lucide-react';
import SectionBlock from './SectionBlock';

const skillsData = [
  {
    title: 'C Programming',
    category: 'Core Language',
    icon: <Terminal className="w-5 h-5" />,
    summary:
      'Proficient in procedural programming, memory pointers, structures, and algorithmic logic implementation.',
    keyPoints: [
      'Procedural Program Design',
      'Pointers & Memory Concepts',
      'Control Structures & Functions',
      'Algorithm Implementation',
    ],
  },
  {
    title: 'Java Programming',
    category: 'Application Language',
    icon: <Code2 className="w-5 h-5" />,
    summary:
      'Proficient in robust, type-safe Java development for modular application logic and structured system design.',
    keyPoints: [
      'Core Java Syntax & Standard Lib',
      'Class & Object Architecture',
      'Exception Handling & I/O',
      'Collection & Array Operations',
    ],
  },
  {
    title: 'Object-Oriented Programming (OOP)',
    category: 'Software Paradigm',
    icon: <Boxes className="w-5 h-5" />,
    summary:
      'Foundational mastery of the core pillars of Object-Oriented Design to build reusable, clean, and extensible code.',
    keyPoints: [
      'Encapsulation & Data Hiding',
      'Inheritance & Code Reusability',
      'Polymorphism (Static & Dynamic)',
      'Abstraction & Interface Design',
    ],
  },
];

const SkillsSection = () => {
  return (
    <SectionBlock
      id="skills"
      title="Technical Skills"
      subtitle="Programming languages and foundational paradigms from verified coursework."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6" aria-label="Technical Skills of Vaibhav Rao Nallani">
        {skillsData.map((skill, idx) => (
          <article
            key={skill.title}
            aria-label={skill.title}
            className="group border-2 border-[#D4AF37]/40 bg-[#0E0E12] p-6 hover:border-[#D4AF37] hover:shadow-gold hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Category tag & Icon */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#9CA3AF] px-2 py-0.5 border border-[#D4AF37]/20 bg-[#141419]">
                  {skill.category}
                </span>
                <div className="p-2 border border-[#D4AF37] bg-[#1A1A20] text-[#F5D77F] group-hover:bg-[#D4AF37] group-hover:text-[#070707] transition-colors">
                  {skill.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-[#F5D77F] transition-colors">
                {skill.title}
              </h3>

              {/* Summary */}
              <p className="text-sm text-[#D1D5DB] leading-relaxed mb-6">
                {skill.summary}
              </p>
            </div>

            {/* Key Focus Points */}
            <div className="pt-4 border-t border-[#D4AF37]/20">
              <p className="font-mono text-[10px] uppercase tracking-widest text-[#D4AF37] mb-3 font-semibold">
                Key Competencies:
              </p>
              <ul className="space-y-2">
                {skill.keyPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-2 text-xs font-mono text-[#E5E7EB]"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      {/* Note on upcoming additions */}
      <div className="mt-8 p-4 border border-[#D4AF37]/20 bg-[#09090C] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="flex items-center gap-3">
          <Cpu className="w-5 h-5 text-[#D4AF37]" />
          <p className="text-xs font-mono text-[#9CA3AF]">
            Continuous Learning // Expanding foundational skills across AI and Software Engineering.
          </p>
        </div>
        <span className="font-mono text-[10px] text-[#F5D77F] uppercase tracking-widest px-3 py-1 border border-[#D4AF37]/30 bg-[#121216]">
          Class of 2028
        </span>
      </div>
    </SectionBlock>
  );
};

export default SkillsSection;
