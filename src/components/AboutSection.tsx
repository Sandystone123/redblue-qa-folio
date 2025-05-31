
const AboutSection = () => {
  return (
    <section id="about" className="py-20 section-enter">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 cosmic-text">
            About <span className="accent-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="glass-panel rounded-2xl p-8 animate-fade-in-up">
              <p className="text-lg text-gray-200 leading-relaxed font-light mb-6">
                I'm a passionate and detail-oriented <span className="accent-text font-semibold">QA Engineer</span> with hands-on experience in both Manual and Automation Testing. My role involves thoroughly identifying bugs, validating functionalities, and ensuring high-quality user experiences across web applications.
              </p>
              
              <p className="text-lg text-gray-200 leading-relaxed font-light mb-6">
                I have a strong foundation in tools like <span className="text-blue-400 font-semibold">Selenium, Java, and API Testing</span>, and I'm actively exploring the integration of AI-based testing solutions into modern QA workflows to improve accuracy and speed.
              </p>
              
              <p className="text-lg text-gray-200 leading-relaxed font-light">
                I take pride in adapting quickly to new technologies, learning continuously, and contributing to clean, stable product releases. Whether it's writing clear test cases, automating regression suites, or experimenting with tools like <span className="text-purple-400 font-semibold">Applitools</span> and other AI validation frameworks, I bring a problem-solving mindset to every stage of the testing lifecycle.
              </p>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative">
              {/* Profile Photo Container */}
              <div className="glass-panel rounded-full p-4 mb-8">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 backdrop-blur-xl flex items-center justify-center border border-white/20">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-3xl font-bold text-white">SP</span>
                    </div>
                    <p className="text-gray-300 text-lg">Profile Photo</p>
                    <p className="text-gray-400 text-sm">Upload separately</p>
                  </div>
                </div>
              </div>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="skill-card text-center p-6">
                  <div className="text-4xl font-bold accent-text mb-2">2+</div>
                  <div className="text-gray-200">Years Experience</div>
                </div>
                <div className="skill-card text-center p-6">
                  <div className="text-4xl font-bold text-blue-400 mb-2">15+</div>
                  <div className="text-gray-200">Projects Tested</div>
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
