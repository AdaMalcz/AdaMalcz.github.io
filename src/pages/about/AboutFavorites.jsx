import React from 'react';
// images from: https://pixabay.com

import TilesContainer from '../../components/about/tiles/TilesContainer';
import TextTile from '../../components/about/tiles/TextTile';

const AboutFavorites = () => {
  return (
    <TilesContainer title="Favorites">
      <TextTile
        path="/blue.jpg" 
        alt="Color blue" 
        title="COLOR"
        description="My favorite color is blue."
      />
      <TextTile
        path="/rice_curry.jpg" 
        alt="Rice with curry" 
        title="FOOD"
        description="Asian cuisine rocks! My favorite meal is rice with curry."
      />
      <TextTile
        path="/reggae.jpg" 
        alt="Rasta colors" 
        title="MUSIC"
        description="Reggae plays in my heart sience I remember."
      />
    </TilesContainer>
  );
};

export default AboutFavorites;