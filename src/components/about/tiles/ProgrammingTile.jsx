import React from 'react';

const getStarsPath = stars => {
  switch (stars) {
    case "1":
      return "/stars_1.jpg";
    case "2":
      return "/stars_2.jpg";
    case "3":
      return "/stars_3.jpg";
    case "4":
      return "/stars_4.jpg";
    case "5":
      return "/stars_5.jpg";
    default:
      return "/stars_0.jpg";
  }
};

const ProgrammingTile = props => {
  const starsPath = getStarsPath(props.stars);

  return (
    <div className="tile">
        <img src={props.path} alt={props.alt} />
        <div className="overlay overlay-programming">
          <p>{props.title}</p>
          <img src={starsPath} alt="Level of knowledge overlay"/>
        </div>
      </div>
  );
};

export default ProgrammingTile;