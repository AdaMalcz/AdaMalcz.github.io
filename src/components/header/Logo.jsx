import React from 'react';
import { MDBCol } from 'mdbreact';

const Logo = props => {
  return (
    <MDBCol size="12" className="text-center"> 
      <h1>{props.title}</h1>
    </MDBCol>
  );
};

export default Logo; 