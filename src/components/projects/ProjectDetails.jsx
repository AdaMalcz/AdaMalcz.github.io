import React from 'react';
import { MDBCol, MDBRow, MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact';

const ProjectDetails = props => {
  return(
    <MDBRow>
      <MDBCol md="2"></MDBCol>
        <MDBCol md="8">
          <MDBTable className="table text-center">
            <MDBTableHead>
              <tr>
                <th scope="col">Main technolgies</th>
                <th scope="col">Group size</th>
                <th scope="col">Realization time</th>
                <th scope="col">Public repository</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr>
                <th>{props.technologies}</th>
                <td>{props.group}</td>
                <td>{props.time}</td>
                <td><a href={props.link} target="_blank" title="Go to the repository">{props.repo}</a></td>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </MDBCol>
        <MDBCol md="2"></MDBCol>
      </MDBRow>
    );
};

export default ProjectDetails;