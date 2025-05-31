
import { useState, useEffect } from 'react';
import SkillsCarousel from './SkillsCarousel';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('skills');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 section-enter content-layer relative">
      {/* Enhanced background with subtle particle effects */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-1 h-1 bg-white/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-bold mb-8 cosmic-text">
            Technical <span className="accent-text">Skills</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-300 to-purple-300 mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light">
            Explore my comprehensive arsenal of cutting-edge tools and technologies through an interactive 3D showcase
          </p>
        </div>

        {/* 3D Cover Flow Carousel */}
        <div className="perspective-1000" style={{ perspective: '1000px' }}>
          <SkillsCarousel />
        </div>

        {/* Additional visual enhancement */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm font-light">
            Navigate through skills using arrow keys, clicking arrows, or swiping on mobile
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
