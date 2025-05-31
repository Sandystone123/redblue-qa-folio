
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = 'Blending test automation with AI-driven validation excellence';

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
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden content-layer">
      {/* Enhanced floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(200)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-20 max-w-7xl mx-auto text-center px-6">
        <div className="glass-panel rounded-3xl p-16 animate-fade-in-up backdrop-blur-2xl">
          <h1 className="text-8xl md:text-9xl font-bold mb-8 cosmic-text">
            <span className="block mb-6 drop-shadow-2xl">Sandeep P B</span>
            <span className="block accent-text text-5xl md:text-6xl font-semibold">QA Engineer</span>
          </h1>
          
          <div className="h-20 mb-16">
            <p className="text-2xl md:text-3xl text-gray-100 font-light">
              {currentText}
              {isTyping && <span className="animate-pulse text-blue-300 ml-1">|</span>}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="primary-button text-xl px-12 py-6 font-semibold"
            >
              Get In Touch
            </Button>
            
            <Button 
              onClick={scrollToProjects}
              variant="outline" 
              size="lg"
              className="modern-button text-xl px-12 py-6 font-semibold border-2 border-blue-300/50"
            >
              Explore My Work
            </Button>
          </div>

          {/* Achievement badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="glass-panel-dark rounded-2xl p-6">
              <div className="text-3xl font-bold accent-text">2+</div>
              <div className="text-gray-200 text-sm">Years Experience</div>
            </div>
            <div className="glass-panel-dark rounded-2xl p-6">
              <div className="text-3xl font-bold text-blue-300">15+</div>
              <div className="text-gray-200 text-sm">Projects Completed</div>
            </div>
            <div className="glass-panel-dark rounded-2xl p-6">
              <div className="text-3xl font-bold text-amber-300">100+</div>
              <div className="text-gray-200 text-sm">Bugs Found</div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator mt-16">
          <ChevronDown 
            className="w-10 h-10 text-white/80 cursor-pointer hover:text-blue-300 transition-colors duration-300"
            onClick={scrollToAbout}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
