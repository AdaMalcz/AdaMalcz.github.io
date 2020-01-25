import React from 'react';

import SkillCard from '../SkillCard';

// image from: https://www.pngfuel.com
const EnglishCard = () => {
  return (
    <SkillCard
      skill="German" 
      path="/ball_ger.png"
      experience={
        <p>I studied German in high school and for one semester in college. Outside the classes I have no contact with it.</p>
      }
      level="A.1"
      usage="currently none"
      learning="I plan to learn it as my second foreign language"
    >
      <span>Basic knowledge </span>
    </SkillCard>
  );
};

export default EnglishCard;