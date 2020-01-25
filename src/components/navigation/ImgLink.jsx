import React from 'react';
import { Link } from 'react-router-dom';

const AboutLink = props => {
  return (
    <div className="about-link">
      <Link to={props.route}>
        <img src={props.path} alt="Navigation button image" className="img-fluid"/>
        <div className="about-overlay">
          <p>{props.name}</p>
        </div>
        <div className="about-hover"></div>
      </Link>
    </div>
  );
};

export default AboutLink;