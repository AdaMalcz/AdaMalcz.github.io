import React from 'react';

const PersonImage = props => {
  return (
    <div className="d-flex h-100 justify-content-center align-items-center" >
      <img src={props.path} className="img-fluid text-center" alt="My photo" style={{maxHeight: "200px"}}/>
    </div>
  );
};

export default PersonImage;