import React from 'react';

import { MDBRow, MDBCol } from 'mdbreact';

const SkillExperience = props => {
  return(
    <MDBRow>
      <MDBCol>
        <h5>Experience</h5>
        {props.experience}
      </MDBCol>
    </MDBRow>
  );
};

export default SkillExperience;