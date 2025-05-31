
import { useState, useEffect } from 'react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    { 
      name: 'Selenium WebDriver', 
      icon: '🔧', 
      description: 'Automated web testing',
      color: 'from-green-400 to-emerald-600'
    },
    { 
      name: 'Java', 
      icon: '☕', 
      description: 'Programming language',
      color: 'from-orange-400 to-red-500'
    },
    { 
      name: 'API Testing', 
      icon: '🌐', 
      description: 'RESTful services testing',
      color: 'from-blue-400 to-cyan-500'
    },
    { 
      name: 'AI Tools Integration', 
      icon: '🤖', 
      description: 'Machine learning in QA',
      color: 'from-purple-400 to-pink-500'
    },
    { 
      name: 'Report Testing', 
      icon: '📊', 
      description: 'Data validation',
      color: 'from-yellow-400 to-orange-500'
    },
    { 
      name: 'Postman', 
      icon: '📮', 
      description: 'API development environment',
      color: 'from-orange-400 to-red-400'
    },
    { 
      name: 'Jira', 
      icon: '📋', 
      description: 'Project management',
      color: 'from-blue-500 to-indigo-600'
    },
    { 
      name: 'Test Automation', 
      icon: '⚡', 
      description: 'Automated testing frameworks',
      color: 'from-cyan-400 to-blue-500'
    },
    { 
      name: 'CCD Testing', 
      icon: '☕', 
      description: 'Cafe Coffee Day app testing',
      color: 'from-amber-400 to-orange-600'
    },
    { 
      name: 'BNB Platform', 
      icon: '🌟', 
      description: 'E-commerce platform testing',
      color: 'from-purple-500 to-pink-600'
    },
  ];

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
    <section id="skills" className="py-24 section-enter content-layer">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-6xl md:text-7xl font-bold mb-8 cosmic-text">
            Technical <span className="accent-text">Skills</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-300 to-purple-300 mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light">
            A comprehensive arsenal of cutting-edge tools and technologies for delivering exceptional software quality assurance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-card group animate-fade-in-up text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-6">
                <div className={`text-5xl mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12`}>
                  {skill.icon}
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-300/20 to-purple-300/20 blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
              </div>

              <h3 className="font-bold text-lg cosmic-text mb-3 group-hover:text-blue-300 transition-colors duration-300">
                {skill.name}
              </h3>
              
              <p className="text-gray-300 text-sm leading-relaxed font-light group-hover:text-white transition-colors duration-300">
                {skill.description}
              </p>

              <div className="mt-6 pt-4 border-t border-white/10">
                <div className={`w-full h-1 bg-gradient-to-r ${skill.color} rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>
            </div>
          ))}
        </div>

        {/* Floating particles for enhanced visual effect */}
        <div className="relative">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${6 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
