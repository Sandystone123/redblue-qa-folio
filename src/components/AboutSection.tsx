
const AboutSection = () => {
  return (
    <section id="about" className="py-20 section-glow">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-300 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="animate-fade-in-up">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate and detail-oriented <span className="text-yellow-400 font-semibold glow-text">QA Engineer</span> with hands-on experience in both Manual and Automation Testing. My role involves thoroughly identifying bugs, validating functionalities, and ensuring high-quality user experiences across web applications.
              </p>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-lg text-gray-300 leading-relaxed">
                I have a strong foundation in tools like <span className="text-yellow-400 font-semibold">Selenium, Java, and API Testing</span>, and I'm actively exploring the integration of AI-based testing solutions into modern QA workflows to improve accuracy and speed.
              </p>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <p className="text-lg text-gray-300 leading-relaxed">
                I take pride in adapting quickly to new technologies, learning continuously, and contributing to clean, stable product releases. Whether it's writing clear test cases, automating regression suites, or experimenting with tools like <span className="text-amber-400 font-semibold">Applitools</span> and other AI validation frameworks, I bring a problem-solving mindset to every stage of the testing lifecycle.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="floating-orb w-96 h-96 bg-gradient-to-r from-yellow-400/20 to-amber-300/20 rounded-3xl" />
            <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/40 backdrop-blur-xl rounded-3xl p-8 border border-yellow-400/20">
              <div className="w-full h-80 bg-gradient-to-br from-slate-800/30 to-slate-700/30 rounded-2xl mb-8 flex items-center justify-center border border-yellow-400/20">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-amber-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl font-bold text-slate-900">SP</span>
                  </div>
                  <p className="text-yellow-200 text-lg">QA Engineer</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="bg-gradient-to-br from-slate-800/30 to-slate-700/20 rounded-2xl p-6 border border-yellow-400/20">
                  <div className="text-3xl font-bold text-yellow-400 glow-text mb-2">2+</div>
                  <div className="text-yellow-200">Years Experience</div>
                </div>
                <div className="bg-gradient-to-br from-slate-800/30 to-slate-700/20 rounded-2xl p-6 border border-amber-400/20">
                  <div className="text-3xl font-bold text-amber-400 glow-text mb-2">15+</div>
                  <div className="text-amber-200">Projects Tested</div>
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
