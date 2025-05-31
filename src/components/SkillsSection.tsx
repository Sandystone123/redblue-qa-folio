
import { useState, useEffect } from 'react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    { 
      name: 'Selenium WebDriver', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12" fill="currentColor">
          <path d="M12.5 1.5a10.5 10.5 0 1 0 0 21 10.5 10.5 0 0 0 0-21zm-.5 2c4.7 0 8.5 3.8 8.5 8.5s-3.8 8.5-8.5 8.5S3.5 16.7 3.5 12 7.3 3.5 12 3.5zm0 2.5a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm0 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"/>
        </svg>
      ), 
      description: 'Automated web testing',
      color: 'from-green-400 to-emerald-600'
    },
    { 
      name: 'Java', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12" fill="#ED8B00">
          <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639"/>
        </svg>
      ), 
      description: 'Programming language',
      color: 'from-orange-400 to-red-500'
    },
    { 
      name: 'API Testing', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12" fill="#61DAFB">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ), 
      description: 'RESTful services testing',
      color: 'from-blue-400 to-cyan-500'
    },
    { 
      name: 'AI Tools Integration', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12" fill="#FF6B6B">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          <circle cx="9" cy="9" r="2"/>
          <circle cx="15" cy="15" r="2"/>
        </svg>
      ), 
      description: 'Machine learning in QA',
      color: 'from-purple-400 to-pink-500'
    },
    { 
      name: 'Report Testing', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12" fill="#4CAF50">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
        </svg>
      ), 
      description: 'Data validation',
      color: 'from-yellow-400 to-orange-500'
    },
    { 
      name: 'Postman', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12" fill="#FF6C37">
          <path d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.427 6.573.843 12.585-3.8 13.428-10.372C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125-.588-.588z"/>
        </svg>
      ), 
      description: 'API development environment',
      color: 'from-orange-400 to-red-400'
    },
    { 
      name: 'Jira', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12" fill="#0052CC">
          <path d="M11.571 11.513H0a5.218 5.218 0 0 0 .093 5.362c.04.081.084.158.128.235l5.24-5.24a.367.367 0 0 1 .519 0l5.591 5.592v-.949zm6.198-5.194a.367.367 0 0 1 0 .519l-5.591 5.591h.949l5.24-5.24c-.044-.077-.087-.154-.128-.235a5.218 5.218 0 0 0-.093-5.362l-5.24 5.24a.367.367 0 0 1-.519 0l-5.591-5.591v.948z"/>
        </svg>
      ), 
      description: 'Project management',
      color: 'from-blue-500 to-indigo-600'
    },
    { 
      name: 'Test Automation', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12" fill="#FFD700">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          <path d="M12 6v6l4.5 2.7-.75 1.3L12 13V6z"/>
        </svg>
      ), 
      description: 'Automated testing frameworks',
      color: 'from-cyan-400 to-blue-500'
    },
    { 
      name: 'CCD Testing', 
      icon: (
        <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
          CCD
        </div>
      ), 
      description: 'Cafe Coffee Day app testing',
      color: 'from-amber-400 to-orange-600'
    },
    { 
      name: 'BNB Platform', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12" fill="#8B5CF6">
          <path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7l2-7z"/>
          <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ), 
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
                <div className="flex justify-center mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
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
