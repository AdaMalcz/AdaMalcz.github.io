import React from 'react';

import SkillCard from '../SkillCard';

// image from: https://www.pngfuel.com
const EnglishCard = () => {
  return (
    <SkillCard
      skill="English" 
      path="/ball_en.png"
      experience={
        <p>I learn english since primary school, these days mainly by practicing it during reading documentation or searching web. Recently I don't have much opportunites to speak in english, but I feel conifdent in speaking.</p>
      }
      level="B.2 / C.1"
      usage="Everyday, mainly for reading documentation"
      learning="Using in practice"
    >
      <span>Good in speech and writing</span>
    </SkillCard>
  );
};

export default EnglishCard;