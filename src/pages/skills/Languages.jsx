import React from 'react';
import { MDBRow, MDBCol } from 'mdbreact';

import PolishCard from '../../components/skills/skill_cards/PolishCard';
import EnglishCard from '../../components/skills/skill_cards/EnglishCard';
import GermanCard from '../../components/skills/skill_cards/GermanCard';

const Programming = () => {
  return (
    <div>
      <MDBRow>
        <MDBCol md="4">
          <EnglishCard />
        </MDBCol>
        <MDBCol md="4">
          <GermanCard />
        </MDBCol>
        <MDBCol md="4">
          <PolishCard />
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default Programming;