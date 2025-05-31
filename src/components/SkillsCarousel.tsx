
import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SkillsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    slidesToScroll: 1,
    containScroll: 'trimSnaps',
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const skills = [
    { 
      name: 'Selenium WebDriver', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-16 h-16" fill="currentColor">
          <path d="M12.5 1.5a10.5 10.5 0 1 0 0 21 10.5 10.5 0 0 0 0-21zm-.5 2c4.7 0 8.5 3.8 8.5 8.5s-3.8 8.5-8.5 8.5S3.5 16.7 3.5 12 7.3 3.5 12 3.5zm0 2.5a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm0 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"/>
        </svg>
      ), 
      description: 'Automated web testing',
      color: 'from-green-400 to-emerald-600',
      iconColor: 'text-green-500'
    },
    { 
      name: 'Java', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-16 h-16" fill="#ED8B00">
          <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639"/>
        </svg>
      ), 
      description: 'Programming language',
      color: 'from-orange-400 to-red-500',
      iconColor: 'text-orange-500'
    },
    { 
      name: 'API Testing', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-16 h-16" fill="#61DAFB">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ), 
      description: 'RESTful services testing',
      color: 'from-blue-400 to-cyan-500',
      iconColor: 'text-blue-500'
    },
    { 
      name: 'AI Tools Integration', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-16 h-16" fill="#FF6B6B">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          <circle cx="9" cy="9" r="2"/>
          <circle cx="15" cy="15" r="2"/>
        </svg>
      ), 
      description: 'Machine learning in QA',
      color: 'from-purple-400 to-pink-500',
      iconColor: 'text-purple-500'
    },
    { 
      name: 'Report Testing', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-16 h-16" fill="#4CAF50">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
        </svg>
      ), 
      description: 'Data validation',
      color: 'from-yellow-400 to-orange-500',
      iconColor: 'text-green-500'
    },
    { 
      name: 'Postman', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-16 h-16" fill="#FF6C37">
          <path d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.427 6.573.843 12.585-3.8 13.428-10.372C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125-.588-.588z"/>
        </svg>
      ), 
      description: 'API development environment',
      color: 'from-orange-400 to-red-400',
      iconColor: 'text-orange-600'
    },
    { 
      name: 'Jira', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-16 h-16" fill="#0052CC">
          <path d="M11.571 11.513H0a5.218 5.218 0 0 0 .093 5.362c.04.081.084.158.128.235l5.24-5.24a.367.367 0 0 1 .519 0l5.591 5.592v-.949zm6.198-5.194a.367.367 0 0 1 0 .519l-5.591 5.591h.949l5.24-5.24c-.044-.077-.087-.154-.128-.235a5.218 5.218 0 0 0-.093-5.362l-5.24 5.24a.367.367 0 0 1-.519 0l-5.591-5.591v.948z"/>
        </svg>
      ), 
      description: 'Project management',
      color: 'from-blue-500 to-indigo-600',
      iconColor: 'text-blue-600'
    },
    { 
      name: 'Test Automation', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-16 h-16" fill="#FFD700">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          <path d="M12 6v6l4.5 2.7-.75 1.3L12 13V6z"/>
        </svg>
      ), 
      description: 'Automated testing frameworks',
      color: 'from-cyan-400 to-blue-500',
      iconColor: 'text-yellow-500'
    },
  ];

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Navigation buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full glass-panel flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full glass-panel flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Carousel container */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {skills.map((skill, index) => {
            const isCenter = index === selectedIndex;
            const distance = Math.abs(index - selectedIndex);
            
            return (
              <div
                key={skill.name}
                className="flex-none w-80 px-4"
                style={{
                  transform: `
                    scale(${isCenter ? 1 : 0.8 - distance * 0.1}) 
                    rotateY(${index < selectedIndex ? '25deg' : index > selectedIndex ? '-25deg' : '0deg'})
                    translateZ(${isCenter ? '0px' : '-100px'})
                  `,
                  opacity: isCenter ? 1 : 0.6 - distance * 0.2,
                  transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  transformStyle: 'preserve-3d',
                }}
              >
                <div className="glass-panel rounded-3xl p-8 h-96 flex flex-col items-center justify-center text-center relative overflow-hidden group">
                  {/* Background glow effect */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${skill.color} rounded-3xl`} />
                  
                  {/* Icon container */}
                  <div className="relative mb-6 transition-transform duration-500 group-hover:scale-110">
                    <div className={`${skill.iconColor} transition-colors duration-300`}>
                      {skill.icon}
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-300/20 to-purple-300/20 blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                  </div>

                  {/* Skill name */}
                  <h3 className="font-bold text-xl cosmic-text mb-4 group-hover:text-blue-300 transition-colors duration-300">
                    {skill.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed font-light group-hover:text-white transition-colors duration-300 mb-6">
                    {skill.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1">
                    <div className={`w-full h-full bg-gradient-to-r ${skill.color} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center mt-8 space-x-3">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === selectedIndex 
                ? 'bg-blue-400 scale-125' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsCarousel;
