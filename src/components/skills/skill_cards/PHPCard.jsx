import React from 'react';

import SkillCard from '../SkillCard';
import SkillTool from '../SkillTool';

// image from: https://www.pngfuel.com/free-png/wdnxy (skill_php.png)
const PHPCard = () => {
  return (
    <SkillCard 
      skill="PHP" 
      path="/skill_php.png"
      experience={
        <p>PHP is one of a few programming languages that I arleady tried. I completed online PHP course at codecademy.com and finished some simple projects-exercises. At the moment I don't plan to learn more PHP, but I also don't exclude returning to it in the future.</p>
      }
      level="Entry"
      usage="Not used for a while"
      learning="currently no plans for development"
      type="list"
    >
      <SkillTool>basics</SkillTool>
    </SkillCard>
  );
};

export default PHPCard;