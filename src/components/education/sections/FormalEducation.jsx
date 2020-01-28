import React from 'react';

import EducationList from '../EducationList';
import EducationItem from '../EducationItem';
import DistionctionStar from '../../DistinctionStar';

const FormalEducation = () => {
  return (
    <div>
      <h4>Formal Education</h4>
      <EducationList>
        <EducationItem 
          period="February 2018  – July 2019" 
          education={<span>Biomedical Engineering, <em>Biomedical Optics specialization</em> (<b>master's degree</b>)</span>}
          document={<span>diploma <DistionctionStar /></span>}
        />
        <EducationItem 
          period="October 2014  – February 2018" 
          education={<span>Biomedical Engineering, <em>Biomedical Optics specialization</em> (<b>engineering degree</b>)</span>}
          document="diploma"
        />
      </EducationList>
      <p>My studies belonged to the interdisciplinary fields of science, combining medicine with engineering, as well as with the Information Technology.</p>
      <p>During my studies I learned a lot things such as working in group, using advanced equipment or conducting and analyzing scientific research. As part of an engineering thesis I designed and valued innovative medical device. My Master's thesis resulted in research providing grounds for designing another device, which my University is working on.</p>
      <p>I also got some experience with advanced engineering software and basics of programming. Checkout the Skills section for more details about them.</p>
    </div>
  );
};

export default FormalEducation;