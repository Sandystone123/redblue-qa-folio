
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
      {/* Cosmic Starfield Background */}
      <div className="starfield">
        {[...Array(150)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Cosmic Orbs */}
      <div className="floating-orb w-80 h-80 bg-yellow-400 top-10 left-10" style={{ animationDelay: '0s' }} />
      <div className="floating-orb w-60 h-60 bg-amber-300 bottom-10 right-10" style={{ animationDelay: '2s' }} />
      <div className="floating-orb w-40 h-40 bg-yellow-300 top-1/2 right-1/4" style={{ animationDelay: '4s' }} />

      <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-8">
            <span className="block text-white mb-4">Sandeep P B</span>
            <span className="block gradient-text text-4xl md:text-6xl">QA Engineer</span>
          </h1>
          
          <div className="h-20 mb-12">
            <p className="text-xl md:text-2xl text-yellow-200">
              {currentText}
              {isTyping && <span className="animate-ping text-yellow-400">|</span>}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="glow-button text-slate-900 px-10 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </Button>
            
            <Button 
              onClick={scrollToProjects}
              variant="outline" 
              size="lg"
              className="border-2 border-yellow-400/50 text-yellow-300 hover:bg-yellow-400/10 hover:border-yellow-400 px-10 py-4 text-lg font-semibold transition-all duration-300 backdrop-blur-sm"
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
