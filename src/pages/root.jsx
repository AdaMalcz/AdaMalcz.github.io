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
import Contact from './Contact'; // https://www.emailjs.com/ (serverless email sending)


const root = () => {
  return (
    <Router>
      <ScrollToTop />
      <MDBContainer>
        
        <header>
          <Header title="Adam Malczewski - Homepage"/>
        </header>

        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/education" component={Education} />
            <Route path="/skills" component={Skills} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/projects/group" exact component={ProjectsGroup} /> 
            <Route path="/projects/group/chess" component={Chess} />
            <Route path="/projects/group/trump" component={TrumpTravel} />
            <Route path="/projects/group/swap" component={BookSwap} />
            <Route path="/projects/solo" component={ProjectsSolo} />
            <Route path="/contact" component={Contact} /> 
          </Switch>
        </main>

      </MDBContainer>
    </Router>
  );
};

export default root;

/*
! files cleaning
! Solo projects - examples, homepage itself
! warnings
! notatka: https://medium.com/@derekgc/deploy-a-react-app-on-github-user-page-25b6991dec87 (druk)
! pages semantic tags (jak w about)
! index.html meta section
! word poprawność
! github Alias
! trump readme

[TO DO]:
- ProjectSection(C) - return button (props history?)
- About(P) - expand (more tiles)
- Skills(P) => sections & Projects(P) => details - RWD tables horizontal scroll on small screens: https://mdbootstrap.com/docs/react/tables/scroll/

[TO LEARN]:
- github pages "link/section" directly entered in browser => 404 not found (why? able to fix?)

[FUTURE DEVELOPMENT]:
- Projects(P) - website references => projects navigation, chosen projects cards
- Page Header (nav) - sticked to screen (always visible)
- FormalEducation(C) - university logo: ask for permision (https://pwr.edu.pl/uczelnia/informacje-ogolne/materialy-promocyjne/logotyp)

[TO REMEMBER]:
- github pages deploy: https://medium.com/@derekgc/deploy-a-react-app-on-github-user-page-25b6991dec87
*/