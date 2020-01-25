import React from 'react';
import { MDBRow, MDBCol } from 'mdbreact';

const ProjectsSolo = () => {
  return (
    <MDBRow>
      <MDBCol md="4">
        <div className="d-flex h-100 justify-content-center align-items-center">
          <div>
            <a href="https://bitbucket.org/AdaMalcz/" target="_blank" title="Visit my BitBucket">
              <img src="/bitbucket.png" alt="BitBucket link and logo" className="img-fluid" style={{maxHeight: "200px"}} />
            </a>
          </div>
        </div>
      </MDBCol>
      <MDBCol md="8">
        <div className="d-flex h-100 justify-content-center align-items-center">
          <div>
            <p>My Solo projects are simple console applications and in most cases were made as a part of coding practice during language learning. You can find all of them on my <strong>BitBucket</strong>.</p>
            <ul>
              <li>Some serious Web Apps will show up here very soon! (on my GitHub)</li>
              <li>You can also expect Python project or some games in the future.</li>
            </ul>
          </div>
        </div>
      </MDBCol>
    </MDBRow>
  );
};

export default ProjectsSolo;