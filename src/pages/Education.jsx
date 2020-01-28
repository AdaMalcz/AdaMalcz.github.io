import React from 'react';

import UniversityCard from '../components/education/UniversityCard';
import FormalEducation from '../components/education/sections/FormalEducation';
import Certificates from '../components/education/sections/Certificates';
import InformalEducation from '../components/education/sections/InformalEducation';

const Education = () => {
  return (
    <div>
      <UniversityCard />
      <br/>
      <FormalEducation />
      <br/>
      <Certificates />
      <br/>
      <InformalEducation />
    </div>
  );
};

export default Education;