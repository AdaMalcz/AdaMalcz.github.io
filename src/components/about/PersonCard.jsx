import React from 'react';
import { MDBCol, MDBRow } from 'mdbreact';

import PersonImage from './PersonImage';
import PersonDescription from './PersonDescription';

const PersonCard = () => {
  return (
      <MDBRow>
        <MDBCol md="3">
          <PersonImage path="/me.jpg" />
        </MDBCol>
        <MDBCol md="9">
          <PersonDescription title="Hi there!" >
            My name is Adam and I love simplicity. There is no simpler way to describe somebody, than using pictures. So that is the way I would like to present myself. Below, you will find some tiles describing my person by symbolic pictures. These tiles are grouped into thematic sections. I can bet that you could tell something about me just by looking at them. If you wish to know me better, hover over selected tile.
          </PersonDescription>
        </MDBCol>
      </MDBRow>
  );
};

export default PersonCard;