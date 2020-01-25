import React from 'react';
import { MDBRow, MDBCol } from 'mdbreact';

const SocialBar = props => {
  return(
    <MDBRow>
      <MDBCol className="text-center">
        {props.children}
      </MDBCol>
    </MDBRow>
  )
};

export default SocialBar;