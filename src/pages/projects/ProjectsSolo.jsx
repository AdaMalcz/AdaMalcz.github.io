import React from 'react';
import { MDBRow, MDBCol } from 'mdbreact';
import ExternalLink from '../../components/ExternalLink';

const ProjectsSolo = () => {
  return (
    <MDBRow>
      <MDBCol md="4">
        <div className="d-flex h-100 justify-content-center align-items-center">
          <div>
            <img src="/bitbucket.png" alt="BitBucket link and logo" className="img-fluid" style={{maxHeight: "200px"}} />
          </div>
        </div>
      </MDBCol>
      <MDBCol md="8">
        <div className="d-flex h-100 justify-content-center align-items-center">
          <div>
            <p>Most of my solo projects are simple console applications and were made as a part of the coding practice during language learning. You can find all of them on my <ExternalLink href="https://bitbucket.org/AdaMalcz/">BitBucket</ExternalLink>.</p>
            <p>All future projects will be published on my <ExternalLink href="https://github.com/AdaMalcz">GitHub</ExternalLink>.</p>
          </div>
        </div>
      </MDBCol>
    </MDBRow>
  );
};

export default ProjectsSolo;