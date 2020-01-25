import React from 'react';

const PersonDescription = props => {
  return (
    <div className="d-flex h-100 align-items-center">
      <div>
        <header>
          <h3>{props.title}</h3>
        </header>
        <p>{props.children}</p>
      </div>
    </div>
  );
};

export default PersonDescription;