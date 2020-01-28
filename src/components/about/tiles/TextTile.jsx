import React from 'react';

const TextTile = props => {
  return (
    <div className="tile">
        <img src={props.path} alt={props.alt} />
        <div className="overlay overlay-text">
          <h4>{props.title}</h4>
          
          <p>{props.description}</p>
        </div>
      </div>
  );
};

export default TextTile;