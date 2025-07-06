import React from 'react'

const SkillTags = ({ icon, name, isHighlighted, delay = 0 }) => (
  <div 
    className={`flex items-center gap-2 px-3 py-2 rounded-full border transition-all duration-500 ease-out transform ${
      isHighlighted 
        ? 'border-wood bg-wood/20 shadow-wood/50 text-wood' 
        : 'border-neutral-800 bg-midnight text-neutral-300 scale-100'
    }`}
    style={{ 
      transitionDelay: `${delay}ms`,
      animation: `fadeInUp 0.6s ease-out ${delay}ms both`
    }}
  >
    <span className="text-lg">{icon}</span>
    <span className="text-sm font-medium">{name}</span>
  </div>
);


export default SkillTags