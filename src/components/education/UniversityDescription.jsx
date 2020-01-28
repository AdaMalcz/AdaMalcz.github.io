import React from 'react';

const UniversityDescription = props => {
  return (
    <div>
      <header className="text-center">
        <h3>{props.title}</h3>
      </header>
      <ul className="list-group list-group-flush">
        {props.children}
      </ul>
    </div>
  );
};

export default UniversityDescription;

//<div className="d-flex h-100 align-items-center">