
const AboutSection = () => {
  return (
    <section id="about" className="py-20 section-enter">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-bold mb-6 cosmic-text">
            About <span className="accent-text">Me</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="animate-fade-in-up">
              <p className="text-lg text-gray-300 leading-relaxed font-light">
                I'm a passionate and detail-oriented <span className="accent-text font-semibold">QA Engineer</span> with hands-on experience in both Manual and Automation Testing. My role involves thoroughly identifying bugs, validating functionalities, and ensuring high-quality user experiences across web applications.
              </p>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-lg text-gray-300 leading-relaxed font-light">
                I have a strong foundation in tools like <span className="accent-text font-semibold">Selenium, Java, and API Testing</span>, and I'm actively exploring the integration of AI-based testing solutions into modern QA workflows to improve accuracy and speed.
              </p>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <p className="text-lg text-gray-300 leading-relaxed font-light">
                I take pride in adapting quickly to new technologies, learning continuously, and contributing to clean, stable product releases. Whether it's writing clear test cases, automating regression suites, or experimenting with tools like <span className="text-blue-400 font-semibold">Applitools</span> and other AI validation frameworks, I bring a problem-solving mindset to every stage of the testing lifecycle.
              </p>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative">
              {/* Profile Photo Placeholder */}
              <div className="profile-image bg-gradient-to-br from-slate-700/50 to-slate-600/30 backdrop-blur-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">SP</span>
                  </div>
                  <p className="text-gray-300 text-lg">Profile Photo</p>
                </div>
              </div>
              
              {/* Stats Grid */}
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="skill-card text-center p-6">
                  <div className="text-4xl font-bold accent-text mb-2">2+</div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
                <div className="skill-card text-center p-6">
                  <div className="text-4xl font-bold text-blue-400 mb-2">15+</div>
                  <div className="text-gray-300">Projects Tested</div>
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
