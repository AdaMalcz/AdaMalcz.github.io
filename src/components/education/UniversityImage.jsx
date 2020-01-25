import React from 'react';

const UniversityImage = props => {
  return (
    <div className="d-flex h-100 justify-content-center align-items-center" >
      <img src={props.path} className="img-fluid text-center" alt="University logo" style={{maxHeight: "200px"}}/>
    </div>
  );
};

export default UniversityImage;