import React from 'react';

const ExternalLink = props => {
  return <a href={props.href} target="_blank" title="Go to the website" style={{color: "black"}}><strong>{props.children}</strong></a>;
};

export default ExternalLink;