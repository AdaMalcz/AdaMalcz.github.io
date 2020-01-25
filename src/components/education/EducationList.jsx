import React from 'react';
import { MDBRow, MDBCol } from 'mdbreact';

const EducationList = props => {
  return (
    <MDBRow>
      <MDBCol>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Period</th>
              <th scope="col">Education</th>
              <th scope="col">Document</th>
            </tr>
          </thead>
          <tbody>
            {props.children}
          </tbody>
        </table>
      </MDBCol>
    </MDBRow>
  );
};

export default EducationList;