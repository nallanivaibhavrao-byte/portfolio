import SectionBlock from './SectionBlock';
import { GraduationCap, Award, Calendar, Building2 } from 'lucide-react';

const education = [
  {
    degree: 'Under Graduation (B.Tech) — Artificial Intelligence',
    institution: 'Kakatiya Institute of Technology and Science (KITS)',
    location: 'Warangal, Telangana',
    period: '2024 – 2028',
    scoreLabel: 'CGPA',
    score: '7.1',
    description:
      'Pursuing comprehensive coursework in Artificial Intelligence, programming concepts in C and Java, and core computer science fundamentals.',
    highlight: true,
  },
  {
    degree: 'Board of Intermediate Secondary Education (12th Grade)',
    institution: 'Bansal Junior College',
    location: 'Telangana',
    period: '2022 – 2024',
    scoreLabel: 'Percentage',
    score: '78.3%',
    description:
      'Completed senior secondary education focusing on Mathematics, Physics, and Chemistry (MPC).',
    highlight: false,
  },
  {
    degree: 'Secondary School Certificate (SSC – 10th Board)',
    institution: 'Tejaswi High School',
    location: 'Telangana',
    period: 'Completed 2022',
    scoreLabel: 'CGPA',
    score: '9.2',
    description:
      'Graduated with distinction and academic excellence across foundational science and mathematics.',
    highlight: false,
  },
];

const EducationSection = () => (
  <SectionBlock
    id="education"
    title="Education"
    subtitle="Academic qualifications, institutions, and performance milestones."
  >
    <div className="space-y-6">
      {education.map((item, idx) => (
        <article
          key={item.degree}
          aria-label={item.degree}
          className={`group p-6 md:p-8 border-2 transition-all duration-300 ${
            item.highlight
              ? 'border-[#D4AF37] bg-[#0F0F13] shadow-gold'
              : 'border-[#D4AF37]/30 bg-[#0A0A0D] hover:border-[#D4AF37] hover:shadow-[4px_4px_0px_0px_#D4AF37]'
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="p-3 border border-[#D4AF37] bg-[#18181D] text-[#F5D77F] shrink-0 mt-1 shadow-[2px_2px_0px_0px_#D4AF37]">
                <GraduationCap className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
                  {item.degree}
                </h3>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1.5 text-sm">
                  <span className="text-[#F5D77F] font-semibold flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                    {item.institution}
                  </span>
                  <span className="text-[#D4AF37]/40 hidden sm:inline">•</span>
                  <span className="font-mono text-xs text-[#9CA3AF] flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#D4AF37]" />
                    {item.period}
                  </span>
                </div>
                <p className="text-sm text-[#D1D5DB] mt-3 leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Score Badge */}
            <div className="self-start md:self-center shrink-0">
              <div className="px-4 py-2 border-2 border-[#D4AF37] bg-[#141418] text-right rounded-sm shadow-[2px_2px_0px_0px_#D4AF37]">
                <span className="block font-mono text-[10px] uppercase tracking-widest text-[#9CA3AF]">
                  {item.scoreLabel}
                </span>
                <span className="font-mono text-lg font-black text-[#F5D77F]">
                  {item.score}
                </span>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  </SectionBlock>
);

export default EducationSection;
