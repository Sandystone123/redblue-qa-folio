
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-card/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-reddish-blue-400 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="animate-fade-in">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate and detail-oriented <span className="text-primary font-semibold">QA Engineer</span> with hands-on experience in both Manual and Automation Testing. My role involves thoroughly identifying bugs, validating functionalities, and ensuring high-quality user experiences across web applications.
              </p>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I have a strong foundation in tools like <span className="text-primary">Selenium, Java, and API Testing</span>, and I'm actively exploring the integration of AI-based testing solutions into modern QA workflows to improve accuracy and speed.
              </p>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I take pride in adapting quickly to new technologies, learning continuously, and contributing to clean, stable product releases. Whether it's writing clear test cases, automating regression suites, or experimenting with tools like <span className="text-primary">Applitools</span> and other AI validation frameworks, I bring a problem-solving mindset to every stage of the testing lifecycle.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-reddish-blue-400/20 rounded-2xl blur-3xl" />
            <div className="relative bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/30">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=600&fit=crop&crop=face"
                alt="Sandeep P B"
                className="w-full h-80 object-cover rounded-xl mb-6"
              />
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-background/50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary">2+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="bg-background/50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Projects Tested</div>
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
