import React from 'react';
import { MDBRow, MDBCol } from 'mdbreact';

import ProjectSection from '../../components/projects/ProjectSection';
import ProjectDetails from '../../components/projects/ProjectDetails';

const BookSwap = () => {
  return(
    <div>
      <ProjectSection title="BookSwap">
        <p>BookSwap was our final group project on CodersCamp. Project was divided into two parts: back-end and front-end.</p>
        <p>BookSwap is unique web platform for books enthusiast. It enables to search books database and create user account. Every user can add "physical" copies of owned books, exchange books with other users and rate or review books from database.</p>
        <ProjectDetails 
          technologies="HTML, CSS, JavaScript, React, Node.js" 
          group="4 people" 
          time="2 weeks (back-end) 2 weeks (front-end)" 
          repo={<h3><i className="fab fa-github"></i></h3>}
          link="https://github.com/JoannaGulacz/Bookswap"
        />
        <p>Main goals of the project was to 1. create own database with API; 2. create app interface using React</p>
      </ProjectSection>

      <h3>Running</h3>
      <p>To properly launch the application on your device, follow these steps:</p>
      <ul>
        <li><b>Install</b> <small>(npm i)</small> packages in folders: project folder (main), server, client.</li>
        <li><b>Run</b> <small>(npm start)</small> both: server, client.</li>
      </ul>
      
      <h3>Gallery</h3>
      <MDBRow>
        <MDBCol md="6"><img src="/swap_1.jpg" title="Book from database" className="img-fluid mb-2" alt="Trump Travel app screenshot"/></MDBCol>
        <MDBCol md="6"><img src="/swap_7.jpg" title="Log in page" className="img-fluid mb-2" alt="Trump Travel app screenshot"/></MDBCol>
        <MDBCol md="6"><img src="/swap_2.jpg" title="Books to swap database" className="img-fluid mb-2" alt="Trump Travel app screenshot"/></MDBCol>
        <MDBCol md="6"><img src="/swap_3.jpg" title="Books database" className="img-fluid mb-2" alt="Trump Travel app screenshot"/></MDBCol>
        <MDBCol md="6"><img src="/swap_4.jpg" title="User profile" className="img-fluid mb-2" alt="Trump Travel app screenshot"/></MDBCol>
        <MDBCol md="6"><img src="/swap_5.jpg" title="User review" className="img-fluid mb-2" alt="Trump Travel app screenshot"/></MDBCol>
        <MDBCol md="6"><img src="/swap_6.jpg" title="User bookcase" className="img-fluid mb-2" alt="Trump Travel app screenshot"/></MDBCol>
      </MDBRow>
    </div>
  );
}

export default BookSwap;