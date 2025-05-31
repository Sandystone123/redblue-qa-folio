
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
    }, 80);

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
      {/* Enhanced Cosmic Background Elements */}
      <div className="starfield">
        {[...Array(200)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Cosmic Particles */}
      <div className="floating-particle w-96 h-96 top-20 left-20" style={{ animationDelay: '0s' }} />
      <div className="floating-particle w-64 h-64 bottom-20 right-20" style={{ animationDelay: '3s' }} />
      <div className="floating-particle w-48 h-48 top-1/2 right-1/3" style={{ animationDelay: '6s' }} />

      <div className="relative z-10 max-w-6xl mx-auto text-center px-6">
        <div className="animate-fade-in-up">
          <h1 className="text-7xl md:text-9xl font-bold mb-8 cosmic-text">
            <span className="block mb-4">Sandeep P B</span>
            <span className="block accent-text text-5xl md:text-7xl font-semibold">QA Engineer</span>
          </h1>
          
          <div className="h-24 mb-12">
            <p className="text-2xl md:text-3xl text-gray-200 font-light">
              {currentText}
              {isTyping && <span className="animate-pulse text-yellow-400 ml-1">|</span>}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="accent-button text-lg px-10 py-4 font-semibold transition-all duration-300"
            >
              Get In Touch
            </Button>
            
            <Button 
              onClick={scrollToProjects}
              variant="outline" 
              size="lg"
              className="modern-button text-lg px-10 py-4 font-semibold border-2 border-blue-500/50 hover:border-blue-400"
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
