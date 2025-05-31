
import { useState, useEffect } from 'react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    { name: 'Selenium WebDriver', level: 90, icon: '🔧', color: 'from-blue-400 to-blue-600' },
    { name: 'Java', level: 85, icon: '☕', color: 'from-orange-400 to-red-500' },
    { name: 'API Testing', level: 88, icon: '🌐', color: 'from-green-400 to-emerald-600' },
    { name: 'AI Tools Integration', level: 75, icon: '🤖', color: 'from-purple-400 to-pink-500' },
    { name: 'Report Testing', level: 82, icon: '📊', color: 'from-yellow-400 to-orange-500' },
    { name: 'Postman', level: 90, icon: '📮', color: 'from-cyan-400 to-blue-500' },
    { name: 'Jira', level: 85, icon: '📋', color: 'from-indigo-400 to-purple-500' },
    { name: 'Test Automation', level: 87, icon: '⚡', color: 'from-pink-400 to-red-500' },
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
    <section id="skills" className="py-20 section-enter">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 cosmic-text">
            My <span className="accent-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
            A comprehensive toolkit for delivering high-quality software testing solutions with cutting-edge technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-card animate-fade-in-up text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{skill.icon}</div>
              <h3 className="font-semibold text-lg cosmic-text mb-4">
                {skill.name}
              </h3>
              
              {/* Circular Progress */}
              <div className="relative w-24 h-24 mx-auto mb-4">
                <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 45}`}
                    strokeDashoffset={isVisible ? `${2 * Math.PI * 45 * (1 - skill.level / 100)}` : `${2 * Math.PI * 45}`}
                    style={{
                      transition: 'stroke-dashoffset 1.5s ease-in-out',
                      transitionDelay: `${index * 0.1}s`
                    }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#667eea" />
                      <stop offset="100%" stopColor="#764ba2" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-bold text-white">{skill.level}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
