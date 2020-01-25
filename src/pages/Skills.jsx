import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import ImgNav from '../components/navigation/ImgNav';
import ImgLink from '../components/navigation/ImgLink';
import Programming from './skills/Programming';
import Languages from './skills/Languages';
import Software from './skills/Software';
import Others from './skills/Others';

// nav images from: https://www.pngfuel.com
const Skills = () => {
  return (
    <Router>
      <ImgNav>
        <ImgLink route="/skills/programming" path="/programming.png" name="Programming" />
        <ImgLink route="/skills/languages" path="/languages.png" name="Languages" />
        <ImgLink route="/skills/software" path="/software.png" name="Software" />
        <ImgLink route="/skills/others" path="/others.png" name="Others" />
      </ImgNav>

      <Switch>
        <Route path="/skills" exact>
          <Redirect to="/skills/programming" />
        </Route>
        <Route path="/skills/programming" component={Programming} />
        <Route path="/skills/languages" component={Languages} />
        <Route path="/skills/software" component={Software} />
        <Route path="/skills/others" component={Others} />
      </Switch>
    </Router>
  );
};

export default Skills;