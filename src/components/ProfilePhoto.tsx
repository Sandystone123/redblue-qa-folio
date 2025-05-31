
import { useState } from 'react';

interface ProfilePhotoProps {
  size?: string;
  className?: string;
}

const ProfilePhoto = ({ size = "w-80 h-80", className = "" }: ProfilePhotoProps) => {
  const [showPhoto, setShowPhoto] = useState(false);

  const togglePhoto = () => {
    setShowPhoto(!showPhoto);
  };

  return (
    <div 
      className={`${size} rounded-full bg-gradient-to-br from-blue-400/30 to-purple-400/30 backdrop-blur-xl flex items-center justify-center border-2 border-white/30 relative overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 ${className}`}
      onClick={togglePhoto}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 animate-pulse" />
      
      {/* Photo State */}
      <div 
        className={`absolute inset-0 transition-all duration-700 ease-in-out ${
          showPhoto ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-110 rotate-12'
        }`}
      >
        <img
          src="/lovable-uploads/26224999-f64b-4346-95e4-ba679c2f4e9e.png"
          alt="Sandeep P B"
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      {/* Initials State */}
      <div 
        className={`flex flex-col items-center justify-center z-10 transition-all duration-700 ease-in-out ${
          showPhoto ? 'opacity-0 scale-90 rotate-12' : 'opacity-100 scale-100 rotate-0'
        }`}
      >
        <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center shadow-2xl mb-6">
          <span className="text-4xl font-bold text-white">SP</span>
        </div>
        <p className="text-gray-200 text-xl font-semibold">Profile Photo</p>
        <p className="text-gray-400 text-sm mt-2">Click to view</p>
      </div>

      {/* Floating particles around photo */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-white/60 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `particle-float ${4 + Math.random() * 2}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
};

export default ProfilePhoto;
