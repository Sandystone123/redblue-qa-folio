
const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 section-enter">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-bold mb-6 cosmic-text">
            My <span className="accent-text">Experience</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            
            <div className="project-card hover:scale-105 transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div>
                  <h3 className="text-3xl font-bold cosmic-text mb-2">QA Trainee</h3>
                  <h4 className="text-xl accent-text font-semibold">TechTree IT Systems Pvt. Ltd.</h4>
                </div>
                <div className="text-sm bg-gradient-to-r from-blue-500/20 to-purple-600/20 px-4 py-2 rounded-full border border-blue-500/30 mt-4 lg:mt-0">
                  Present
                </div>
              </div>

              <p className="text-gray-300 mb-8 leading-relaxed text-lg font-light">
                Currently working on end-to-end testing processes for various web and mobile applications, contributing to quality assurance in an Agile environment with cutting-edge testing methodologies.
              </p>

              <div className="space-y-6">
                <h5 className="text-xl font-semibold cosmic-text mb-6">Key Responsibilities:</h5>
                
                <div className="grid lg:grid-cols-2 gap-6">
                  {[
                    'Writing and executing detailed test cases for functional, regression, and UI testing',
                    'Identifying, documenting, and tracking bugs using tools like Jira',
                    'Collaborating closely with developers to reproduce and resolve issues',
                    'Participating in sprint planning and contributing to Agile workflows',
                    'Performing API testing using tools like Postman and Rest Assured'
                  ].map((responsibility, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-3 flex-shrink-0" />
                      <span className="text-gray-300 leading-relaxed font-light">{responsibility}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-700/50">
                <div className="flex flex-wrap gap-3">
                  {['Manual Testing', 'Automation Testing', 'API Testing', 'Jira', 'Agile', 'Sprint Planning'].map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
