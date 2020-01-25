import React from 'react';
import { MDBRow, MDBCol } from 'mdbreact';

import ProjectSection from '../../components/projects/ProjectSection';
import ProjectDetails from '../../components/projects/ProjectDetails';

const TrumpTravel = () => {
  return(
    <div>
      <ProjectSection title="Trump Travel">
        <p>Trump Travel was our second group project on CodersCamp. Application lets to compare time and distance with different travel methods <small>(by car, by foot, by bike or by public communication)</small> between two points. Additionaly, it provides information about weather conditions in the destination point (on predicted arrival time) and shows random Donald Trump quote. User can either type starting location or use device geolocation.</p>
        <ProjectDetails 
          technologies="HTML, CSS, JavaScript" 
          group="4 people" 
          time="2 weeks" 
          repo={<h3><i class="fab fa-github"></i></h3>}
          link="https://github.com/AdaMalcz/dt.Trump"
        />
        <p>Main goal of the project was using JavaScript skills in practice (especially using external API's) to create interactive website.</p>
        <p><strong>Note:</strong> to use this app on your computer, you will need your own API keys. </p>
      </ProjectSection>
      
      <h3>Gallery</h3>
      <MDBRow>
        <MDBCol md="6"><img src="/trump_1.jpg" title="Main page" className="img-fluid mb-2" alt="Trump Travel app screenshot"/></MDBCol>
        <MDBCol md="6"><img src="/trump_2.jpg" title="Location typing prompts" className="img-fluid mb-2" alt="Trump Travel app screenshot"/></MDBCol>
        <MDBCol md="6"><img src="/trump_3.jpg" title="Car map" className="img-fluid mb-2" alt="Trump Travel app screenshot"/></MDBCol>
        <MDBCol md="6"><img src="/trump_4.jpg" title="Bike map" className="img-fluid mb-2" alt="Trump Travel app screenshot"/></MDBCol>
        <MDBCol md="6"><img src="/trump_5.jpg" title="Geolocation" className="img-fluid mb-2" alt="Trump Travel app screenshot"/></MDBCol>
      </MDBRow>
    </div>
  );
}

export default TrumpTravel;