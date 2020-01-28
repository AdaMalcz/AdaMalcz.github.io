import React from 'react';

import InformalList from '../InformalList';
import InformalItem from '../InformalItem';

const InformalEducation = () => {
  return (
    <div>
      <h4>Informal Education</h4>
      <InformalList>
        <InformalItem
          skill="Python" 
          source="codecademy: Learn Python 3 course"
          link="https://www.codecademy.com/learn/learn-python-3"
        />
        <InformalItem
          skill="C#" 
          source="codecademy: Learn C# course"
          link="https://www.codecademy.com/learn/learn-c-sharp"
        />
        <InformalItem
          skill="PHP" 
          source="codecademy: Learn PHP course"
          link="https://www.codecademy.com/learn/learn-php"
        />
      </InformalList>
    </div>
  );
};

export default InformalEducation;