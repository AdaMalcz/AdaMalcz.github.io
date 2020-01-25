import React from 'react';

import SkillCard from '../SkillCard';
import SkillTool from '../SkillTool';

// image from: https://www.pngfuel.com/free-png/xwfwu (skill_c_sharp.png)
const CsharpCard = () => {
  return (
    <SkillCard 
      skill="C#" 
      path="/skill_c_sharp.png"
      experience={
        <p>C# is one of a few programming languages that I arleady tried. I completed online C# course at codecademy.com and finished some simple projects-exercises. At the moment I don't plan to learn more C#, but I also don't exclude returning to it in the future.</p>
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

export default CsharpCard;