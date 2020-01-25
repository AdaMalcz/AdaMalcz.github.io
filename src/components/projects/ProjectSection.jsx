import React from 'react';
import { MDBCol } from 'mdbreact';

const ProjectSection = props => {
  return (
    <MDBCol>
      <h2>{props.title}</h2>
      {props.children}
    </MDBCol>
  );
};

export default ProjectSection;