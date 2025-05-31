
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

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

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Starfield */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(150)].map((_, i) => (
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

      <div className="relative z-10 max-w-6xl mx-auto text-center px-6">
        <div className="glass-panel rounded-3xl p-12 animate-fade-in-up">
          <h1 className="text-7xl md:text-8xl font-bold mb-6 cosmic-text">
            <span className="block mb-4">Sandeep P B</span>
            <span className="block accent-text text-4xl md:text-5xl font-semibold">QA Engineer</span>
          </h1>
          
          <div className="h-16 mb-12">
            <p className="text-xl md:text-2xl text-gray-200 font-light">
              {currentText}
              {isTyping && <span className="animate-pulse text-blue-400 ml-1">|</span>}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="primary-button text-lg px-10 py-4 font-semibold"
            >
              Get In Touch
            </Button>
            
            <Button 
              onClick={scrollToProjects}
              variant="outline" 
              size="lg"
              className="modern-button text-lg px-10 py-4 font-semibold border-2 border-blue-400/50"
            >
              View My Work
            </Button>
          </div>
        </div>

        <div className="scroll-indicator">
          <ChevronDown 
            className="w-8 h-8 text-white/70 cursor-pointer hover:text-blue-400 transition-colors"
            onClick={scrollToAbout}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
