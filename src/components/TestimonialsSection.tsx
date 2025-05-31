
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Tech Lead",
      company: "TechTree IT Systems",
      content: "Sandeep's attention to detail and thorough testing approach has significantly improved our product quality. His automation skills are exceptional.",
      rating: 5,
      avatar: "👨‍💻"
    },
    {
      name: "Project Manager",
      company: "Client Project",
      content: "Outstanding work on our e-commerce platform testing. Sandeep identified critical issues that could have impacted user experience.",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      name: "Development Team",
      company: "Collaborative Project",
      content: "Working with Sandeep has been a pleasure. His systematic approach to QA and clear bug reporting helps us deliver better software.",
      rating: 5,
      avatar: "👥"
    }
  ];

  return (
    <section id="testimonials" className="py-24 section-enter content-layer">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-6xl md:text-7xl font-bold mb-8 cosmic-text">
            Client <span className="accent-text">Testimonials</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-300 to-purple-300 mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light">
            What colleagues and clients say about working with me
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-panel rounded-3xl p-8 animate-fade-in-up hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">{testimonial.avatar}</div>
                <div>
                  <h4 className="font-semibold cosmic-text">{testimonial.name}</h4>
                  <p className="text-gray-300 text-sm">{testimonial.company}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              
              <p className="text-gray-200 leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
