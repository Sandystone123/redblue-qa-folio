
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.section-enter');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <TestimonialsSection />
      <BlogSection />
      <ContactSection />
      
      <footer className="py-16 text-center border-t border-white/20 backdrop-blur-xl content-layer">
        <div className="glass-panel-dark rounded-2xl max-w-4xl mx-auto p-8">
          <p className="text-gray-300 font-light text-lg mb-4">
            © 2024 Sandeep P B. Crafted with passion for quality assurance excellence.
          </p>
          <p className="text-gray-400 text-sm">
            Ensuring software quality through innovative testing solutions and AI-driven validation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
