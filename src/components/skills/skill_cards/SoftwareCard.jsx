import React from 'react';

import SkillCard from '../SkillCard';
import SkillTool from '../SkillTool';

// image from: https://pixabay.com (project.png)
const SoftwareCard = () => {
  return (
    <SkillCard
      skill="Software knowledge" 
      path="/project.png"
      type="list"
    >
      <SkillTool>Visual Studio Code</SkillTool>
      <SkillTool>Visual Studio 2019</SkillTool>
      <SkillTool>Anaconda</SkillTool>
      <SkillTool>Spyder</SkillTool>
      <SkillTool>MATLAB</SkillTool>
      <SkillTool>AutoCad</SkillTool>
      <SkillTool>Blender</SkillTool>
      <SkillTool>Microsoft Office</SkillTool>
    </SkillCard>
  );
};

export default SoftwareCard;