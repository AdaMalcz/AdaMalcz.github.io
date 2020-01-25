import React from 'react';

const HomeImage = props => {
  return (
    <div className="d-flex h-100 justify-content-center align-items-center" >
      <img src={props.path} className="img-fluid text-center" alt="Section picture" style={{maxHeight: "200px"}}/>
    </div>
  );
};

export default HomeImage;