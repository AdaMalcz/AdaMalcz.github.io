import React from 'react';
import { MDBRow, MDBCol } from 'mdbreact';

const UniversityInfo = props => {
  return (
    <li class="list-group-item">
      <MDBRow>
        <MDBCol md="4"><b>{props.data}</b></MDBCol>
        <MDBCol md="8">{props.value}</MDBCol>
      </MDBRow>
    </li>
  );
};

export default UniversityInfo;



