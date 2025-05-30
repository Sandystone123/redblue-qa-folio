
const ProjectsSection = () => {
  const projects = [
    {
      title: 'Danbro',
      description: 'Comprehensive testing of retail ecommerce platform focusing on user experience, payment gateways, and inventory management systems. Implemented automated test suites for critical user journeys.',
      category: 'Ecommerce',
      technologies: ['Selenium', 'API Testing', 'Manual Testing', 'Payment Gateway Testing'],
      metrics: { bugs: '25+', coverage: '95%' }
    },
    {
      title: 'CCD (Cafe Coffee Day)',
      description: 'End-to-end testing of coffee delivery mobile application including order placement, payment processing, and delivery tracking. Focused on cross-platform compatibility.',
      category: 'Mobile App',
      technologies: ['Mobile Testing', 'API Testing', 'Performance Testing', 'Cross-Platform'],
      metrics: { bugs: '18+', coverage: '92%' }
    },
    {
      title: 'BNB',
      description: 'Quality assurance for ecommerce platform with focus on product catalog, search functionality, and checkout processes. Implemented regression testing automation.',
      category: 'Ecommerce',
      technologies: ['Automation Testing', 'Java', 'Selenium', 'Database Testing'],
      metrics: { bugs: '30+', coverage: '88%' }
    },
    {
      title: 'Geekay',
      description: 'Testing gaming product ecommerce website with emphasis on product filtering, gaming content, and user engagement features. Specialized in performance under load.',
      category: 'Gaming',
      technologies: ['UI Testing', 'Cross-browser Testing', 'API Testing', 'Load Testing'],
      metrics: { bugs: '22+', coverage: '90%' }
    },
    {
      title: 'BIND',
      description: 'Construction project platform testing for builders and developers selling apartments, including property listings and customer management systems.',
      category: 'Real Estate',
      technologies: ['Manual Testing', 'Database Testing', 'Integration Testing', 'Security Testing'],
      metrics: { bugs: '28+', coverage: '94%' }
    }
  ];

  return (
    <section id="projects" className="py-20 section-glow">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full mb-8" />
          <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            Showcasing quality assurance expertise across diverse industries and platforms with measurable impact
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group project-card animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300 mb-2">
                    {project.title}
                  </h3>
                  <span className="tech-badge">
                    {project.category}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-sm text-blue-300 mb-1">Bugs Found</div>
                  <div className="text-xl font-bold text-green-400">{project.metrics.bugs}</div>
                  <div className="text-sm text-blue-300 mb-1">Coverage</div>
                  <div className="text-lg font-bold text-purple-400">{project.metrics.coverage}</div>
                </div>
              </div>
              
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="tech-badge"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/50 group-hover:to-purple-500/50 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
