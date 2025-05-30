
const SkillsSection = () => {
  const skills = [
    { name: 'Selenium WebDriver', level: 85, icon: '🔧' },
    { name: 'Java', level: 80, icon: '☕' },
    { name: 'API Testing', level: 90, icon: '🔗' },
    { name: 'AI Tools Integration', level: 75, icon: '🤖' },
    { name: 'Report Testing', level: 85, icon: '📊' },
    { name: 'Postman', level: 90, icon: '📮' },
    { name: 'Jira', level: 85, icon: '🎯' },
    { name: 'Test Automation', level: 80, icon: '⚡' },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-card/20 to-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-reddish-blue-400 mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit for delivering high-quality software testing solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-card group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-3">{skill.name}</h3>
                
                <div className="relative h-2 bg-background/50 rounded-full overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-reddish-blue-400 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${skill.level}%`,
                      animationDelay: `${index * 0.2}s`
                    }}
                  />
                </div>
                
                <div className="text-sm text-muted-foreground mt-2">{skill.level}%</div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-reddish-blue-400/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
