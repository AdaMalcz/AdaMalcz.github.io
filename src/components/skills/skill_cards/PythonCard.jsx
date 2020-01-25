import React from 'react';

import SkillCard from '../SkillCard';
import SkillTool from '../SkillTool';

// image from: https://www.pngfuel.com/free-png/wmchm (skill_python.png)
const PythonCard = () => {
  return (
    <SkillCard 
      skill="Python" 
      path="/skill_python.png"
      experience={
        <p>I got to know Python in the penultimate semester of my studies and liked it so much that I started to explore programming discipline on my own after classes finished. Since then I completed online Python 3 course at codecademy.com and initiated my own open-source projects (console apps). In the nearest future I plan to expand my knowledge by learning GUI and pandas / pycharm / pygame (didn't decided yet).</p>
      }
      level="Entry"
      usage="Not used for a while"
      learning="Quick revision and GUI learning planned in the nearest future"
      type="list"
    >
      <SkillTool><strong>Python 3</strong></SkillTool>
      <SkillTool>JupyterNotebook</SkillTool>
      <SkillTool>unittest</SkillTool>
    </SkillCard>
  );
};

export default PythonCard;