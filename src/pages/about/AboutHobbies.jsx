import React from 'react';
// images from: https://pixabay.com

import TilesContainer from '../../components/about/tiles/TilesContainer';
import TextTile from '../../components/about/tiles/TextTile';

const AboutHobbies = () => {
  return (
    <TilesContainer title="Hobbies">
      <TextTile 
        path="/mountains.jpg" 
        alt="Mountain" 
        title="MOUNTAINS"
        description="I love mountains and hiking tours. The highest mountain I conquered was polish Rysy."
      />
      <TextTile
        path="/board_games.jpg" 
        alt="Borad game" 
        title="BOARD GAMES"
        description="I enjoy playing board games with my friends. My favorite one is Talisman."
      />
      <TextTile 
        path="/programming.jpg" 
        alt="Programming" 
        title="PROGRAMMING"
        description="Coding is my newest hobby. It gives me a lot of satisfaction."
      />
      <TextTile
        path="/music_festivals.jpg" 
        alt="Music festival" 
        title="MUSIC FESTIVALS"
        description="I love summer and music festivals! Our polish Pol'and'Rock is my number one."
      />
    </TilesContainer>
  );
};

export default AboutHobbies;