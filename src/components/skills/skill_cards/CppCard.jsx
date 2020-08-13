import React from 'react';

import SkillCard from '../SkillCard';
import SkillTool from '../SkillTool';

// image from: https://www.pngfuel.com/free-png/owrfp (skill_cpp.png)
const CppCard = () => {
  return (
    <SkillCard 
      skill="C++" 
      path="/skill_cpp.png"
      experience={
        <p>I started to learn C++ as soon as I got an e-mail about new edition of Nokia Academy, which I have been waiting for some time. I wish to participate in the program and get my first job in the IT field.</p>
      }
      level="Entry"
      usage="Actively learning"
      learning="Finished codecademy course and looking forward to participate in Nokia Academy 2020"
      type="list"
    >
      <p><b>Basics</b></p>
      <SkillTool>User console input/output</SkillTool>
      <SkillTool>Variables</SkillTool>
      <SkillTool>Conditionals & logic</SkillTool>
      <SkillTool>Loops</SkillTool>
      <SkillTool>Functions</SkillTool>
      <SkillTool>Classes & objects</SkillTool>
      <SkillTool>References & pointers</SkillTool>
    </SkillCard>
  );
};

export default CppCard;