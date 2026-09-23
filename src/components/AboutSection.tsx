import SectionBlock from './SectionBlock';
import AnimatedAvatar from './AnimatedAvatar';
import { Link } from 'react-router-dom';
import { Target, Compass, ArrowRight } from 'lucide-react';

const AboutSection = () => (
  <SectionBlock
    id="about"
    title="Career Objective & About"
    subtitle="Engineering student focusing on Artificial Intelligence and core software foundations."
  >
    <article
      aria-label="About Vaibhav Rao Nallani"
      className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-14"
    >
      <AnimatedAvatar />

      <div className="flex-1 space-y-6">
        {/* Career Objective Box */}
        <div className="p-6 border-2 border-[#D4AF37] bg-[#0E0E12] shadow-gold relative">
          <div className="flex items-center gap-2 mb-3">
            <Target className="w-5 h-5 text-[#D4AF37]" />
            <h3 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#F5D77F]">
              Career Objective
            </h3>
          </div>
          <p className="text-[#F3F4F6] text-base leading-relaxed font-normal">
            "To secure a challenging position in the field of{' '}
            <strong className="text-[#F5D77F] font-semibold">
              Computer Science and Artificial Intelligence &amp; Machine Learning
            </strong>
            , where I can apply my technical knowledge, programming skills, and problem-solving abilities to contribute to innovative projects, while continuously learning and enhancing my expertise in emerging technologies."
          </p>
        </div>

        {/* Narrative background */}
        <p className="body-text">
          I'm <strong>Vaibhav Rao Nallani</strong>, currently pursuing my undergraduate degree in{' '}
          <strong className="text-[#F5D77F]">Artificial Intelligence</strong> (Class of 2024–2028) at{' '}
          <strong>Kakatiya Institute of Technology and Science (KITS)</strong>. My focus lies in building strong software design foundations using{' '}
          <strong>C</strong>, <strong>Java</strong>, and{' '}
          <strong>Object-Oriented Programming (OOP)</strong> concepts.
        </p>

        <p className="body-text">
          I am driven by a passion for continuous learning, exploring both core software architectures and quantitative computational systems like virtual portfolio simulators and algorithmic market research.
        </p>

        <div className="pt-2">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#D4AF37] bg-[#121216] text-xs font-mono font-bold uppercase tracking-widest text-[#F5D77F] hover:bg-[#D4AF37] hover:text-[#070707] transition-all duration-300 shadow-[3px_3px_0px_0px_#D4AF37] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
            aria-label="Read Vaibhav Rao Nallani's detailed background and academic timeline"
          >
            <span>Explore Full Biography</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  </SectionBlock>
);

export default AboutSection;
