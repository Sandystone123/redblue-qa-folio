
const BlogSection = () => {
  const blogPosts = [
    {
      title: "The Future of AI in Software Testing",
      excerpt: "Exploring how artificial intelligence is revolutionizing quality assurance and automated testing processes.",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "AI & Testing",
      image: "🤖"
    },
    {
      title: "Best Practices for API Testing",
      excerpt: "A comprehensive guide to testing RESTful APIs effectively using modern tools and methodologies.",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "API Testing",
      image: "🌐"
    },
    {
      title: "Mobile App Testing Strategies",
      excerpt: "Essential techniques for ensuring quality across different mobile platforms and devices.",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Mobile Testing",
      image: "📱"
    }
  ];

  return (
    <section id="blog" className="py-24 section-enter content-layer">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-6xl md:text-7xl font-bold mb-8 cosmic-text">
            Latest <span className="accent-text">Insights</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-300 to-purple-300 mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light">
            Sharing knowledge and insights about quality assurance, testing methodologies, and industry trends
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="project-card group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {post.image}
              </div>
              
              <div className="mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-400/20 to-purple-400/20 border border-blue-400/30 text-blue-300">
                  {post.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold cosmic-text mb-4 group-hover:text-blue-300 transition-colors">
                {post.title}
              </h3>
              
              <p className="text-gray-200 mb-6 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex justify-between items-center text-sm text-gray-400">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
