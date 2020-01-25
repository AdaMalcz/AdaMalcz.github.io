import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MDBContainer } from 'mdbreact';

import ScrollToTop from '../components/ScrollToTop';
import Header from '../components/header/Header';
import Home from './Home';
import About from './About';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';
import ProjectsGroup from './projects/ProjectsGroup';
import ProjectsSolo from './projects/ProjectsSolo';
import Chess from './projects/Chess';
import TrumpTravel from './projects/TrumpTravel';
import BookSwap from './projects/BookSwap';
import Contact from './Contact';


const root = () => {
  return (
    <Router>
      <ScrollToTop />
      <MDBContainer>
        
        <header>
          <Header title="Adam Malczewski"/>
        </header>

        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} /> {/* TO DO: style tiles, night_owl free img, rozbudowac */}
            <Route path="/education" component={Education} /> {/* TO DO: sekcje <h4> do osobnych komponentów, sekcja informal, stylowane tekstów w tabelach, RWD: osobny kontener z suwakiem na tabele-listy (https://mdbootstrap.com/docs/react/tables/scroll/), ~info o pracach dyplomowych */}
            <Route path="/skills" component={Skills} /> {/* TO DO: style SkillCard mini ekrany bez maxHeight */}
            <Route path="/projects" exact component={Projects} /> {/* TO DO: nav style, switch=>project_details, btn Project Card */}
            <Route path="/projects/group" exact component={ProjectsGroup} /> 
            <Route path="/projects/group/chess" component={Chess} />
            <Route path="/projects/group/trump" component={TrumpTravel} />
            <Route path="/projects/group/swap" component={BookSwap} />
            <Route path="/projects/solo" component={ProjectsSolo} /> {/* TO DO: projects solo page - wymienić przykładowe */}
            {/*<Route 
              path="/contact"
            render={props => <Contact {...props} />} />*/}
            <Route path="/contact" component={Contact} /> {/*  TO DO: Contact page: social icons section & mail-me form section: https://www.emailjs.com/ */}
          </Switch>
        </main>

      </MDBContainer>
    </Router>
  );
};

export default root;

/* TO DO:
- Home page (i inne) - znaczniki semantyczne article/section itp. (tak jak w about)
- index.html meta section
- header (nav) zawsze widoczny (przyklejony do ekranu?)
- pozwolenie na wykorzystanie logo PWR w sekcji education (zamiast książki)
- poprzydzielanie klas pod style .css
*/