import React from 'react';
import './ImgNav.css';

const ImgNav = props => {
  return(
    <div className="mt-3 mb-2 d-flex flex-wrap justify-content-center align-items-center">
      {props.children}
    </div>
  );
};

export default ImgNav;