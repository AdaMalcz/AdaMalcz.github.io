import React from 'react';
import { MDBRow, MDBCol } from 'mdbreact';

const EducationList = props => {
  return (
    <MDBRow>
      <MDBCol>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Certificate</th>
              <th scope="col">Organization</th>
              <th scope="col">Skills</th>
              <th scope="col">Document</th>
              <th scope="col">Date</th>
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