import React from 'react';
import { MDBRow, MDBCol } from 'mdbreact';

const InformalList = props => {
  return (
    <MDBRow>
      <MDBCol>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Skill</th>
              <th scope="col">Knowledge sources</th>
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

export default InformalList;