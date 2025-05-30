
const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-background to-card/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-reddish-blue-400 mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-reddish-blue-400" />
            
            <div className="relative pl-20 pb-12">
              <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background" />
              
              <div className="bg-card/30 backdrop-blur-sm rounded-xl p-8 border border-border/30 animate-fade-in">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">QA Trainee</h3>
                    <h4 className="text-lg text-primary font-semibold">TechTree IT Systems Pvt. Ltd.</h4>
                  </div>
                  <div className="text-sm text-muted-foreground bg-background/50 px-3 py-1 rounded-full mt-2 md:mt-0">
                    Present
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Currently working on end-to-end testing processes for various web and mobile applications, contributing to quality assurance in an Agile environment.
                </p>

                <div className="space-y-4">
                  <h5 className="text-lg font-semibold text-foreground mb-3">Key Responsibilities:</h5>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Writing and executing detailed test cases for functional, regression, and UI testing</span>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Identifying, documenting, and tracking bugs using tools like Jira</span>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Collaborating closely with developers to reproduce and resolve issues</span>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Participating in sprint planning and contributing to Agile workflows</span>
                    </div>
                    
                    <div className="flex items-start space-x-3 md:col-span-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Performing API testing using tools like Postman and Rest Assured</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border/30">
                  <div className="flex flex-wrap gap-2">
                    {['Manual Testing', 'Automation Testing', 'API Testing', 'Jira', 'Agile', 'Sprint Planning'].map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20"
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
