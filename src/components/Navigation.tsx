
import { useState, useEffect } from 'react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      const sections = navItems.map(item => document.getElementById(item.id));
      const current = sections.find(section => {
        if (section) {
          const rect = section.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-yellow-400/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold gradient-text">Sandeep P B</div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative text-sm font-medium transition-all duration-300 px-4 py-2 rounded-lg ${
                  activeSection === item.id
                    ? 'text-yellow-300 bg-yellow-400/10 border border-yellow-400/30'
                    : 'text-gray-300 hover:text-yellow-300 hover:bg-yellow-400/5'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-yellow-400 rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div 
        className="h-1 bg-gradient-to-r from-yellow-400 to-amber-300 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />
    </nav>
  );
};

export default Navigation;
