
import { useState, useEffect } from 'react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    { name: 'Selenium WebDriver', level: 90, icon: '🔧' },
    { name: 'Java', level: 85, icon: '☕' },
    { name: 'API Testing', level: 88, icon: '🌐' },
    { name: 'AI Tools Integration', level: 75, icon: '🤖' },
    { name: 'Report Testing', level: 82, icon: '📊' },
    { name: 'Postman', level: 90, icon: '📮' },
    { name: 'Jira', level: 85, icon: '📋' },
    { name: 'Test Automation', level: 87, icon: '⚡' },
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
          <h2 className="text-6xl md:text-7xl font-bold mb-6 cosmic-text">
            My <span className="accent-text">Skills</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            A comprehensive toolkit for delivering high-quality software testing solutions with cutting-edge technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-card animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">{skill.icon}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg cosmic-text mb-2">
                    {skill.name}
                  </h3>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div
                      className="progress-bar"
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 0.1}s`
                      }}
                    />
                  </div>
                  <div className="text-sm text-gray-400 mt-1">{skill.level}%</div>
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
