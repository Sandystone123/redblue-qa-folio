
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = 'Blending test automation with AI-driven validation';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setCurrentText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Starfield Background */}
      <div className="starfield">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Orbs */}
      <div className="floating-orb w-64 h-64 bg-blue-500 top-20 left-20" style={{ animationDelay: '0s' }} />
      <div className="floating-orb w-48 h-48 bg-purple-500 bottom-20 right-20" style={{ animationDelay: '2s' }} />
      <div className="floating-orb w-32 h-32 bg-cyan-500 top-1/2 left-1/3" style={{ animationDelay: '4s' }} />

      <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-8">
            <span className="block text-white glow-text mb-4">Sandeep P B</span>
            <span className="block gradient-text text-4xl md:text-6xl">QA Engineer</span>
          </h1>
          
          <div className="h-20 mb-12">
            <p className="text-xl md:text-2xl text-blue-200">
              {currentText}
              {isTyping && <span className="animate-ping">|</span>}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="glow-button text-white px-10 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </Button>
            
            <Button 
              onClick={scrollToProjects}
              variant="outline" 
              size="lg"
              className="border-2 border-blue-400/50 text-blue-300 hover:bg-blue-400/10 hover:border-blue-400 px-10 py-4 text-lg font-semibold transition-all duration-300 backdrop-blur-sm"
            >
              View My Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
