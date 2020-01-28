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
          <p>My adventure with Web Development and front-end started on Coders Camp in Wrocław. After passing few recruitment stages I was assigned to a group of 8 people and realised five projects. All project details and links to repositories can be found in proper Projects section.</p>
          <p>The course lasted three months and covered 5 materials parts, each of which ended with a test and project. I finished the course with the certificate confirming high overall score.</p>
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