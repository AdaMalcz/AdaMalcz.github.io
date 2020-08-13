import React from 'react';
import { MDBRow, MDBCol } from 'mdbreact';

import WebDevCard from '../../components/skills/skill_cards/WebDevCard';
import PythonCard from '../../components/skills/skill_cards/PythonCard';
import PHPCard from '../../components/skills/skill_cards/PHPCard';
import CsharpCard from '../../components/skills/skill_cards/CsharpCard';
import GitCard from '../../components/skills/skill_cards/GitCard';
import CppCard from '../../components/skills/skill_cards/CppCard';

const Programming = () => {
  return (
    <div>
      <MDBRow>
        <MDBCol md="1"></MDBCol>
        <MDBCol md="10"><WebDevCard /></MDBCol>
        <MDBCol md="1"></MDBCol>
      </MDBRow>
      <br />
      <MDBRow>
        <MDBCol md="1"></MDBCol>
        <MDBCol md="10"><CppCard /></MDBCol>
        <MDBCol md="1"></MDBCol>
      </MDBRow>
      <br />
      <MDBRow>
        <MDBCol md="6"><PythonCard /></MDBCol>
        <MDBCol md="6"><GitCard /></MDBCol>
      </MDBRow>
      <br />
      <MDBRow>
        <MDBCol md="6"><CsharpCard /></MDBCol>
        <MDBCol md="6"><PHPCard /></MDBCol>
      </MDBRow>
    </div>
  );
};

export default Programming;