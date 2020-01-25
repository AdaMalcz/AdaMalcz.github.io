import React from 'react';
// images from: https://pixabay.com

import TilesContainer from '../../components/about/tiles/TilesContainer';
import ProgrammingTile from '../../components/about/tiles/ProgrammingTile';

const AboutProgramming = () => {
  return (
    <div>
      <TilesContainer title="Programming" description="Recently used languages and technologies.">
        <ProgrammingTile
          path="/symbol_javascript.jpg"
          alt="JavaScript symbol"
          title="JavaScript"
          stars="3"
        />
        <ProgrammingTile
          path="/symbol_html.jpg"
          alt="HTML symbol"
          title="HTML"
          stars="3"
        />
        <ProgrammingTile
          path="/symbol_css.jpg"
          alt="CSS symbol"
          title="CSS"
          stars="3"
        />
        <ProgrammingTile
          path="/symbol_python.jpg"
          alt="Python symbol"
          title="Python"
          stars="2"
        />
      </TilesContainer>
      <br/>
      <h5>Other technologies</h5>
      <TilesContainer description="Technologies that I learned in the past but didn't use for a while (revision is needed).">
        <ProgrammingTile
          path="/symbol_csharp.jpg"
          alt="C-sharp symbol"
          title="C#"
          stars="1"
        />
        <ProgrammingTile
          path="/symbol_php.jpg"
          alt="PHP symbol"
          title="PHP"
          stars="1"
        />
      </TilesContainer>
    </div>
  );
};

export default AboutProgramming;