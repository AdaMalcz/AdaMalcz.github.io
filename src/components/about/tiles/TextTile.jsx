import React from 'react';

const TextTile = props => {
  return (
    <div className="tile">
        <img src={props.path} alt={props.alt} />
        <div className="overlay overlay-text">
          <h3>{props.title}</h3>
          <br/>
          <p>{props.description}</p>
        </div>
      </div>
  );
};

export default TextTile;