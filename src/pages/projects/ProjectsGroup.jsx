import React from 'react';
import { MDBRow } from 'mdbreact';

import ProjectCard from '../../components/projects/ProjectCard';
import ProjectSection from '../../components/projects/ProjectSection';
import ExternalLink from '../../components/ExternalLink';

const ProjectsGroup = () => {
  return (
    <div>
      <MDBRow>
        <ProjectSection title="Coders Camp">
          <p><ExternalLink href="https://coderscrew.pl/projekt-coderscamp/">Coders Camp</ExternalLink> is where I started my adventure with <strong>Web Development</strong>. During three intense months I worked on 3 group projects, covering 5 major course topics <small>(and all tools associated with them)</small>:</p>
          <ul>
            <li>HTML and CSS</li>
            <li>JavaScript Basics</li>
            <li>Interactive Websites and API's (frontend); <small>npm, webpack, babel</small></li>
            <li>Node.js (backend); <small>Express, Mongoose</small></li>
            <li>React with Redux</li>
          </ul>
          <p>My group had 4-6 members plus the tutor with supervision and helping role.</p>
        </ProjectSection>
      </MDBRow>
      <MDBRow>
        <ProjectCard 
          path="/chess.jpg"
          link="/projects/group/chess"
          icons={<div>
            <i className="fab fa-html5 mx-2"></i>
            <i className="fab fa-css3-alt mx-2"></i>
            <i className="fab fa-js mx-2"></i>
          </div>}
          title="Chess"
          description='Set the time limit for all your moves and play chess with your friend in the "hot seat" mode. First steps with JavaScript, DOM manipulation and MVC design.'
          footer="Second project on Coders Camp"
        />
        <ProjectCard 
          path="/trump.jpg"
          link="/projects/group/trump"
          icons={<div>
            <i className="fab fa-html5 mx-2"></i>
            <i className="fab fa-css3-alt mx-2"></i>
            <i className="fab fa-js mx-2"></i>
          </div>}
          title="Trump Travel"
          description="Compare different travel options between two locations, check the weather on your destination point and get your random Donald Trump quote thanks to the different public API's."
          footer="Third project on Coders Camp"
        />
        <ProjectCard 
          path="/swap.jpg"
          link="/projects/group/swap"
          icons={<div>
            <i className="fab fa-html5 mx-2"></i>
            <i className="fab fa-css3-alt mx-2"></i>
            <i className="fab fa-js mx-2"></i>
            <i className="fab fa-react mx-2"></i>
            <i className="fab fa-node-js mx-2"></i>
          </div>}
          title="BookSwap"
          description="BookSwap is unique web platform for books enthusiast. Main goal of the application is to create a community as well as the tool for searching, reviewing and exchanging books between community members using own database and API."
          footer="Final project (4th + 5th) on Coders Camp"
        />
      </MDBRow>
    </div>
  );
};

export default ProjectsGroup;