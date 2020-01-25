import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import PersonCard from '../components/about/PersonCard';
import ImgNav from '../components/navigation/ImgNav';
import ImgLink from '../components/navigation/ImgLink';
import AboutMe from './about/AboutMe';
import AboutHobbies from './about/AboutHobbies';
import AboutFavorites from './about/AboutFavorites';
import AboutProgramming from './about/AboutProgramming';

// nav images from: https://www.pngfuel.com
const About = () => {
  return (
    <article>
      <Router>

        <section>
          <PersonCard />
          <ImgNav>
            <ImgLink route="/about/me" path="/myself.png" name="Myself" />
            <ImgLink route="/about/hobbies" path="/hobby.png" name="Hobbies" />
            <ImgLink route="/about/favorites" path="/favorite.png" name="Favorites" />
            <ImgLink route="/about/programming" path="/programming.png" name="Programming" />
          </ImgNav>
        </section>
        
        <br/><br/>

        <section>
          <Switch>
            <Route path="/about" exact>
              <Redirect to="/about/me" />
            </Route>
            <Route path="/about/me" component={AboutMe} />
            <Route path="/about/hobbies" component={AboutHobbies} />
            <Route path="/about/favorites" component={AboutFavorites} />
            <Route path="/about/programming" component={AboutProgramming} />
          </Switch>
        </section>

      </Router>
    </article>
  );
};

export default About;