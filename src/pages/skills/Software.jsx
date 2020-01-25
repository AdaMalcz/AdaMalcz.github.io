import React from 'react';
import { MDBRow, MDBCol } from 'mdbreact';

import SoftwareCard from '../../components/skills/skill_cards/SoftwareCard';

const Software = () => {
  return (
    <div>
      <MDBRow>
        <MDBCol >
          <p>During my studies or everyday praticing I got some experience with following software:</p>
          <SoftwareCard />
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default Software;