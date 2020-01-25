import React from 'react';

const HomeDescription = props => {
  return (
    <div>
      <header>
        <h3>{props.title}</h3>
      </header>
      {props.children}
    </div>
  );
};

export default HomeDescription;

//<div className="d-flex h-100 align-items-center">