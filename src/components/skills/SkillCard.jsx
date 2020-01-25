import React from 'react';

import SkillHeader from './SkillHeader';
import SkillExperience from './SkillExperience';
import SkillTable from './SkillTable';

const SkillCard = props => {
  return (
    <div>
      <SkillHeader skill={props.skill} path={props.path} type={props.type}>
        {props.children}
      </SkillHeader>
        {props.experience ? <SkillExperience experience={props.experience}/> : <div></div>}
        {props.level ? <SkillTable level={props.level} usage={props.usage} learning={props.learning}/> : <div></div>}
    </div>
  );
};

export default SkillCard;