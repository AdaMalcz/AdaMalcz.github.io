import React from 'react';

import SkillCard from '../SkillCard';

// image from: https://www.pngfuel.com
const PolishCard = () => {
  return (
    <SkillCard
      skill="Polish" 
      path="/ball_pl.png"
      experience={
        <p>Polish is my native language.</p>
      }
      level="Native"
      usage="Everyday"
      learning="-"
    >
      <span>Perfect</span>

    </SkillCard>
  );
};

export default PolishCard;