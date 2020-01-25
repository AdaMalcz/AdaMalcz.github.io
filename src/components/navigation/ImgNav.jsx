import React from 'react';
import './ImgNav.css';

const AboutNav = props => {
  return(
    <div className="mt-3 d-flex flex-wrap justify-content-center align-items-center">
      {props.children}
    </div>
  );
};

export default AboutNav;