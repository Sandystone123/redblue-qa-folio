
const ProjectsSection = () => {
  const projects = [
    {
      title: 'Danbro',
      description: 'Comprehensive testing of retail ecommerce platform focusing on user experience, payment gateways, and inventory management systems.',
      category: 'Ecommerce',
      technologies: ['Selenium', 'API Testing', 'Manual Testing', 'Payment Gateway Testing'],
      metrics: { bugs: '25+', coverage: '95%' },
      image: '🛍️'
    },
    {
      title: 'CCD (Cafe Coffee Day)',
      description: 'End-to-end testing of coffee delivery mobile application including order placement, payment processing, and delivery tracking.',
      category: 'Mobile App',
      technologies: ['Mobile Testing', 'API Testing', 'Performance Testing', 'Cross-Platform'],
      metrics: { bugs: '18+', coverage: '92%' },
      image: '☕'
    },
    {
      title: 'BNB',
      description: 'Quality assurance for ecommerce platform with focus on product catalog, search functionality, and checkout processes.',
      category: 'Ecommerce',
      technologies: ['Automation Testing', 'Java', 'Selenium', 'Database Testing'],
      metrics: { bugs: '30+', coverage: '88%' },
      image: '🏪'
    },
    {
      title: 'Geekay',
      description: 'Testing gaming product ecommerce website with emphasis on product filtering, gaming content, and user engagement features.',
      category: 'Gaming',
      technologies: ['UI Testing', 'Cross-browser Testing', 'API Testing', 'Load Testing'],
      metrics: { bugs: '22+', coverage: '90%' },
      image: '🎮'
    },
    {
      title: 'BIND',
      description: 'Construction project platform testing for builders and developers selling apartments, including property listings and customer management.',
      category: 'Real Estate',
      technologies: ['Manual Testing', 'Database Testing', 'Integration Testing', 'Security Testing'],
      metrics: { bugs: '28+', coverage: '94%' },
      image: '🏗️'
    }
  ];

  return (
    <section id="projects" className="py-20 section-enter">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 cosmic-text">
            My <span className="accent-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
            Showcasing quality assurance expertise across diverse industries and platforms with measurable impact
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{project.image}</div>
                  <div>
                    <h3 className="text-2xl font-bold cosmic-text group-hover:text-blue-400 transition-colors mb-2">
                      {project.title}
                    </h3>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-400/20 to-purple-400/20 border border-blue-400/30 text-blue-300">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="text-right space-y-2">
                  <div className="text-sm text-blue-400">Bugs Found</div>
                  <div className="text-xl font-bold text-green-400">{project.metrics.bugs}</div>
                  <div className="text-sm text-blue-400">Coverage</div>
                  <div className="text-lg font-bold accent-text">{project.metrics.coverage}</div>
                </div>
              </div>
              
              <p className="text-gray-200 text-base leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-400/20 to-pink-400/20 border border-purple-400/30 text-purple-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
