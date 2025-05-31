
const AboutSection = () => {
  return (
    <section id="about" className="py-24 section-enter content-layer">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-6xl md:text-7xl font-bold mb-8 cosmic-text">
            About <span className="accent-text">Me</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-300 to-purple-300 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="glass-panel rounded-3xl p-10 animate-fade-in-up">
              <p className="text-xl text-gray-100 leading-relaxed font-light mb-8">
                I'm a passionate and detail-oriented <span className="accent-text font-semibold">QA Engineer</span> with hands-on experience in both Manual and Automation Testing. My mission is to ensure flawless user experiences through meticulous testing and innovative quality assurance strategies.
              </p>
              
              <p className="text-xl text-gray-100 leading-relaxed font-light mb-8">
                I have a strong foundation in cutting-edge tools like <span className="text-blue-300 font-semibold">Selenium, Java, and API Testing</span>, and I'm actively exploring the integration of AI-based testing solutions into modern QA workflows to revolutionize accuracy and efficiency.
              </p>
              
              <p className="text-xl text-gray-100 leading-relaxed font-light">
                My expertise spans across web applications, mobile platforms, and complex enterprise systems. Whether it's writing comprehensive test cases, automating regression suites, or implementing innovative testing frameworks, I bring a problem-solving mindset and attention to detail to every project.
              </p>
            </div>

            {/* Core values */}
            <div className="grid grid-cols-2 gap-6">
              <div className="glass-panel-dark rounded-2xl p-6 text-center">
                <div className="text-3xl mb-3">🎯</div>
                <h4 className="font-semibold text-blue-300 mb-2">Precision</h4>
                <p className="text-gray-300 text-sm">Meticulous attention to detail</p>
              </div>
              <div className="glass-panel-dark rounded-2xl p-6 text-center">
                <div className="text-3xl mb-3">🚀</div>
                <h4 className="font-semibold text-purple-300 mb-2">Innovation</h4>
                <p className="text-gray-300 text-sm">Embracing cutting-edge technologies</p>
              </div>
              <div className="glass-panel-dark rounded-2xl p-6 text-center">
                <div className="text-3xl mb-3">⚡</div>
                <h4 className="font-semibold text-amber-300 mb-2">Efficiency</h4>
                <p className="text-gray-300 text-sm">Optimizing testing processes</p>
              </div>
              <div className="glass-panel-dark rounded-2xl p-6 text-center">
                <div className="text-3xl mb-3">🔍</div>
                <h4 className="font-semibold text-green-300 mb-2">Quality</h4>
                <p className="text-gray-300 text-sm">Ensuring excellence in delivery</p>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative">
              {/* Enhanced Profile Photo Container */}
              <div className="glass-panel rounded-full p-6 mb-10 animate-slide-in-right">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400/30 to-purple-400/30 backdrop-blur-xl flex items-center justify-center border-2 border-white/30 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 animate-pulse" />
                  <div className="text-center z-10">
                    <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl">
                      <span className="text-4xl font-bold text-white">SP</span>
                    </div>
                    <p className="text-gray-200 text-xl font-semibold">Profile Photo</p>
                    <p className="text-gray-400 text-sm mt-2">Upload separately</p>
                  </div>
                  
                  {/* Floating particles around photo */}
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-white/60 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animation: `particle-float ${4 + Math.random() * 2}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 2}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
              
              {/* Enhanced Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="skill-card text-center p-8">
                  <div className="text-5xl font-bold accent-text mb-3">2+</div>
                  <div className="text-gray-200 font-medium">Years of Excellence</div>
                  <div className="text-gray-400 text-sm mt-2">In Quality Assurance</div>
                </div>
                <div className="skill-card text-center p-8">
                  <div className="text-5xl font-bold text-blue-300 mb-3">15+</div>
                  <div className="text-gray-200 font-medium">Projects Delivered</div>
                  <div className="text-gray-400 text-sm mt-2">Across Multiple Domains</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
