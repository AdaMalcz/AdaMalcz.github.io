import React from 'react';
// images from: 1. https://pixabay.com; 2. https://cdn.aarp.net/content/dam/aarp/health/healthy-living/2019/01/1140-morning-night-owl.imgcache.rev8010a2cd98911a593ad805997eb5e1f8.jpg (night_owl)

import TilesContainer from '../../components/about/tiles/TilesContainer';
import TextTile from '../../components/about/tiles/TextTile';

const AboutMe = () => {
  return (
    <TilesContainer title="About me">
      <TextTile 
        path="/poland.jpg" 
        alt="Polish flag" 
        title="COUNTRY"
        description="I come from Poland, the most beautiful country in the world."
      />
      <TextTile 
        path="/graduated.jpg" 
        alt="Graduate cap" 
        title="EDUCATION"
        description="I am graduated student with the MSc degree in Biomedical Engineering."
      />
      <TextTile
        path="/night_owl.jpg" 
        alt="Night owl" 
        title="LIFESTYLE"
        description="I am definitely an Night Owl. My brain awakes after the sunset."
      />
    </TilesContainer>
  );
};

export default AboutMe;