
const ProjectsSection = () => {
  const projects = [
    {
      title: 'Danbro',
      description: 'Comprehensive testing of retail ecommerce platform focusing on user experience, payment gateways, and inventory management systems.',
      category: 'Ecommerce',
      technologies: ['Selenium', 'API Testing', 'Manual Testing'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop'
    },
    {
      title: 'CCD (Cafe Coffee Day)',
      description: 'End-to-end testing of coffee delivery mobile application including order placement, payment processing, and delivery tracking.',
      category: 'Mobile App',
      technologies: ['Mobile Testing', 'API Testing', 'Performance Testing'],
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop'
    },
    {
      title: 'BNB',
      description: 'Quality assurance for ecommerce platform with focus on product catalog, search functionality, and checkout processes.',
      category: 'Ecommerce',
      technologies: ['Automation Testing', 'Java', 'Selenium'],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop'
    },
    {
      title: 'Geekay',
      description: 'Testing gaming product ecommerce website with emphasis on product filtering, gaming content, and user engagement features.',
      category: 'Gaming',
      technologies: ['UI Testing', 'Cross-browser Testing', 'API Testing'],
      image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=600&h=400&fit=crop'
    },
    {
      title: 'BIND',
      description: 'Construction project platform testing for builders and developers selling apartments, including property listings and customer management.',
      category: 'Real Estate',
      technologies: ['Manual Testing', 'Database Testing', 'Integration Testing'],
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-card/20 to-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-reddish-blue-400 mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Showcasing quality assurance expertise across diverse industries and platforms
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs rounded-full font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-background/50 text-muted-foreground text-xs rounded border border-border/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-reddish-blue-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
