import React from 'react';

import SkillCard from '../SkillCard';

// image from: ...
const DrivingCard = () => {
  return (
    <SkillCard
      skill="Driving Licnece" 
      path="/car_key.png"
      experience={<p>I got driving licence in Poland, 2012.</p>}
    >
      <span>category B</span>
    </SkillCard>
  );
};

export default DrivingCard;