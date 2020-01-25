import React from 'react';

import SkillCard from '../SkillCard';
import SkillTool from '../SkillTool';

// image from: https://www.pngfuel.com/free-png/bxvvp (webdev.png)
const WebDevCard = () => {
  return (
    <SkillCard 
      skill="Web Development" 
      path="/skill_webdev.png"
      experience={
        <div>
          <p>My adventure with Web Development (and front-end at all) started on Coders Camp in Wrocław (October 2019). After passing the recruitment stages (motivation letter and test from the first part of materials) I was assigned to a group of 8 people and realised five projects (1 solo and 4 group) with some of them (unfortunatelly, until the end of the bootcamp only 4 people left in the group).</p>
          <p>Becouse of high overall score from tests and projects I got certificate, that confirms acquired skills. All project details and links can be found in proper Projects section.</p>
        </div>
      }
      level="Junior"
      usage="Actively using"
      learning="Practicing by making projects"
      type="list"
    >
      <SkillTool><strong>HTML5</strong></SkillTool>
      <SkillTool><strong>CSS3</strong></SkillTool>
      <SkillTool><strong>JavaScript (ES6)</strong></SkillTool>
      <SkillTool>Bootstrap / MDBootstrap</SkillTool>
      <SkillTool>React</SkillTool>
      <SkillTool>react-router</SkillTool>
      <SkillTool>Redux</SkillTool>
      <SkillTool>Node.js</SkillTool>
      <SkillTool>npm</SkillTool>
      <SkillTool>Axios</SkillTool>
      <SkillTool>Webpack</SkillTool>
      <SkillTool>Babel</SkillTool>
      <SkillTool>Express</SkillTool>
      <SkillTool>MongoDB</SkillTool>
    </SkillCard>
  );
};

export default WebDevCard;

// TO DO: class zamiast strong