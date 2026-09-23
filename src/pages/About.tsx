import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  GraduationCap,
  Code2,
  Briefcase,
  Award,
  Phone,
  Mail,
  Linkedin,
  MapPin,
  Target,
  FileCheck2,
} from 'lucide-react';
import { playClick } from '@/hooks/useSoundEffects';

const About = () => {
  return (
    <div className="min-h-screen bg-[#070707] text-[#f3f4f6] selection:bg-[#D4AF37]/30 selection:text-[#FFF0C2]">
      <Helmet>
        <title>About | Vaibhav Rao Nallani — Engineering Student (Artificial Intelligence)</title>
        <meta
          name="description"
          content="Biography and academic profile of Vaibhav Rao Nallani — Engineering Student in Artificial Intelligence at Kakatiya Institute of Technology and Science (KITS)."
        />
      </Helmet>

      <Navbar />

      <main id="main-content" className="max-w-4xl mx-auto px-6 pt-28 md:pt-36 pb-24 relative z-10">
        {/* Back Link */}
        <Link
          to="/"
          onClick={playClick}
          className="inline-flex items-center gap-2 text-xs font-mono text-[#D4AF37] hover:text-[#F5D77F] transition-colors mb-10 group"
          aria-label="Back to home portfolio"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Portfolio</span>
        </Link>

        {/* Header */}
        <header className="mb-14 border-b border-[#D4AF37]/30 pb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37] uppercase tracking-widest mb-3">
            <span className="w-2 h-2 bg-[#D4AF37] rounded-full" />
            Academic Profile &amp; Biography
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white leading-none">
            About <span className="text-gold-gradient">Vaibhav Rao Nallani.</span>
          </h1>
          <p className="flex items-center gap-2 font-mono text-xs text-[#9CA3AF] uppercase tracking-widest mt-4">
            <MapPin className="w-4 h-4 text-[#D4AF37]" aria-hidden="true" />
            Warangal, Telangana, India • Kakatiya Institute of Technology and Science
          </p>
        </header>

        <article className="space-y-16">
          {/* Career Objective */}
          <section aria-labelledby="objective-heading">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-6 h-6 text-[#D4AF37]" />
              <h2 id="objective-heading" className="text-xl md:text-2xl font-bold uppercase tracking-tight text-[#F5D77F]">
                Career Objective
              </h2>
            </div>
            <div className="p-6 md:p-8 border-2 border-[#D4AF37] bg-[#0E0E12] shadow-gold">
              <p className="text-base text-[#F3F4F6] leading-relaxed">
                "To secure a challenging position in the field of{' '}
                <strong className="text-[#F5D77F]">
                  Computer Science and the Artificial Intelligence and Machine Learning
                </strong>
                , where I can apply my technical knowledge, programming skills, and problem-solving abilities to contribute to innovative projects, while continuously learning and enhancing my expertise in emerging technologies."
              </p>
            </div>
          </section>

          {/* Education Timeline */}
          <section aria-labelledby="education-heading">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-6 h-6 text-[#D4AF37]" />
              <h2 id="education-heading" className="text-xl md:text-2xl font-bold uppercase tracking-tight text-[#F5D77F]">
                Education Timeline
              </h2>
            </div>

            <div className="space-y-6">
              {/* Undergraduate */}
              <div className="border-l-2 border-[#D4AF37] pl-6 py-2 bg-[#0C0C10] p-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h3 className="text-lg font-bold text-white">
                    Under Graduation (B.Tech) — Artificial Intelligence
                  </h3>
                  <span className="font-mono text-xs font-bold px-2.5 py-1 border border-[#D4AF37] bg-[#16161C] text-[#F5D77F] self-start">
                    CGPA: 7.1
                  </span>
                </div>
                <p className="text-sm font-semibold text-[#D4AF37] mt-1">
                  Kakatiya Institute of Technology and Science (KITS)
                </p>
                <p className="font-mono text-xs text-[#9CA3AF] mt-1">2024 – 2028</p>
                <p className="text-sm text-[#D1D5DB] mt-2 leading-relaxed">
                  Focusing on core programming structures, object-oriented systems, and artificial intelligence fundamentals.
                </p>
              </div>

              {/* Intermediate */}
              <div className="border-l-2 border-[#D4AF37]/50 pl-6 py-2 bg-[#0C0C10] p-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h3 className="text-lg font-bold text-white">
                    Board of Intermediate Secondary Education (12th Grade)
                  </h3>
                  <span className="font-mono text-xs font-bold px-2.5 py-1 border border-[#D4AF37]/40 bg-[#16161C] text-[#F5D77F] self-start">
                    Score: 78.3%
                  </span>
                </div>
                <p className="text-sm font-semibold text-[#D4AF37] mt-1">
                  Bansal Junior College
                </p>
                <p className="font-mono text-xs text-[#9CA3AF] mt-1">2022 – 2024</p>
              </div>

              {/* SSC */}
              <div className="border-l-2 border-[#D4AF37]/30 pl-6 py-2 bg-[#0C0C10] p-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h3 className="text-lg font-bold text-white">
                    Secondary School Certificate (SSC – 10th Board)
                  </h3>
                  <span className="font-mono text-xs font-bold px-2.5 py-1 border border-[#D4AF37]/40 bg-[#16161C] text-[#F5D77F] self-start">
                    CGPA: 9.2
                  </span>
                </div>
                <p className="text-sm font-semibold text-[#D4AF37] mt-1">
                  Tejaswi High School
                </p>
                <p className="font-mono text-xs text-[#9CA3AF] mt-1">Completed 2022</p>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section aria-labelledby="skills-heading">
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="w-6 h-6 text-[#D4AF37]" />
              <h2 id="skills-heading" className="text-xl md:text-2xl font-bold uppercase tracking-tight text-[#F5D77F]">
                Technical Skills
              </h2>
            </div>
            <div className="p-6 border border-[#D4AF37]/40 bg-[#0E0E12] space-y-4">
              <p className="text-[#E5E7EB] text-sm leading-relaxed">
                Proficient in <strong className="text-[#F5D77F]">C</strong> and <strong className="text-[#F5D77F]">Java</strong> with a strong foundation in core programming concepts and <strong className="text-[#F5D77F]">object-oriented development (OOP)</strong>.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {['C Programming', 'Java Programming', 'Object-Oriented Programming (OOP)'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 font-mono text-xs border border-[#D4AF37] bg-[#141419] text-[#F5D77F] font-bold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Projects */}
          <section aria-labelledby="projects-heading">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-6 h-6 text-[#D4AF37]" />
              <h2 id="projects-heading" className="text-xl md:text-2xl font-bold uppercase tracking-tight text-[#F5D77F]">
                Projects
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 border border-[#D4AF37]/30 bg-[#0E0E12]">
                <h3 className="font-bold text-white mb-2">Virtual Portfolio Simulation</h3>
                <p className="text-xs text-[#D1D5DB] leading-relaxed">
                  Dynamic simulation tool to model asset allocations, backtest portfolio strategies, and analyze financial risk/returns.
                </p>
              </div>
              <div className="p-5 border border-[#D4AF37]/30 bg-[#0E0E12]">
                <h3 className="font-bold text-white mb-2">Restaurant Management System</h3>
                <p className="text-xs text-[#D1D5DB] leading-relaxed">
                  Management application streamlining table reservations, digital order management, inventory control, and automated billing.
                </p>
              </div>
              <div className="p-5 border border-[#D4AF37]/30 bg-[#0E0E12]">
                <h3 className="font-bold text-white mb-2">Research on Stock Market</h3>
                <p className="text-xs text-[#D1D5DB] leading-relaxed">
                  Analytical quantitative study investigating historical market trends, equity volatility signals, and financial modeling.
                </p>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section aria-labelledby="certs-heading">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-[#D4AF37]" />
              <h2 id="certs-heading" className="text-xl md:text-2xl font-bold uppercase tracking-tight text-[#F5D77F]">
                Certifications &amp; Workshops
              </h2>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <li className="p-4 border border-[#D4AF37]/30 bg-[#0E0E12] flex items-center gap-2.5 text-sm font-semibold text-white">
                <span className="w-2 h-2 bg-[#D4AF37] rounded-full shrink-0" />
                UI/UX Workshop
              </li>
              <li className="p-4 border border-[#D4AF37]/30 bg-[#0E0E12] flex items-center gap-2.5 text-sm font-semibold text-white">
                <span className="w-2 h-2 bg-[#D4AF37] rounded-full shrink-0" />
                Stock Market Basics
              </li>
              <li className="p-4 border border-[#D4AF37]/30 bg-[#0E0E12] flex items-center gap-2.5 text-sm font-semibold text-white">
                <span className="w-2 h-2 bg-[#D4AF37] rounded-full shrink-0" />
                Digital Marketing
              </li>
            </ul>
          </section>

          {/* Declaration */}
          <section aria-labelledby="declaration-heading">
            <div className="flex items-center gap-2 mb-3">
              <FileCheck2 className="w-4 h-4 text-[#D4AF37]" />
              <h3 id="declaration-heading" className="font-mono text-xs font-bold uppercase tracking-widest text-[#F5D77F]">
                Declaration
              </h3>
            </div>
            <div className="p-5 border border-[#D4AF37]/20 bg-[#0A0A0C]">
              <p className="text-xs font-mono text-[#9CA3AF] italic leading-relaxed">
                "I hereby declare that the above information is correct and true to the best of my knowledge and belief."
              </p>
              <p className="font-mono text-xs font-bold text-[#F5D77F] mt-3">
                — Vaibhav Rao Nallani
              </p>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default About;
