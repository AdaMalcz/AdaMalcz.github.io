import React from 'react';

import SkillCard from '../SkillCard';
import SkillTool from '../SkillTool';

// image from: https://www.pngfuel.com/free-png/wmcmf (skill_git.png)
const GitCard = () => {
  return (
    <SkillCard 
      skill="Git" 
      path="/skill_git.png"
      experience={
        <p>I use version control system since my first exercises on studies. I know basic console commands needed to create and manage repositories and I have some experience with working on repository in group (as a contributor and owner).</p>
      }
      level="Junior"
      usage="Actively using"
      learning="Practicing by mantaining GitHub and BitBucket repositories"
      type="list"
    >
      <SkillTool>Basic console commands</SkillTool>
      <SkillTool>GitHub</SkillTool>
      <SkillTool>BitBucket</SkillTool>
    </SkillCard>
  );
};

export default GitCard;