import React from 'react';
import { MDBRow, MDBCol, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

const SkillTable = props => {
  return (
    <MDBRow>
      <MDBCol md="2"></MDBCol>
      <MDBCol md="8">
        <MDBTable className="text-center">
          <MDBTableHead>
            <tr>
              <th>Level</th>
              <th>Recent usage</th>
              <th>Skill development</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            <tr>
              <td>{props.level}</td>
              <td>{props.usage}</td>
              <td>{props.learning}</td>
            </tr>
          </MDBTableBody>
        </MDBTable>
      </MDBCol>
      <MDBCol md="2"></MDBCol>
    </MDBRow>
  );
};

export default SkillTable;