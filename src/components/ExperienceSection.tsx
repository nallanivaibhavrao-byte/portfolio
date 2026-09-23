import SectionBlock from './SectionBlock';
import { Award, Palette, TrendingUp, Megaphone, CheckCircle } from 'lucide-react';

const certifications = [
  {
    title: 'UI/UX Workshop',
    category: 'Design & Usability',
    issuer: 'Professional Workshop',
    icon: <Palette className="w-5 h-5 text-[#D4AF37]" />,
    description:
      'Participated in a comprehensive UI/UX workshop covering design thinking, user persona mapping, wireframing, design systems, and responsive interface workflows.',
    skills: ['User Interface Design', 'Wireframing', 'UX Principles', 'Prototyping'],
  },
  {
    title: 'Stock Market Basics',
    category: 'Finance & Analytics',
    issuer: 'Financial Education Course',
    icon: <TrendingUp className="w-5 h-5 text-[#D4AF37]" />,
    description:
      'Comprehensive foundation in stock market mechanics, equity fundamentals, technical indicators, candlestick pattern analysis, and portfolio risk management.',
    skills: ['Equity Analysis', 'Market Trends', 'Risk Management', 'Valuation Basics'],
  },
  {
    title: 'Digital Marketing',
    category: 'Marketing & Digital Strategy',
    issuer: 'Professional Certification',
    icon: <Megaphone className="w-5 h-5 text-[#D4AF37]" />,
    description:
      'Certified coursework in digital marketing strategies, search engine optimization (SEO), content positioning, social branding, and analytics.',
    skills: ['SEO Fundamentals', 'Brand Strategy', 'Audience Analytics', 'Content Strategy'],
  },
];

const ExperienceSection = () => {
  return (
    <SectionBlock
      id="certifications"
      title="Certifications & Workshops"
      subtitle="Verified certificates and specialized workshops completed."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certifications.map((cert) => (
          <article
            key={cert.title}
            aria-label={cert.title}
            className="group border-2 border-[#D4AF37]/40 bg-[#0E0E12] p-6 flex flex-col justify-between hover:border-[#D4AF37] hover:shadow-gold hover:-translate-y-1 transition-all duration-300"
          >
            <div>
              {/* Top Row: Category & Icon */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#9CA3AF] px-2 py-0.5 border border-[#D4AF37]/20 bg-[#141419]">
                  {cert.category}
                </span>
                <div className="p-2 border border-[#D4AF37] bg-[#18181F] text-[#F5D77F] group-hover:bg-[#D4AF37] group-hover:text-[#070707] transition-colors">
                  {cert.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white group-hover:text-[#F5D77F] transition-colors tracking-tight">
                {cert.title}
              </h3>
              <p className="text-xs font-mono text-[#D4AF37] mt-1">
                {cert.issuer}
              </p>

              {/* Description */}
              <p className="text-sm text-[#D1D5DB] mt-3 leading-relaxed">
                {cert.description}
              </p>
            </div>

            {/* Skills / Key Takeaways */}
            <div className="mt-6 pt-4 border-t border-[#D4AF37]/20">
              <div className="flex flex-wrap gap-1.5">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1 px-2 py-0.5 border border-[#D4AF37]/30 bg-[#141418] text-[10px] font-mono text-[#E5E7EB]"
                  >
                    <CheckCircle className="w-2.5 h-2.5 text-[#D4AF37]" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionBlock>
  );
};

export default ExperienceSection;
