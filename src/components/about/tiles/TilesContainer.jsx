import React from 'react';
import './Tiles.css';
import { MDBRow, MDBCol } from 'mdbreact';

const TilesContainer = props => {
  return (
    <MDBRow>
      <MDBCol size="12">
        <header><h4>{props.title}</h4></header>
        <p>{props.description}</p>
        <div className="tiles_container">
          {props.children}
        </div>
      </MDBCol>
    </MDBRow>
  );
};

export default TilesContainer;