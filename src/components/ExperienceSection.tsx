
const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 section-glow">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            My <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full" />
            
            <div className="relative pl-20 pb-12">
              <div className="absolute left-6 top-8 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full border-4 border-slate-900 shadow-lg" style={{ boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' }} />
              
              <div className="project-card animate-fade-in-up">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">QA Trainee</h3>
                    <h4 className="text-xl text-blue-400 font-semibold glow-text">TechTree IT Systems Pvt. Ltd.</h4>
                  </div>
                  <div className="text-sm tech-badge mt-4 lg:mt-0">
                    Present
                  </div>
                </div>

                <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                  Currently working on end-to-end testing processes for various web and mobile applications, contributing to quality assurance in an Agile environment with cutting-edge testing methodologies.
                </p>

                <div className="space-y-6">
                  <h5 className="text-xl font-semibold text-white mb-6 glow-text">Key Responsibilities:</h5>
                  
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-blue-400 rounded-full mt-2 flex-shrink-0" style={{ boxShadow: '0 0 10px rgba(59, 130, 246, 0.8)' }} />
                      <span className="text-gray-300 leading-relaxed">Writing and executing detailed test cases for functional, regression, and UI testing</span>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0" style={{ boxShadow: '0 0 10px rgba(139, 92, 246, 0.8)' }} />
                      <span className="text-gray-300 leading-relaxed">Identifying, documenting, and tracking bugs using tools like Jira</span>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-cyan-400 rounded-full mt-2 flex-shrink-0" style={{ boxShadow: '0 0 10px rgba(6, 182, 212, 0.8)' }} />
                      <span className="text-gray-300 leading-relaxed">Collaborating closely with developers to reproduce and resolve issues</span>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-green-400 rounded-full mt-2 flex-shrink-0" style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.8)' }} />
                      <span className="text-gray-300 leading-relaxed">Participating in sprint planning and contributing to Agile workflows</span>
                    </div>
                    
                    <div className="flex items-start space-x-4 lg:col-span-2">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full mt-2 flex-shrink-0" style={{ boxShadow: '0 0 10px rgba(251, 191, 36, 0.8)' }} />
                      <span className="text-gray-300 leading-relaxed">Performing API testing using tools like Postman and Rest Assured</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-blue-500/20">
                  <div className="flex flex-wrap gap-3">
                    {['Manual Testing', 'Automation Testing', 'API Testing', 'Jira', 'Agile', 'Sprint Planning'].map((tech) => (
                      <span 
                        key={tech}
                        className="tech-badge"
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
      </div>
    </section>
  );
};

export default ExperienceSection;
