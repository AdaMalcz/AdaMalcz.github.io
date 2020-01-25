import React from 'react';
import { MDBRow, MDBCol } from 'mdbreact';

import ProjectSection from '../../components/projects/ProjectSection';
import ProjectDetails from '../../components/projects/ProjectDetails';

const Chess = () => {
  return(
    <div>
      <ProjectSection title="Chess">
        <p>Chess was our first group project on CodersCamp. The game includes all chess pawns and legal chess moves. It allows to set time limit for the moves and play with friend in hot-seat mode.</p>
        <ProjectDetails 
          technologies="HTML, CSS, JavaScript" 
          group="5-6 people" 
          time="2 weeks" 
          repo={<h3><i class="fab fa-github"></i></h3>}
          link="https://github.com/GWitczak/dt.Chess"
        />
        <p>Project has nice looking interface and enables to choose from different color styles. Active pawns are highlighted, as well as legal moves and attack fields for selected pawn.</p>
        <p>Main goal of the project was to practice JavaScript basics, especially DOM manipulation.</p>
      </ProjectSection>
      
      <h3>Gallery</h3>
      <MDBRow>
        <MDBCol md="6"><img src="/chess_1.jpg" title="Style choice" className="img-fluid mb-2" alt="Chess app screenshot"/></MDBCol>
        <MDBCol md="6"><img src="/chess_2.jpg" title="Settings" className="img-fluid mb-2" alt="Chess app screenshot"/></MDBCol>
        <MDBCol md="6"><img src="/chess_3.jpg" title="Game board with pawns" className="img-fluid mb-2" alt="Chess app screenshot"/></MDBCol>
        <MDBCol md="6"><img src="/chess_4.jpg" title="Highlighted fields" className="img-fluid mb-2" alt="Chess app screenshot"/></MDBCol>
        <MDBCol md="6"><img src="/chess_5.jpg" title="Pawn promotion" className="img-fluid mb-2" alt="Chess app screenshot"/></MDBCol>
      </MDBRow>
    </div>
  );
}

export default Chess;