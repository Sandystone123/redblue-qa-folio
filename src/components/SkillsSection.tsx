
const SkillsSection = () => {
  const skills = [
    { 
      name: 'Selenium WebDriver', 
      level: 85, 
      icon: (
        <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-white">
            <path fill="currentColor" d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm-1-17h2v10h-2zm0 12h2v2h-2z"/>
          </svg>
        </div>
      )
    },
    { 
      name: 'Java', 
      level: 80, 
      icon: (
        <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-white">
            <path fill="currentColor" d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218"/>
          </svg>
        </div>
      )
    },
    { 
      name: 'API Testing', 
      level: 90, 
      icon: (
        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-white">
            <path fill="currentColor" d="M7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z"/>
          </svg>
        </div>
      )
    },
    { 
      name: 'AI Tools Integration', 
      level: 75, 
      icon: (
        <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-white">
            <path fill="currentColor" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
      )
    },
    { 
      name: 'Report Testing', 
      level: 85, 
      icon: (
        <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-white">
            <path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
          </svg>
        </div>
      )
    },
    { 
      name: 'Postman', 
      level: 90, 
      icon: (
        <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
          <span className="text-lg font-bold text-white">PM</span>
        </div>
      )
    },
    { 
      name: 'Jira', 
      level: 85, 
      icon: (
        <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
          <span className="text-lg font-bold text-white">J</span>
        </div>
      )
    },
    { 
      name: 'Test Automation', 
      level: 80, 
      icon: (
        <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-white">
            <path fill="currentColor" d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
          </svg>
        </div>
      )
    },
  ];

  return (
    <section id="skills" className="py-20 section-glow">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-300 mx-auto rounded-full mb-8" />
          <p className="text-xl text-yellow-200 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit for delivering high-quality software testing solutions with cutting-edge technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-card group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="font-bold text-lg text-white mb-4 group-hover:text-yellow-300 transition-colors duration-300">
                  {skill.name}
                </h3>
                
                <div className="progress-bar mb-3">
                  <div 
                    className="progress-fill transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${skill.level}%`,
                      animationDelay: `${index * 0.2}s`
                    }}
                  />
                </div>
                
                <div className="text-sm text-yellow-300 font-semibold">{skill.level}%</div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-amber-300/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
