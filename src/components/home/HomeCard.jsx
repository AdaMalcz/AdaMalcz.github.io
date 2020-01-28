import React from 'react';
import { MDBCol, MDBRow } from 'mdbreact';

import HomeImage from './HomeImage';
import HomeDescription from './HomeDescription';

const HomeCard = props => {
  return (
      <MDBRow>
        <MDBCol md="3" className="my-1">
          <HomeImage path={props.path} />
        </MDBCol>
        <MDBCol md="9">
          <HomeDescription title={props.title} >
            {props.children}
          </HomeDescription>
        </MDBCol>
      </MDBRow>
  );
};

export default HomeCard;