import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EducationSection from '@/components/EducationSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';
import ScrollToTop from '@/components/ScrollToTop';
import Terminal from '@/components/Terminal';
import Finale from '@/components/Finale';
import MatrixRain from '@/components/MatrixRain';

import { Helmet } from 'react-helmet-async';

const Index = () => {
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        name: 'Vaibhav Rao Nallani',
        givenName: 'Vaibhav',
        familyName: 'Nallani',
        jobTitle: ['Engineering Student (Artificial Intelligence)', 'Java & C Programmer'],
        email: 'nallanivaibhavrao@gmail.com',
        sameAs: [
          'https://www.linkedin.com/in/vaibhav-rao-nallani',
        ],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Warangal',
          addressRegion: 'Telangana',
          addressCountry: 'IN',
        },
        description:
          'Vaibhav Rao Nallani is an Engineering Student in Artificial Intelligence at Kakatiya Institute of Technology and Science (KITS), Warangal. Proficient in C, Java, and Object-Oriented Programming concepts.',
        alumniOf: {
          '@type': 'EducationalOrganization',
          name: 'Kakatiya Institute of Technology and Science (KITS)',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Warangal',
            addressRegion: 'Telangana',
            addressCountry: 'IN',
          },
        },
        knowsAbout: [
          'C Programming',
          'Java Programming',
          'Object-Oriented Programming (OOP)',
          'Artificial Intelligence Concepts',
          'Virtual Portfolio Simulation',
          'Restaurant Management System',
          'Stock Market Analysis',
          'UI/UX Design Fundamentals',
          'Digital Marketing',
        ],
      },
      {
        '@type': 'WebSite',
        name: 'Vaibhav Rao Nallani — Portfolio',
        description:
          'Official portfolio of Vaibhav Rao Nallani, Engineering Student in Artificial Intelligence at KITS Warangal.',
        inLanguage: 'en-IN',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#070707] text-[#f3f4f6] relative selection:bg-[#D4AF37]/30 selection:text-[#FFF0C2]">
      <Helmet>
        <title>Vaibhav Rao Nallani | Engineering Student (Artificial Intelligence)</title>
        <meta
          name="description"
          content="Portfolio of Vaibhav Rao Nallani — Engineering Student in Artificial Intelligence at KITS Warangal. Explore C, Java, OOP concepts, projects, and certifications."
        />

        {/* Open Graph */}
        <meta property="og:type" content="profile" />
        <meta property="og:title" content="Vaibhav Rao Nallani | Engineering Student (Artificial Intelligence)" />
        <meta
          property="og:description"
          content="Portfolio of Vaibhav Rao Nallani — Engineering Student in Artificial Intelligence at Kakatiya Institute of Technology and Science (KITS)."
        />
        <meta property="og:site_name" content="Vaibhav Rao Nallani Portfolio" />
        <meta property="og:locale" content="en_IN" />
        <meta property="profile:first_name" content="Vaibhav" />
        <meta property="profile:last_name" content="Nallani" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Vaibhav Rao Nallani | Engineering Student (Artificial Intelligence)" />
        <meta
          name="twitter:description"
          content="Portfolio of Vaibhav Rao Nallani — Engineering Student in Artificial Intelligence at KITS Warangal."
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      {/* Global Ambient Gold Matrix Rain */}
      <MatrixRain />
      <Navbar />
      <ScrollToTop />
      <Terminal />

      <main id="main-content" className="relative z-10">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      <Finale />
    </div>
  );
};

export default Index;
