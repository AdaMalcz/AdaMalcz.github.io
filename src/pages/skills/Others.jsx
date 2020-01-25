import React from 'react';
import { MDBRow, MDBCol } from 'mdbreact';

import DrivingCard from '../../components/skills/skill_cards/DrivingCard';

const Others = () => {
  return (
    <div>
      <MDBRow>
        <MDBCol md="4">
          <DrivingCard/>
        </MDBCol>
        <MDBCol md="4">
          
        </MDBCol >
        <MDBCol md="4">
          
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default Others;