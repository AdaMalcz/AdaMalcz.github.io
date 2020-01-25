import React from 'react';
import { MDBBadge, MDBIcon } from 'mdbreact';

const SocialIcon = props => {
  return(
    <MDBBadge color="dark" className="mx-2">
      <a href={props.link} target="_blank" title="Visit my social media" style={{ color: 'inherit' }}>
        <MDBIcon fab icon={props.icon} size="3x" />
      </a>
    </MDBBadge>
  );
};

export default SocialIcon;